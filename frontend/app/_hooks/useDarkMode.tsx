'use client';
import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? 'dark'
      : localStorage.theme === 'light' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: light)').matches)
      ? 'light'
      : 'dark' 
  );

  const root = window.document.documentElement;


  localStorage.setItem('theme', theme);
  root.classList.remove('light');
  root.classList.remove('dark');
  root.classList.add(theme);

  useEffect(() => {
    root.classList.remove('light');
    root.classList.remove('dark');
    root.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme]);

  return [theme as string, setTheme as any];
};

export default useDarkMode;
