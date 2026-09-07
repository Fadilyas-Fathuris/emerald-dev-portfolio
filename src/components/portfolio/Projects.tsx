import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./About";

export type Project = {
  id: string;
  title: string;
  tag: string;
  desc: string;      // 1. Deskripsi projek
  problem: string;   // 2. Masalah yang dihadapi
  solution: string;  // 3. Solusi yang diberikan dari sistem
  impact: string;    // 4. Bagaimana dampaknya
  tech: string[];
  demo?: string;
  github?: string;
  image?: string;
};

const projects: Project[] = [
  {
    id: "govconnect",
    title: "GovConnect",
    tag: "Microservices Architecture",
    desc: "Platform berbasis Microservices untuk otomatisasi dan agregasi data pengajuan surat berjenjang dari tingkat desa hingga kabupaten secara terintegrasi.",
    problem: "Pengajuan surat antar-instansi (Desa → Kecamatan → Kabupaten) sebelumnya diproses manual secara berjenjang, memakan waktu hingga beberapa hari, rentan terhadap kehilangan berkas fisik, dan ketiadaan sistem pelacakan status yang transparan.",
    solution: "Merancang dan mengimplementasikan arsitektur Microservices terdistribusi. Antarmuka web responsif dibangun menggunakan Next.js & TypeScript, layanan backend modular dengan Laravel API, pengelolaan asynchronous event message menggunakan RabbitMQ, serta standardisasi deployment menggunakan Docker di VPS Linux.",
    impact: "Memangkas waktu pemrosesan berkas berjenjang hingga 70%, menjamin sinkronisasi data instansi secara real-time, dan memberikan transparansi penuh tracking pengajuan bagi masyarakat.",
    tech: ["Next.js", "TypeScript", "Laravel", "RabbitMQ", "Docker", "VPS"],
    demo: "#",
    github: "https://github.com/Fadilyas-Fathuris/Govconnect.git",
    image: "/govconnect-logo.png",
  },
  {
    id: "skill-gap-ai",
    title: "Skill Gap Analyzer AI",
    tag: "AI & Data Engineering",
    desc: "Platform cerdas yang menganalisis transkrip akademis mahasiswa dalam format PDF dan memetakannya secara objektif terhadap standar kualifikasi industri IT terkini.",
    problem: "Mahasiswa sering kali kesulitan mengetahui secara objektif apakah kurikulum dan keahlian yang mereka pelajari di kampus telah sesuai dengan kriteria yang dicari industri teknologi saat ini.",
    solution: "Membangun sistem parsing otomatis berkas PDF menggunakan Python FastAPI, modul web scraping Kalibrr untuk menarik data lowongan kerja aktual, algoritma kalkulasi Match Score terhadap 10 job role teknologi, serta integrasi Gemini API untuk merumuskan roadmap belajar personal.",
    impact: "Membantu mahasiswa mengidentifikasi kesenjangan kompetensi secara instan dan memberikan rekomendasi pembelajaran yang spesifik serta terarah sesuai kebutuhan pasar kerja.",
    tech: ["FastAPI", "Next.js", "Python", "MySQL", "Gemini API"],
    demo: "#",
    github: "https://github.com/Fadilyas-Fathuris/showcase-edubridge.git",
    image: "/edubridge-logo.png",
  },
  {
    id: "bsu-mobile",
    title: "BSU Mobile Application",
    tag: "Mobile Engineering",
    desc: "Aplikasi mobile pengelolaan Bank Sampah berbasis komunitas warga untuk digitalisasi pencatatan dan peningkatan transparansi kas di Desa Lengkong.",
    problem: "Pencatatan setoran sampah warga, kalkulasi berat, dan pembaruan saldo tabungan kas organisasi Ibu Rumah Tangga masih dilakukan secara manual pada buku kas fisik yang rentan salah hitung dan hilang.",
    solution: "Mengembangkan aplikasi mobile cross-platform menggunakan Flutter & Dart yang terintegrasi dengan RESTful API Python Flask dan basis data MySQL. Dilengkapi fitur kalkulasi saldo otomatis, rekapitulasi setoran sampah, serta mutasi transaksi transparan.",
    impact: "Diimplementasikan langsung pada organisasi Ibu Rumah Tangga Desa Lengkong (60+ pengguna aktif), mengeliminasi kesalahan pencatatan manual hingga 100%, serta meningkatkan keaktifan warga dalam program bank sampah.",
    tech: ["Flutter", "Dart", "Python", "Flask", "MySQL"],
    demo: "#",
    github: "https://github.com/Fadilyas-Fathuris/showacase-bsu.git",
    image: "/bsu-apps.png",
  },
  {
    id: "al-falah",
    title: "Al-Falah Event Management",
    tag: "Web Application",
    desc: "Sistem informasi manajemen kegiatan dan presensi terpadu untuk monitoring kehadiran santri dan rekapitulasi kegiatan berkala di Pesantren Al-Falah.",
    problem: "Pencatatan kehadiran ratusan santri pada kegiatan rutin masih manual menggunakan lembar presensi fisik, memperlambat proses rekapitulasi dan menyulitkan pengurus dalam mengevaluasi kedisiplinan.",
    solution: "Membangun portal web terintegrasi berbasis Laravel, Next.js, dan Tailwind CSS. Dilengkapi sistem presensi otomatis berbasis timestamp terverifikasi, manajemen pendaftaran kegiatan, serta modul analitik kehadiran santri.",
    impact: "Mempercepat proses rekapitulasi kehadiran dari hitungan jam menjadi instan dalam hitungan detik, serta meningkatkan akurasi data presensi pesantren secara menyeluruh.",
    tech: ["Laravel", "Next.js", "TypeScript", "MySQL", "Tailwind CSS"],
    demo: "https://ppalfalah.id",
    github: "https://github.com/Fadilyas-Fathuris/presensi-event-backend",
    image: "/al-falah.png",
  },
];

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-28 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          kicker="Case Studies"
          title="Selected engineering work"
          highlight="with end-to-end narratives."
        />

        {/* Projects Grid */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-[#12141c] rounded-2xl border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between overflow-hidden"
            >
              {/* Image Preview Header */}
              <div className="relative aspect-[16/9] bg-black/40 border-b border-white/5 overflow-hidden flex items-center justify-center p-6">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <span className="font-display text-4xl font-bold text-white/10">
                    {p.title}
                  </span>
                )}
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-[#12141c]/90 border border-white/10 text-[11px] font-mono text-primary">
                  {p.tag}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                  </div>

                  {/* 1. Deskripsi */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {p.desc}
                  </p>

                  {/* Minimalist 3-Part Highlights */}
                  <div className="space-y-2 pt-2 border-t border-white/5 text-xs">
                    <div className="grid grid-cols-12 gap-2 py-1">
                      <span className="col-span-3 font-mono text-muted-foreground text-[11px]">Tantangan</span>
                      <span className="col-span-9 text-foreground/80 line-clamp-2 leading-relaxed">{p.problem}</span>
                    </div>
                    <div className="grid grid-cols-12 gap-2 py-1">
                      <span className="col-span-3 font-mono text-muted-foreground text-[11px]">Solusi</span>
                      <span className="col-span-9 text-foreground/80 line-clamp-2 leading-relaxed">{p.solution}</span>
                    </div>
                    <div className="grid grid-cols-12 gap-2 py-1">
                      <span className="col-span-3 font-mono text-primary text-[11px]">Dampak</span>
                      <span className="col-span-9 text-primary/90 font-medium line-clamp-2 leading-relaxed">{p.impact}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Tech Stack & Trigger */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-white/5 text-muted-foreground font-mono text-[10px]"
                      >
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 3 && (
                      <span className="px-1.5 py-0.5 text-muted-foreground/60 font-mono text-[10px]">
                        +{p.tech.length - 3}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActive(p)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors"
                  >
                    Detail Studi Kasus
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] grid place-items-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[#12141c] border border-white/10 rounded-2xl overflow-hidden my-auto shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close modal"
              >
                <X size={15} />
              </button>

              {/* Modal Visual Banner */}
              <div className="relative w-full h-48 sm:h-56 bg-black/40 border-b border-white/5 flex items-center justify-center p-6">
                {active.image ? (
                  <img
                    src={active.image}
                    alt={active.title}
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <span className="font-display text-4xl font-bold text-white/20">
                    {active.title}
                  </span>
                )}
                <div className="absolute bottom-4 left-6 px-3 py-1 rounded-md bg-[#12141c]/90 border border-white/10 text-xs font-mono text-primary">
                  {active.tag}
                </div>
              </div>

              {/* Modal Story Content */}
              <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
                <div className="space-y-2">
                  <h3 className="font-display font-semibold text-2xl text-foreground">
                    {active.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {active.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 rounded bg-white/5 border border-white/5 text-muted-foreground font-mono text-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 4-Step Narrative Layout */}
                <div className="space-y-6 pt-2 border-t border-white/5">
                  {/* Step 1: Deskripsi */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-medium">
                      01 · Ringkasan & Ruang Lingkup
                    </div>
                    <p className="text-sm text-foreground/90 leading-relaxed">
                      {active.desc}
                    </p>
                  </div>

                  {/* Step 2: Masalah */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-medium">
                      02 · Masalah & Tantangan
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-foreground/90 leading-relaxed">
                      {active.problem}
                    </div>
                  </div>

                  {/* Step 3: Solusi */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-medium">
                      03 · Solusi Sistem & Arsitektur
                    </div>
                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-sm text-foreground/90 leading-relaxed">
                      {active.solution}
                    </div>
                  </div>

                  {/* Step 4: Dampak */}
                  <div className="space-y-1.5">
                    <div className="text-xs font-mono uppercase tracking-wider text-primary font-medium">
                      04 · Dampak & Hasil Nyata
                    </div>
                    <div className="p-4 rounded-xl bg-primary/[0.04] border border-primary/20 text-sm text-foreground/90 leading-relaxed font-normal">
                      {active.impact}
                    </div>
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
                  {active.demo && active.demo !== "#" && (
                    <a
                      href={active.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-xs font-medium text-primary-foreground hover:bg-gold transition-all"
                    >
                      <ExternalLink size={13} /> Live Deployment
                    </a>
                  )}
                  {active.github && (
                    <a
                      href={active.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2 text-xs font-medium text-foreground transition-all"
                    >
                      <Github size={13} /> Source Repository
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
