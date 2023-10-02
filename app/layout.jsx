import '../styles/globals.scss';
import { Roboto } from 'next/font/google';
import TheFooter from '@/components/TheFooter/TheFooter';
import TheHeader from '@/components/TheHeader/TheHeader';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata = {
  title: 'News',
  description: 'Main News',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <TheHeader />
        <main>
          {children}
        </main>
        <TheFooter />
      </body>
    </html>
  );
}
