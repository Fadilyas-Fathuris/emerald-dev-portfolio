import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    period: "2025 — Sekarang",
    degree: "S1 Sistem Informasi (Program Ekstensi)",
    school: "Telkom University, Bandung",
    status: "Sedang Berjalan",
    desc: "Fokus studi: Integrasi Aplikasi Enterprise (EAI), Arsitektur Sistem Operasi, Analisis Keamanan Sistem Informasi, dan Manajemen Layanan TI.",
  },
  {
    period: "2022 — 2025",
    degree: "D3 Sistem Informasi",
    school: "Telkom University, Bandung",
    status: "IPK 3,79 · Cumlaude",
    isHonors: true,
    desc: "Mempelajari fundamental rekayasa perangkat lunak, perancangan basis data relasional, algoritma pemrograman, pengembangan aplikasi web & mobile lanjut, serta implementasi UI/UX.",
  },
];

export function Skills() {
  return (
    <section id="education" className="relative py-28 border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          kicker="Education"
          title="Academic foundation"
          highlight="and theoretical rigor."
        />

        <div className="mt-16 space-y-6">
          {education.map((it, i) => (
            <motion.div
              key={it.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#12141c] border border-white/5 hover:border-white/10 transition-all grid md:grid-cols-12 gap-6 items-start"
            >
              {/* Left Column: Period & Degree */}
              <div className="md:col-span-5 space-y-2">
                <div className="text-xs font-mono text-muted-foreground">
                  {it.period}
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground leading-snug">
                  {it.degree}
                </h3>
                <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <GraduationCap size={14} className="text-primary" />
                  {it.school}
                </div>

                {it.isHonors && (
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20 text-primary text-[11px] font-mono mt-2">
                    <Award size={12} />
                    {it.status}
                  </div>
                )}
              </div>

              {/* Right Column: Description & Coursework */}
              <div className="md:col-span-7">
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {it.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
