import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pokémon Illustrated Book',
  description: 'Explore the world of Pokémon with detailed information and beautiful design',
  icons: "https://img.icons8.com/?size=100&id=16460&format=png&color=000000"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")} suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}