import type { Metadata } from 'next';
//import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header/Header';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import { Roboto } from 'next/font/google';
import './globals.css';

/*
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});
*/
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Note Hub',
  description: 'A simple application for creating and managing notes.',
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}`}>
        <TanStackProvider>
          <Header />
          <main>
            {children}
            {modal}
          </main>

          <footer>
            <p>
              Created <time dateTime="2026">2026</time>
            </p>
          </footer>
        </TanStackProvider>
      </body>
    </html>
  );
}
