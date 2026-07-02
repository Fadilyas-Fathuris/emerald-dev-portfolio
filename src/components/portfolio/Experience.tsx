import { motion } from "framer-motion";
import { SectionHeader } from "./About";

const items = [
  {
    period: "Januari 2026 — Sekarang",
    role: "Freelance IT Support",
    org: "Language Center Telkom University, Bandung",
    desc: "Mengelola setup perangkat teknis untuk tes English Proficiency, diagnosis dan penyelesaian masalah jaringan & hardware, serta memonitor kelancaran tes secara real-time.",
  },
  {
    period: "Desember 2025 — Sekarang",
    role: "Freelance Web Developer",
    org: "Niskala Core ID, Bandung",
    desc: "Membangun website Company Profile secara modern menggunakan Vite dan Typescript.",
  },
  {
    period: "Agustus 2024 — Juli 2025",
    role: "Fullstack Developer Intern",
    org: "Bandung Techno Park, Bandung",
    desc: "Membangun aplikasi Pengelolaan Bank Sampah dengan Flutter & Flask untuk warga Desa Lengkong, serta website presensi karyawan BTP menggunakan Laravel.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeader kicker="04 · Experience" title="A short timeline of" highlight="building things." />

        <div className="mt-16 relative">
          <div className="absolute left-[15px] md:left-1/2 md:-translate-x-px top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

          <div className="space-y-12">
            {items.map((it, i) => (
              <motion.div
                key={it.role}
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
                  <div className="font-display font-semibold text-xl">{it.role}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{it.org}</div>
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
