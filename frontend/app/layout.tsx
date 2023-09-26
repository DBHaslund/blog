import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog, developed by DBHaslund',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' className=''>
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
