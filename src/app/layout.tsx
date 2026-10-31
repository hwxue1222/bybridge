import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Bybridge Consultancy Pte Ltd',
    template: '%s | Bybridge Consultancy Pte Ltd',
  },
  description:
    'Singapore corporate services website for incorporation, company secretary support, shareholder updates and compliance coordination.',
  metadataBase: new URL('https://www.bybridge.com.sg'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
