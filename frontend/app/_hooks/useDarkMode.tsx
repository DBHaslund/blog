'use client';
import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState('');

  
  useEffect(() => {
    const root = window.document.documentElement;

    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? setTheme('dark')
      : localStorage.theme === 'light' ||
        (!('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: light)').matches)
      ? setTheme('light')
      : setTheme('dark');

    localStorage.setItem('theme', theme);
    root.classList.remove('light');
    root.classList.remove('dark');
    root.classList.add(theme);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    
    root.classList.remove('light');
    root.classList.remove('dark');
    root.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme as string, setTheme as any];
};

export default useDarkMode;
