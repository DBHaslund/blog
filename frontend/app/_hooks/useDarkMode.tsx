'use client';
import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const [theme, setTheme] = useState(
    (typeof window !== 'undefined' && localStorage.theme === 'dark') ||
      (typeof window !== 'undefined' &&
        !('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
      ? 'dark'
      : (typeof window !== 'undefined' && localStorage.theme === 'light') ||
        (typeof window !== 'undefined' &&
          !('theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: light)').matches)
      ? 'light'
      : 'dark'
  );

  useEffect(() => {
    const root = window.document.documentElement;
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
