import './globals.css';

export const metadata = {
  title: 'andrewsmith.org',
  description: 'Personal website of Andrew Smith',
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
