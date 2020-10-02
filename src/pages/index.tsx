import SEO from '../components/SEO';
import { Title } from '../styles/pages/Home';

export default function Home() {
  return (
    <div>
      <SEO
        title="DevCommerce, your best e-commerce!"
        image="boost.png"
        shouldExcludeTitleSuffix
      />

      <Title>Hello World</Title>
    </div>
  )
}