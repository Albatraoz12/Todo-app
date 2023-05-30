import './globals.css';
import { Poppins } from 'next/font/google';
import QueryWrapper from './QueryWrapper';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Todo App',
  description: 'A webbapp to create and keep track of your todos',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <QueryWrapper>{children}</QueryWrapper>
      </body>
    </html>
  );
}
