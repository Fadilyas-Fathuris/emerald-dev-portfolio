import { motion } from "framer-motion";
import { SectionHeader } from "./About";

const stack = [
  { name: "Next.js", cat: "Frontend" },
  { name: "React", cat: "Frontend" },
  { name: "TypeScript", cat: "Language" },
  { name: "Tailwind", cat: "Frontend" },
  { name: "Node.js", cat: "Backend" },
  { name: "Express", cat: "Backend" },
  { name: "Python", cat: "Language" },
  { name: "Flask", cat: "Backend" },
  { name: "Flutter", cat: "Mobile" },
  { name: "PostgreSQL", cat: "Database" },
  { name: "MySQL", cat: "Database" },
  { name: "Docker", cat: "DevOps" },
  { name: "Nginx", cat: "DevOps" },
  { name: "GitHub Actions", cat: "DevOps" },
  { name: "VPS", cat: "DevOps" },
  { name: "Three.js", cat: "Frontend" },
];

export function TechStack() {
  return (
    <section id="stack" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader kicker="05 · Tech stack" title="The full" highlight="toolkit." />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 relative glass rounded-3xl p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-emerald-soft/10 pointer-events-none" />

          <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {stack.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ y: -4, scale: 1.04 }}
                className="group relative aspect-square rounded-2xl glass flex flex-col items-center justify-center text-center p-3 cursor-pointer hover:border-primary/40 transition-colors"
              >
                <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover:bg-primary/5 transition-colors" />
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_30px_oklch(0.78_0.17_158/0.3)_inset]" />
                <div className="relative font-display font-semibold text-sm md:text-base">{t.name}</div>
                <div className="relative text-[10px] font-mono uppercase tracking-wider text-muted-foreground mt-1">{t.cat}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
