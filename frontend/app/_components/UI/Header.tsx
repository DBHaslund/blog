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
        aria-label='Menu button'
        onClick={expandHandler}
      >
        <Hamburger color='black' width='100' height='100' />{' '}
      </button>
      <div className='w-[112px]'>
        <ThemeSwitch className='md:mr-8' />
      </div>
      <Portal>
        {ariaExpanded && <div onClick={expandHandler} className='fixed top-0 left-0 w-full h-full'/>}
        <nav
          aria-expanded={ariaExpanded}
          className='absolute w-96 left-1/2 ml-[-12rem] text-center text-2xl font-bold menu top-0 bg-[#a9a9a9] dark:bg-[#333] shadow-card dark:shadow-darkCard pt-60 pb-8'
        >
          <Menu ariaExpanded expandHandler={expandHandler} />
        </nav>
      </Portal>
    </header>
  );
};

export default Header;
