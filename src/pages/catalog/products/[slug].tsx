import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import PrismicDOM from 'prismic-dom';
import { Document } from 'prismic-javascript/types/documents';
import { client } from '@/lib/prismic';
import { Container, Wrapper, WrapperImage, Title, Description, Price } from '@/styles/pages/Product';
import SEO from '@/components/SEO';

interface ProductProps {
  product: Document;
}

export default function Product({ product }: ProductProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Carregando...</p>
  }

  return (
    <Container>
      <SEO title={PrismicDOM.RichText.asText(product.data.title)} />
      <Wrapper>
        <Title>
          {PrismicDOM.RichText.asText(product.data.title)}
        </Title>

        <WrapperImage>
          <img src={product.data.thumbnail.url} alt={PrismicDOM.RichText.asText(product.data.title)}/>
        </WrapperImage>

        <Description dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asHtml(product.data.description) }} />

        <Price>
          Price: <span>{product.data.price}</span>
        </Price>
      </Wrapper>
    </Container>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<ProductProps> = async (context) => {
  const { slug } = context.params;

  const product = await client().getByUID('product', String(slug), {});

  return {
    props: {
      product,
    },
    revalidate: 5
  }
}