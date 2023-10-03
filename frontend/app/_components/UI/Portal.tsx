'use client';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? createPortal(<>{children}</>, document.getElementById('portal') as HTMLElement) : null;
};

export default Portal;
