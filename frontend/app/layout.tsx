import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './_utils/providers';
import Header from './_components/UI/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog, developed by DBHaslund',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' className={inter.className} suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          {children}
          <div id='portal' />
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
