import { FormEvent, useCallback, useState } from "react"
import { useRouter } from 'next/router'
import { GetServerSideProps } from "next";
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';
import Link from "next/dist/client/link";
import { client } from "@/lib/prismic";
import { Container, Wrapper } from "@/styles/pages/Search";
import SEO from '@/components/SEO';

interface SearchProps {
  searchResults: Document[];
}

export default function Search({ searchResults }: SearchProps) {
  const router = useRouter();

  const [search, setSearch] = useState('');

  const handleSearch = useCallback((e: FormEvent) => {
    e.preventDefault();

    router.push(
      `/search?q=${encodeURIComponent(search)}`
    );

    setSearch('');
  }, [search]);

  return (
    <Container>
      <SEO title="Search" />
      <Wrapper>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Pesquisar"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <button type="submit">Search</button>
        </form>

        <ul>
          {searchResults.map((product) => (
            <li key={product.id}>
              <Link href={`/catalog/products/${product.uid}`}>
                <a>
                  {PrismicDOM.RichText.asText(product.data.title)}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Wrapper>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<SearchProps> = async (context) => {
  const { q } = context.query;

  if (!q) {
    return {
      props: {
        searchResults: []
      }
    }
  }

  const searchResults = await client().query([
    Prismic.Predicates.at('document.type', 'product'),
    Prismic.Predicates.fulltext('my.product.title', String(q))
  ]);

  return {
    props: {
      searchResults: searchResults.results
    }
  } 
}