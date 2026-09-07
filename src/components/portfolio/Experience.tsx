import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import { Briefcase } from "lucide-react";

const items = [
  {
    period: "Januari 2026 — Juni 2026",
    role: "Freelance IT Support",
    org: "Language Center Telkom University, Bandung",
    desc: "Mengelola konfigurasi teknis perangkat tes English Proficiency, diagnosis dan mitigasi kendala jaringan/hardware, serta monitoring kelancaran operasional tes terkomputerisasi.",
  },
  {
    period: "Desember 2025 — Februari 2026",
    role: "Freelance Web Developer",
    org: "Niskala Core ID, Bandung",
    desc: "Mengembangkan website Company Profile modern, responsif, dan teroptimasi SEO menggunakan Vite, React, dan TypeScript.",
  },
  {
    period: "Agustus 2024 — Juli 2025",
    role: "Fullstack Developer Intern",
    org: "Bandung Techno Park, Bandung",
    desc: "Membangun aplikasi mobile Bank Sampah menggunakan Flutter & Python Flask untuk warga Desa Lengkong, serta mengembangkan sistem presensi karyawan berbasis web menggunakan Laravel.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28 border-t border-white/5">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader
          kicker="Experience"
          title="Practical experience"
          highlight="and track record."
        />

        <div className="mt-16 space-y-6">
          {items.map((it, i) => (
            <motion.div
              key={it.role + it.period}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#12141c] border border-white/5 hover:border-white/10 transition-all grid md:grid-cols-12 gap-6 items-start"
            >
              <div className="md:col-span-5 space-y-2">
                <div className="text-xs font-mono text-muted-foreground">
                  {it.period}
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground leading-snug">
                  {it.role}
                </h3>
                <div className="text-xs text-muted-foreground flex items-center gap-1.5">
                  <Briefcase size={13} className="text-primary" />
                  {it.org}
                </div>
              </div>

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
