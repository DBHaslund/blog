'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Hamburger } from '../SVG/Hamburger';
import ThemeSwitch from './ThemeSwitch';
import Menu from './Menu';
import Portal from './Portal';

const Header = () => {
  const [ariaExpanded, setAriaExpanded] = useState<boolean>(false);
  const [menuVis, setMenuVis] = useState<boolean>(false);

  const expandHandler = () => {
    if (!ariaExpanded) {
      setAriaExpanded(true);
    }
    if (ariaExpanded) {
      setAriaExpanded(false);
    }
  };

  return (
    <header className='flex justify-between w-4/5 mx-auto items-center relative'>
      <Link
        href='https://bzyhas.com'
        className='hidden md:block md:ml-8 mr-[30px]'
      >
        <Image
          src='/assets/logo-shadow.png'
          alt='My logo'
          width={50}
          height={50}
        />
      </Link>
      <button
        className='hamburger-button mb-8 z-10'
        aria-expanded={ariaExpanded}
        onClick={expandHandler}
      >
        <Hamburger color='black' width='100' height='100' />{' '}
      </button>
      <ThemeSwitch className='md:mr-8' />
      <Portal>
        <nav
          aria-expanded={ariaExpanded}
          className='absolute w-96 left-1/2 ml-[-12rem] text-center text-2xl font-bold menu top-0 bg-[#a9a9a9] shadow-card dark:shadow-darkCard pt-60 pb-8'
        >
          <Menu ariaExpanded expandHandler={expandHandler} />
        </nav>
      </Portal>
    </header>
  );
};

export default Header;
