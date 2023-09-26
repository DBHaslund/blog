'use client';
import useDarkMode from '@/app/_hooks/useDarkMode';

const ThemeSwitch = () => {
  const [colorTheme, setTheme] = useDarkMode();

  const switchHandler = () => {
    if (colorTheme === 'light') {
      setTheme('dark');
    }
    if (colorTheme === 'dark') {
      setTheme('light');
    }
  };

  return <button onClick={switchHandler}>Theme</button>;
};

export default ThemeSwitch;
