import './globals.css';
import Navitem from './_components/Navitem';

export const metadata = {
  title: 'Andrew Smith',
  description: 'Personal website of Andrew Smith',
  openGraph: {
    title: 'Andrew Smith',
    description: 'Personal website of Andrew Smith',
    images: [
      {
        url: 'https://www.andrewsmith.org/thumbnail.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="p-4 fixed w-screen top-0 left-0 right-0">
          <ul className="flex items-center justify-center space-x-6 md:space-x-10">
            <Navitem itemName={'about'} href={'/'} />
            <Navitem itemName={'skills'} href={'skills'} />
            <Navitem itemName={'portfolio'} href={'portfolio'} />
            <Navitem itemName={'contact'} href={'contact'} />
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
