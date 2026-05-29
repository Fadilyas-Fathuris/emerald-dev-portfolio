import { motion } from "framer-motion";
import { SectionHeader } from "./About";

const items = [
  {
    period: "2025 — Present",
    role: "Full Stack Developer Intern",
    org: "Helix Labs · Remote",
    desc: "Shipping production features across a Next.js + Node.js stack, owning the migration to a typed API layer and improving page-load metrics by 38%.",
  },
  {
    period: "2024 — 2025",
    role: "Freelance Engineer",
    org: "Independent",
    desc: "Delivered 6 client projects: web apps, Flutter mobile MVPs, and self-hosted dashboards on VPS infrastructure with CI/CD via GitHub Actions.",
  },
  {
    period: "2023 — 2024",
    role: "University Capstone Lead",
    org: "B.Tech Computer Science",
    desc: "Led a 4-person team building a real-time campus collaboration platform. Architected the Postgres schema and deployment pipeline. Top capstone in cohort.",
  },
  {
    period: "2022 — 2023",
    role: "Open-source Contributor",
    org: "Various OSS Projects",
    desc: "Merged PRs to React tooling and dev-ex libraries. Maintained a small TypeScript utility package with ~5k weekly downloads.",
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
