import '@/app/ui/global.css';
import { Inter } from 'next/font/google';
import { inter } from './ui/font';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} antialiased`}>{children}</body>
      <body>{children}</body>
    </html>
  );
}
