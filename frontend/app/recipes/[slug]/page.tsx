import Recipe from '@/app/_components/Content/Recipe';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Boo'
 }

const RecipePage = () => {
  

  return (
    <>
      <Recipe />
    </>
  );
};

export default RecipePage;
