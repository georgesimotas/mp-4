import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'Check the current weather in any city',
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
