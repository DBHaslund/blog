import Link from 'next/link';
import Container from './_components/UI/Container';
import Posts from './posts/page';
import Recipes from './recipes/page';

const Home = () => {
  return (
    <main>
      <Container className='w-4/5 m-auto'>
        <Link href='/posts' className='hover:opacity-80'>Posts</Link>
        <Posts />
        <Link href='/recipes' className='hover:opacity-80'>Recipes</Link>
        <Recipes />
      </Container>
    </main>
  );
};

export default Home;
