import { useCallback } from 'react';
import { Title } from '../styles/pages/Home';

export default function Home() {
  const handleSum = useCallback(async () => {
    const { sum } = (await import('../lib/math')).default;

    alert(sum(1, 5));
  }, []);

  return (
    <div>
      <Title>Hello World</Title>

      <button onClick={handleSum}>Sum!</button>
    </div>
  )
}