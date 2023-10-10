import Link from 'next/link';
import Container from './_components/UI/Container';
import Intro from './_components/Content/Intro';

const Home = () => {
  return (
    <main>
      <Container className='w-4/5 m-auto'>
        <Intro />
        {/* <Link
          href='/posts'
          className='hover:opacity-80 text-3xl font-semibold underline decoration-white decoration-1 text-center'
        >
          Posts
        </Link>

        <Link
          href='/recipes'
          className='hover:opacity-80 text-3xl font-semibold underline decoration-white decoration-1 text-center'
        >
          Recipes
        </Link> */}
      </Container>
    </main>
  );
};

export default Home;
