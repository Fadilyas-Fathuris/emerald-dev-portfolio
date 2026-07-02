import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { SectionHeader } from "./About";

type Project = {
  title: string;
  tag: string;
  desc: string;
  tech: string[];
  long: string;
  gradient: string;
  demo?: string;
  github?: string;
  image?: string;
};

const projects: Project[] = [
  {
    title: "GovConnect",
    tag: "Microservices Web App",
    desc: "Agregasi data pengajuan surat tingkat desa hingga kabupaten berbasis microservices.",
    long: "Membangun website berbasis microservices untuk agregasi data pengajuan surat tingkat desa hingga kabupaten. Menggunakan Next.js dan Typescript untuk Frontend, Laravel untuk Backend dan RabbitMQ untuk pengelolaan event message, serta implementasi infrastruktur pengembangan menggunakan Docker hingga deployment melalui VPS.",
    tech: ["Next.js", "TypeScript", "Laravel", "RabbitMQ", "Docker", "VPS"],
    gradient: "from-emerald-500/30 via-teal-500/20 to-transparent",
    demo: "#",
    github: "https://github.com/Fadilyas-Fathuris/Govconnect.git",
    image: "/govconnect-logo.png",
  },
  {
    title: "Skill Gap Analyzer AI",
    tag: "AI Platform",
    desc: "Platform analisis kesenjangan skill mahasiswa berbasis AI dari transkrip PDF.",
    long: "Platform analisis kesenjangan skill mahasiswa berbasis AI. Fitur utama mencakup parsing otomatis transkrip PDF, kalkulasi match score terhadap 10 job role di industri teknologi, dan generasi roadmap belajar personal menggunakan Gemini API. Dibangun dengan FastAPI, Next.js, MySQL, dan terintegrasi dengan web scraping Kalibrr.",
    tech: ["FastAPI", "Next.js", "MySQL", "Gemini API", "Python"],
    gradient: "from-teal-500/30 via-emerald-500/20 to-transparent",
    demo: "#",
    github: "#",
    image: "/edubridge-logo.png",
  },
  {
    title: "BSU Mobile Apps",
    tag: "Mobile App",
    desc: "Aplikasi Pengelolaan Bank Sampah untuk mendukung pengelolaan lingkungan warga Desa Lengkong.",
    long: "Membangun aplikasi Pengelolaan Bank Sampah bernama Aplikasi BSU menggunakan Flutter dan Python Flask. Diimplementasikan pada organisasi Ibu Rumah Tangga Desa Lengkong yang berjumlah 60+ Ibu Rumah Tangga.",
    tech: ["Flutter", "Dart", "Python", "Flask"],
    gradient: "from-emerald-400/30 via-cyan-500/20 to-transparent",
    demo: "#",
    github: "#",
    image: "/bsu-apps.png",
  },
];

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader kicker="03 · Selected work" title="Projects with" highlight="real impact." />

        <div className="mt-16 grid md:grid-cols-6 gap-5">
          {projects.map((p, i) => (
            <motion.button
              key={p.title}
              type="button"
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`group relative text-left glass rounded-3xl overflow-hidden hover:border-primary/40 transition-all flex flex-col h-full ${
                i === 0 ? "md:col-span-6" : "md:col-span-3"
              }`}
            >
              <div className={`relative overflow-hidden ${i === 0 ? "aspect-[16/10] md:aspect-[21/9]" : "aspect-[16/10]"}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 grid place-items-center">
                  {p.image ? (
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  ) : (
                    <div className="font-display text-6xl md:text-7xl font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors">
                      {p.title.split(" ")[0]}
                    </div>
                  )}
                </div>
                <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider">
                  {p.tag}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
              </div>
              <div className="p-6 space-y-3 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {p.tech.slice(0, 4).map((t) => (
                    <span key={t} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md bg-white/5 text-muted-foreground border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] grid place-items-center p-4 bg-background/80 backdrop-blur-xl overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl glass-strong rounded-3xl overflow-hidden my-auto"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-10 h-9 w-9 rounded-full glass grid place-items-center hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
              {active.image ? (
                <div className={`relative w-full h-64 md:h-80 bg-gradient-to-br ${active.gradient} flex items-center justify-center p-6 overflow-hidden`}>
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <img src={active.image} alt={active.title} className="relative z-10 max-w-full max-h-full object-contain rounded-lg shadow-2xl" />
                </div>
              ) : (
                <div className={`relative aspect-[16/8] bg-gradient-to-br ${active.gradient}`}>
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="font-display text-7xl font-bold text-foreground/15">{active.title.split(" ")[0]}</div>
                  </div>
                </div>
              )}
              <div className="p-8 space-y-5">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-primary mb-2">{active.tag}</div>
                  <h3 className="font-display text-3xl font-semibold">{active.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{active.long}</p>
                <div className="flex flex-wrap gap-2">
                  {active.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <a href={active.demo} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:shadow-[0_0_30px_oklch(0.78_0.17_158/0.5)] transition-shadow">
                    <ExternalLink size={14} /> Live demo
                  </a>
                  <a href={active.github} className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium hover:border-primary/40 transition-colors">
                    <Github size={14} /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
