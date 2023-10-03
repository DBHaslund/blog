'use client';
import useDarkMode from '@/app/_hooks/useDarkMode';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa6';

const ThemeSwitch = ({ className }: { className?: string }) => {
  const [switchActive, setSwitchActive] = useState('dmSwitch');
  const [colorTheme, setTheme] = useDarkMode();

  useEffect(() => {
    if (colorTheme === 'light') {
      setSwitchActive('dmSwitch');
    }
    if (colorTheme === 'dark') {
      setSwitchActive('dmSwitch active');
    }
  }, [colorTheme]);

  const switchHandler = () => {
    if (colorTheme === 'light') {
      setTheme('dark');
      setSwitchActive('dmSwitch');
    }
    if (colorTheme === 'dark') {
      setTheme('light');
      setSwitchActive('dmSwitch active');
    }
  };

  const classes = `${switchActive} ${className} items-center shadow-card dark:shadow-darkCard z-10`;

  return (
    <button onClick={switchHandler} className={classes}>
      <span>
        <i>
          <FaSun />
        </i>
      </span>
      <span>
        <i>
          <FaMoon />
        </i>
      </span>
    </button>
  );
};

export default ThemeSwitch;
