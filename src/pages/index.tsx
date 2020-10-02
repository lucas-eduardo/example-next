import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Prismic from 'prismic-javascript';
import PrismicDOM from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';
import { client } from '@/lib/prismic';
import { Container, Wrapper, Title } from '@/styles/pages/Home';
import SEO from '@/components/SEO';

interface HomeProps {
  recommendedProducts: Document[]
}

export default function Home({ recommendedProducts }: HomeProps) {
  return (
    <Container>
      <SEO title="Produtos" />
      <Wrapper>
        <Title>Produtos</Title>

        <ul>
          {recommendedProducts.map((recommendedProduct) => (
            <li key={recommendedProduct.id}>
              <Link href={`/catalog/products/${recommendedProduct.uid}`}>
                <a>
                  {PrismicDOM.RichText.asText(recommendedProduct.data.title)}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </Wrapper>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const recommendedProducts = await client().query([
    Prismic.Predicates.at('document.type', 'product')
  ]);

  return {
    props: {
      recommendedProducts: recommendedProducts.results
    }
  }
}