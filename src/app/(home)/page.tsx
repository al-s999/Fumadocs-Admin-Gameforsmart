'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/provider';
import {
  Gamepad2,
  HelpCircle,
  Trophy,
  Newspaper,
  LifeBuoy,
  CreditCard,
  Database,
  Users,
  Sliders,
  ArrowRight,
  ExternalLink,
  BookOpen,
  Play,
  LayoutGrid,
  QrCode,
  LayoutDashboard,
} from 'lucide-react';

const navbarGroups = [
  {
    key: 'dashboard',
    nameId: 'Dashboard',
    nameEn: 'Dashboard',
    categoryId: 'KPI',
    categoryEn: 'KPI',
    descId: 'Meninjau total pengguna terdaftar, sesi game aktif, review kuis, dan grafik pertumbuhan.',
    descEn: 'Review total registered users, active game sessions, quiz reviews, and growth charts.',
    href: '/docs/dashboard',
    icon: LayoutDashboard,
  },
  {
    key: 'game',
    nameId: 'Game',
    nameEn: 'Game',
    categoryId: 'Game Edukasi',
    categoryEn: 'Educational Games',
    descId: 'Katalog profil game, pengaturan Play URL, pemantauan room live, dan ulasan pemain.',
    descEn: 'Game profiles catalog, Play URL settings, live room monitoring, and player reviews.',
    href: '/docs/game',
    icon: Gamepad2,
  },
  {
    key: 'quiz',
    nameId: 'Quiz',
    nameEn: 'Quiz',
    categoryId: 'Bank Soal & Kuis',
    categoryEn: 'Question Bank & Quizzes',
    descId: 'Menyusun butir pertanyaan, kunci jawaban, kurasi kuis komunitas, dan templat tolak soal.',
    descEn: 'Compose questions, answer keys, community quiz curation, and rejection templates.',
    href: '/docs/quiz',
    icon: HelpCircle,
  },
  {
    key: 'competition',
    nameId: 'Kompetisi',
    nameEn: 'Competition',
    categoryId: 'Kompetisi',
    categoryEn: 'Competitions',
    descId: 'Orkestrasi kompetisi multi-babak, proteksi whitelist peserta resmi, dan scanner presensi QR.',
    descEn: 'Multi-round competition orchestration, official participant whitelist, and QR presence scanner.',
    href: '/docs/competition',
    icon: Trophy,
  },
  {
    key: 'blog',
    nameId: 'Blog',
    nameEn: 'Blog',
    categoryId: 'Artikel Berita',
    categoryEn: 'News Articles',
    descId: 'Penerbitan artikel edukasi dan berita kompetisi, sampul WebP, dan analisis durasi membaca.',
    descEn: 'Publication of educational articles and competition news, WebP covers, and reading duration analysis.',
    href: '/docs/blog',
    icon: Newspaper,
  },
  {
    key: 'support',
    nameId: 'Support',
    nameEn: 'Support',
    categoryId: 'Tiket & Laporan',
    categoryEn: 'Tickets & Reports',
    descId: 'Penanganan tiket kendala pengguna, investigasi laporan kecurangan, dan moderasi grup.',
    descEn: 'Handling user issue tickets, fraud report investigations, and group moderation.',
    href: '/docs/support',
    icon: LifeBuoy,
  },
  {
    key: 'billing',
    nameId: 'Billing',
    nameEn: 'Billing',
    categoryId: 'Transaksi',
    categoryEn: 'Transactions',
    descId: 'Monitoring transaksi invoice Xendit, kanal pembayaran VA/QRIS, dan rekonsiliasi kas.',
    descEn: 'Monitoring Xendit invoice transactions, VA/QRIS payment channels, and cash reconciliation.',
    href: '/docs/billing',
    icon: CreditCard,
  },
  {
    key: 'master-data',
    nameId: 'Master Data',
    nameEn: 'Master Data',
    categoryId: 'Wilayah Geografis',
    categoryEn: 'Geographic Regions',
    descId: 'Standarisasi data referensi negara, provinsi, dan kota domisili untuk profil sekolah.',
    descEn: 'Standardization of country, province, and city reference data for school profiles.',
    href: '/docs/master-data',
    icon: Database,
  },
  {
    key: 'administrator',
    nameId: 'Administrator',
    nameEn: 'Administrator',
    categoryId: 'Pengguna',
    categoryEn: 'Users',
    descId: 'Manajemen akun pengguna, sanksi pemblokiran, dan pemulihan data di Tempat Sampah.',
    descEn: 'User account management, ban penalties, and data recovery in Trash Bin.',
    href: '/docs/administrator',
    icon: Users,
  },
  {
    key: 'settings',
    nameId: 'Settings',
    nameEn: 'Settings',
    categoryId: 'Setting',
    categoryEn: 'Settings',
    descId: 'Sakelar pemeliharaan global (Maintenance Mode), preferensi tema, dan audit log kepatuhan.',
    descEn: 'Global maintenance mode toggle, theme preferences, and compliance audit log.',
    href: '/docs/settings',
    icon: Sliders,
  },
];

const quickLinks = [
  {
    titleId: 'Orientasi',
    titleEn: 'Orientation',
    descId: 'Tata cara login resmi ke akun dashboard dan batasan wewenang peran admin.',
    descEn: 'Official dashboard login procedures and admin role authorization boundaries.',
    href: '/docs/getting-started',
    icon: BookOpen,
  },
  {
    titleId: 'Pantau room game',
    titleEn: 'Monitor game rooms',
    descId: 'Prosedur pemantauan sesi game edukasi yang berjalan di sekolah secara real-time.',
    descEn: 'Procedures for monitoring real-time educational game sessions running in schools.',
    href: '/docs/game/game-sessions',
    icon: Play,
  },
  {
    titleId: 'Kurasi kuis',
    titleEn: 'Quiz Curation',
    descId: 'Alur persetujuan, validasi mutu soal, dan templat catatan penolakan kuis.',
    descEn: 'Approval workflow, question quality validation, and quiz rejection templates.',
    href: '/docs/quiz/quiz-approval',
    icon: HelpCircle,
  },
  {
    titleId: 'Presensi Turnamen',
    titleEn: 'Tournament Attendance',
    descId: 'Panduan penggunaan scanner QR code untuk registrasi ulang peserta turnamen di venue.',
    descEn: 'Guide to using the QR code scanner for on-site tournament participant check-in.',
    href: '/docs/competition/receptionist',
    icon: QrCode,
  },
];

export default function HomePage() {
  const { locale } = useLanguage();
  const isEn = locale === 'en';

  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full max-w-4xl px-6 pt-4 pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-3 py-1 text-xs text-fd-muted-foreground mb-6">
          <span className="size-1.5 rounded-full bg-[#0ed4a4]" />
          {isEn ? 'Official GameForSmart admin documentation' : 'Dokumentasi resmi admin gameforsmart'}
        </div>

        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight mb-4">
          {isEn ? 'Documentation ' : 'Dokumentasi '}
          <span
            style={{
              background: 'linear-gradient(135deg, #0ed4a4, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Admin GameForSmart
          </span>
        </h1>

        <p className="text-base text-fd-muted-foreground max-w-xl leading-relaxed mb-7">
          {isEn
            ? 'Official operational guide for GameForSmart administrator staff — from basic orientation, live game room monitoring, quiz question curation, school tournament orchestration, support ticket handling, to Xendit invoice transactions.'
            : 'Panduan operasional resmi untuk staf administrator GameForSmart — mulai dari orientasi dasar, pengawasan room live game, kurasi bank soal kuis, orkestrasi turnamen sekolah, penanganan tiket bantuan, hingga transaksi invoice Xendit.'}
        </p>

        <div className="flex flex-wrap gap-2.5">
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm hover:opacity-95 transition-opacity"
            style={{ background: 'linear-gradient(135deg, #0ed4a4, #06b6d4)' }}
          >
            <Play className="size-3.5 fill-slate-950" />
            {isEn ? 'Get Started' : 'Mulai dari sini'}
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-4 py-2 text-sm font-medium hover:bg-fd-accent transition-colors"
          >
            <LayoutGrid className="size-3.5" />
            {isEn ? 'All Guides' : 'Semua panduan'}
          </Link>
          <a
            href="https://admin.gameforsmart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-4 py-2 text-sm font-medium hover:bg-fd-accent transition-colors"
          >
            <ExternalLink className="size-3.5" />
            {isEn ? 'Open admin dashboard' : 'Buka admin gameforsmart'}
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-4xl px-6">
        <div className="border-t border-fd-border" />
      </div>

      {/* Quick Links */}
      <section className="w-full max-w-4xl px-6 py-8">
        <p className="text-xs font-medium text-fd-muted-foreground uppercase tracking-widest mb-4">
          {isEn ? 'Quick Guides' : 'Panduan cepat'}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.titleId}
                href={link.href}
                className="group flex items-start gap-3.5 rounded-xl border border-fd-border bg-fd-card p-4 hover:bg-fd-accent transition-colors"
              >
                <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-fd-border bg-fd-background">
                  <Icon className="size-4 text-fd-muted-foreground" />
                </div>
                <div>
                  <div className="text-sm font-medium group-hover:text-fd-primary transition-colors">
                    {isEn ? link.titleEn : link.titleId}
                  </div>
                  <div className="text-xs text-fd-muted-foreground mt-0.5 leading-relaxed">
                    {isEn ? link.descEn : link.descId}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-4xl px-6">
        <div className="border-t border-fd-border" />
      </div>

      {/* 10 Navbar Menu Groups */}
      <section className="w-full max-w-4xl px-6 py-8">
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-medium text-fd-muted-foreground uppercase tracking-widest">
            {isEn ? 'Admin Navigation Menu' : 'Menu navigasi admin'}
          </p>
          <Link
            href="/docs"
            className="inline-flex items-center gap-1 text-xs text-fd-muted-foreground hover:text-fd-primary transition-colors"
          >
            {isEn ? 'View all' : 'Lihat semua'}
            <ArrowRight className="size-3" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {navbarGroups.map((group) => {
            const Icon = group.icon;
            return (
              <Link
                key={group.key}
                href={group.href}
                className="group flex flex-col gap-3 rounded-xl border border-fd-border bg-fd-card p-4 hover:bg-fd-accent transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-9 items-center justify-center rounded-lg border border-fd-border bg-fd-background">
                    <Icon className="size-4 text-fd-muted-foreground" />
                  </div>
                  <ArrowRight className="size-3.5 text-fd-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                </div>
                <div>
                  <div className="text-sm font-medium mb-0.5">{isEn ? group.nameEn : group.nameId}</div>
                  <div className="text-[11px] text-fd-muted-foreground mb-1.5">{isEn ? group.categoryEn : group.categoryId}</div>
                  <p className="text-xs text-fd-muted-foreground leading-relaxed line-clamp-2">
                    {isEn ? group.descEn : group.descId}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-4xl px-6">
        <div className="border-t border-fd-border" />
      </div>

      {/* CTA */}
      <section className="w-full max-w-4xl px-6 py-8 mb-4">
        <div className="rounded-xl border border-fd-border bg-fd-card px-8 py-10 text-center">
          <h2 className="text-xl font-semibold mb-2">
            {isEn ? 'Ready to serve as an administrator?' : 'Siap bertugas sebagai administrator?'}
          </h2>
          <p className="text-sm text-fd-muted-foreground mb-6 max-w-sm mx-auto leading-relaxed">
            {isEn
              ? 'Study the orientation guide or log in to the official admin dashboard to start your operational duties.'
              : 'Pelajari panduan orientasi atau masuk ke dashboard admin resmi untuk memulai tugas operasionalmu.'}
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            <a
              href="https://admin.gameforsmart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-background px-4 py-2 text-sm font-medium hover:bg-fd-accent transition-colors"
            >
              <ExternalLink className="size-3.5" />
              {isEn ? 'Open admin dashboard' : 'Buka admin gameforsmart'}
            </a>
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-background px-4 py-2 text-sm font-medium hover:bg-fd-accent transition-colors"
            >
              <BookOpen className="size-3.5" />
              {isEn ? 'Read orientation guide' : 'Baca panduan'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
