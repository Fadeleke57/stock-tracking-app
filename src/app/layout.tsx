import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from './homepage/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bonsai Finance',
  description: 'Investment Research',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
