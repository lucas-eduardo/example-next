import { GetServerSideProps } from 'next';
import { Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface HomeProps {
  recommendedProducts: IProduct[]
}

export default function Home({ recommendedProducts }: HomeProps) {
  return (
    <div>
      <section>
        <Title>Products</Title>

        <ul>
          {recommendedProducts.map((recommendedProduct) => (
            <li key={recommendedProduct.id}>
              {recommendedProduct.title}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/recommended`);
  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts
    }
  }
}