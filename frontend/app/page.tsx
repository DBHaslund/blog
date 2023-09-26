import ThemeSwitch from './_components/UI/ThemeSwitch';
import Posts from './posts/page';
import Recipes from './recipes/page';


const Home = () => { 
  return <main>
    <ThemeSwitch />
    <Posts />
    <Recipes />
  </main>;
};

export default Home;
