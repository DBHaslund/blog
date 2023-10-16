import Container from './_components/UI/Container';
import Intro from './_components/Content/Intro';
import Card from './_components/UI/Card';

const Home = () => {
  return (
    <main>
      <Container className='w-4/5 m-auto'>
        <Card>
          <Intro />
        </Card>
      </Container>
    </main>
  );
};

export default Home;
