import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
