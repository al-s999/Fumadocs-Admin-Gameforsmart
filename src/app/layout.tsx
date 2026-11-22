import { AppProvider } from '@/components/provider';
import './global.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const inter = localFont({
  src: '../fonts/InterVariable.woff2',
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://admin-docs.gameforsmart.com'),
  title: {
    template: '%s | Admin GameForSmart',
    default: 'Dokumentasi Admin GameForSmart - Panduan Operasional Dashboard Admin',
  },
  description: 'Pusat panduan operasional terpadu staf administrator GameForSmart untuk mengelola kuis, game edukasi, turnamen sekolah, pusat bantuan, transaksi, dan pengaturan sistem.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
