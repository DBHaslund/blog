'use client';
import Link from 'next/link';

const Menu = ({
  ariaExpanded,
  expandHandler,
}: {
  ariaExpanded: boolean;
  expandHandler: React.MouseEventHandler;
}) => {
  return (
    <>
      <Link href='/' className='block' onClick={expandHandler}>
        Home
      </Link>
      <Link href='/posts' className='block' onClick={expandHandler}>
        Posts
      </Link>
      <Link href='/recipes' className='block' onClick={expandHandler}>
        Recipes
      </Link>
    </>
  );
};

export default Menu;
