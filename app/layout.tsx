import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MU - Alterra',
  description: 'Mapa virtual de Alterra',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='no-scrollbar overflow-y-auto'>
      <body className={inter.className}>
        {children}
        <Navbar />
      </body>
    </html>
  );
}
