import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';

import { locales } from '@/lib/i18n';
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
    default: 'Dokumentasi Admin GameForSmart - Panduan Operasional Portal Admin',
  },
  description: 'Pusat panduan operasional terpadu staf administrator GameForSmart untuk mengelola kuis, game edukasi, turnamen sekolah, pusat bantuan, transaksi, dan pengaturan sistem.',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="id" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider i18n={{ locales }}>{children}</RootProvider>
      </body>
    </html>
  );
}
