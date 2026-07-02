import { motion } from "framer-motion";
import { SectionHeader } from "./About";

const education = [
  {
    period: "2025 — Sekarang",
    degree: "S1 Sistem Informasi (Program Ekstensi)",
    school: "Telkom University, Bandung",
    desc: "Mata kuliah terkait: Integrasi Aplikasi Enterprise, Sistem Operasi, Keamanan Sistem Informasi.",
  },
  {
    period: "2022 — 2025",
    degree: "D3 Sistem Informasi - IPK 3,79 (Cumlaude)",
    school: "Telkom University, Bandung",
    desc: "Mata kuliah terkait: Algoritma Pemrograman Komputer, Rekayasa Perangkat Lunak, Pengujian Perangkat Lunak, Pemrograman Web, Pemodelan Proses Bisnis, Pengolahan Basis Data, Implementasi Desain Pengalaman Pengguna, Implementasi Desain Antarmuka Pengguna, Perancangan Basis Data, Dasar Pemrograman Perangkat Bergerak, Pengembangan Aplikasi Berbasis Web, Pemrograman Perangkat Bergerak Lanjut.",
  },
];

export function Skills() {
  return (
    <section id="education" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader kicker="02 · Education" title="Academic" highlight="background." />

        <div className="mt-16 relative">
          <div className="absolute left-[15px] md:left-1/2 md:-translate-x-px top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

          <div className="space-y-12">
            {education.map((it, i) => (
              <motion.div
                key={it.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`relative grid md:grid-cols-2 gap-6 items-start ${
                  i % 2 === 0 ? "" : "md:[direction:rtl]"
                }`}
              >
                {/* dot */}
                <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-4 z-10">
                  <div className="relative h-3 w-3 rounded-full bg-primary shadow-[0_0_20px_oklch(0.78_0.17_158/0.8)]">
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60" />
                  </div>
                </div>

                <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12 [direction:ltr]"}`}>
                  <div className="text-xs font-mono uppercase tracking-wider text-primary mb-1">{it.period}</div>
                  <div className="font-display font-semibold text-xl">{it.degree}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{it.school}</div>
                </div>

                <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12 [direction:ltr]"}`}>
                  <div className="glass rounded-2xl p-5 hover:border-primary/30 transition-colors">
                    <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
