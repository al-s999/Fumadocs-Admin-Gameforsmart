import Link from 'next/link';
import {
  Rocket,
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
  Eye,
  CheckSquare,
  QrCode,
  LayoutDashboard,
} from 'lucide-react';

const navbarGroups = [
  {
    name: 'Dashboard',
    category: 'Metrik Platform · KPI',
    description: 'Meninjau total pengguna terdaftar, sesi game aktif, review kuis, dan grafik pertumbuhan.',
    href: '/docs/dashboard',
    icon: LayoutDashboard,
  },
  {
    name: 'Game',
    category: '7 Game Edukasi · Live Engine',
    description: 'Katalog profil 7 game resmi, pengaturan Play URL, pemantauan room live, dan ulasan pemain.',
    href: '/docs/game',
    icon: Gamepad2,
  },
  {
    name: 'Quiz',
    category: 'Bank Soal & Kurasi · Kuis',
    description: 'Menyusun butir pertanyaan, kunci jawaban, kurasi kuis komunitas, dan templat tolak soal.',
    href: '/docs/quiz',
    icon: HelpCircle,
  },
  {
    name: 'Competition',
    category: 'Turnamen & Scanner · Babak',
    description: 'Orkestrasi turnamen multi-babak, proteksi whitelist peserta resmi, dan scanner presensi QR.',
    href: '/docs/competition',
    icon: Trophy,
  },
  {
    name: 'Blog',
    category: 'Artikel Berita · TipTap Editor',
    description: 'Penerbitan artikel edukasi dan berita turnamen, sampul WebP, dan analisis durasi membaca.',
    href: '/docs/blog',
    icon: Newspaper,
  },
  {
    name: 'Support',
    category: 'Tiket & Laporan · SLA Bantuan',
    description: 'Penanganan tiket kendala pengguna, investigasi laporan kecurangan, dan moderasi grup.',
    href: '/docs/support',
    icon: LifeBuoy,
  },
  {
    name: 'Billing',
    category: 'Transaksi Xendit · Keuangan',
    description: 'Monitoring transaksi invoice Xendit, kanal pembayaran VA/QRIS, dan rekonsiliasi kas.',
    href: '/docs/billing',
    icon: CreditCard,
  },
  {
    name: 'Master Data',
    category: 'Wilayah Geografis · Alamat',
    description: 'Standarisasi data referensi negara, provinsi, dan kota domisili untuk profil sekolah.',
    href: '/docs/master-data',
    icon: Database,
  },
  {
    name: 'Administrator',
    category: 'Pengguna & Trash Bin · Moderasi',
    description: 'Manajemen akun pengguna, sanksi pemblokiran, dan pemulihan data di Tempat Sampah.',
    href: '/docs/administrator',
    icon: Users,
  },
  {
    name: 'Settings',
    category: 'Mode Maintenance · Log Audit',
    description: 'Sakelar pemeliharaan global (Maintenance Mode), preferensi tema, dan audit log kepatuhan.',
    href: '/docs/settings',
    icon: Sliders,
  },
];

const quickLinks = [
  {
    title: 'Orientasi admin baru',
    description: 'Tata cara login resmi ke akun dashboard dan batasan wewenang peran admin.',
    href: '/docs/getting-started',
    icon: Rocket,
  },
  {
    title: 'Pengawasan room game live',
    description: 'Monitoring room aktif real-time, melacak 6 digit PIN, dan tombol force close sesi.',
    href: '/docs/game/game-sessions',
    icon: Eye,
  },
  {
    title: 'Persetujuan kurasi kuis',
    description: 'Meninjau kelayakan soal kiriman komunitas/guru dan menetapkan persetujuan atau penolakan.',
    href: '/docs/quiz/quiz-approval',
    icon: CheckSquare,
  },
  {
    title: 'Scanner tiket resepsionis',
    description: 'Panduan kamera scanner QR kartu peserta turnamen luring untuk presensi check-in fisik.',
    href: '/docs/competition/receptionist',
    icon: QrCode,
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      {/* Hero */}
      <section className="w-full max-w-4xl px-6 pt-4 pb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-fd-border bg-fd-card px-3 py-1 text-xs text-fd-muted-foreground mb-6">
          <span className="size-1.5 rounded-full bg-[#0ed4a4]" />
          Dokumentasi resmi admin gameforsmart
        </div>

        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight mb-4">
          Dokumentasi{' '}
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
          Panduan operasional resmi untuk staf administrator GameForSmart — mulai dari orientasi
          dasar, pengawasan room live 7 game, kurasi bank soal kuis, orkestrasi turnamen sekolah,
          penanganan tiket bantuan, hingga transaksi invoice Xendit.
        </p>

        <div className="flex flex-wrap gap-2.5">
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm hover:opacity-95 transition-opacity"
            style={{ background: 'linear-gradient(135deg, #0ed4a4, #06b6d4)' }}
          >
            <Play className="size-3.5 fill-slate-950" />
            Mulai dari sini
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-4 py-2 text-sm font-medium hover:bg-fd-accent transition-colors"
          >
            <LayoutGrid className="size-3.5" />
            Semua panduan
          </Link>
          <a
            href="https://admin.gameforsmart.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-card px-4 py-2 text-sm font-medium hover:bg-fd-accent transition-colors"
          >
            <ExternalLink className="size-3.5" />
            Buka dashboard admin
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
          Panduan cepat
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {quickLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.title}
                href={link.href}
                className="group flex items-start gap-3.5 rounded-xl border border-fd-border bg-fd-card p-4 hover:bg-fd-accent transition-colors"
              >
                <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg border border-fd-border bg-fd-background">
                  <Icon className="size-4 text-fd-muted-foreground" />
                </div>
                <div>
                  <div className="text-sm font-medium group-hover:text-fd-primary transition-colors">
                    {link.title}
                  </div>
                  <div className="text-xs text-fd-muted-foreground mt-0.5 leading-relaxed">
                    {link.description}
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
            Menu navigasi admin
          </p>
          <Link
            href="/docs"
            className="inline-flex items-center gap-1 text-xs text-fd-muted-foreground hover:text-fd-primary transition-colors"
          >
            Lihat semua
            <ArrowRight className="size-3" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {navbarGroups.map((group) => {
            const Icon = group.icon;
            return (
              <Link
                key={group.name}
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
                  <div className="text-sm font-medium mb-0.5">{group.name}</div>
                  <div className="text-[11px] text-fd-muted-foreground mb-1.5">{group.category}</div>
                  <p className="text-xs text-fd-muted-foreground leading-relaxed line-clamp-2">
                    {group.description}
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
          <h2 className="text-xl font-semibold mb-2">Siap bertugas sebagai administrator?</h2>
          <p className="text-sm text-fd-muted-foreground mb-6 max-w-sm mx-auto leading-relaxed">
            Pelajari panduan orientasi atau masuk ke dashboard admin resmi untuk memulai tugas operasionalmu.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            <a
              href="https://admin.gameforsmart.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-background px-4 py-2 text-sm font-medium hover:bg-fd-accent transition-colors"
            >
              <ExternalLink className="size-3.5" />
              Buka admin.gameforsmart.com
            </a>
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center gap-2 rounded-lg border border-fd-border bg-fd-background px-4 py-2 text-sm font-medium hover:bg-fd-accent transition-colors"
            >
              <BookOpen className="size-3.5" />
              Baca panduan orientasi
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
