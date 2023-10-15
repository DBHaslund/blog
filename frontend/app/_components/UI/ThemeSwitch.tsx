'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa6';

const ThemeSwitch = ({ className }: { className?: string }) => {
  const [mounted, setMounted] = useState(false);
  const [switchActive, setSwitchActive] = useState<string>('dmSwitch');
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    if (theme === 'dark' || resolvedTheme === 'dark') {
      setSwitchActive('dmSwitch active');
    }
  }, []);

  if (!mounted) {
    return null;
  }

  const switchHandler = () => {
    if (theme === 'dark' || resolvedTheme === 'dark') {
      setTheme('light');
      setSwitchActive('dmSwitch');
    } else {
      setTheme('dark');
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
