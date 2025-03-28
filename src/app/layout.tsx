import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import Layout from '@/components/Layout';

const pop = Poppins({
  weight: ['400', '700'], // Specify font weights
  variable: '--font-poppins',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Davidson Initiative',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={pop.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
