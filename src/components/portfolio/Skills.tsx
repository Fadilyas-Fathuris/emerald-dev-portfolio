import { motion } from "framer-motion";
import { SectionHeader } from "./About";

const groups = [
  {
    label: "Frontend",
    items: [
      { name: "Next.js", level: 92 },
      { name: "React", level: 95 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 96 },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 88 },
      { name: "Python · Flask", level: 82 },
    ],
  },
  {
    label: "Mobile",
    items: [{ name: "Flutter", level: 85 }],
  },
  {
    label: "Database",
    items: [
      { name: "PostgreSQL", level: 86 },
      { name: "MySQL", level: 80 },
    ],
  },
  {
    label: "DevOps",
    items: [
      { name: "Docker", level: 84 },
      { name: "Nginx · VPS", level: 80 },
      { name: "GitHub Actions", level: 82 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader kicker="02 · Skills" title="Tools I reach for" highlight="every day." />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((g, gi) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: gi * 0.08 }}
              className="group relative glass rounded-3xl p-6 hover:border-primary/30 transition-all overflow-hidden"
            >
              <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/20 via-transparent to-transparent pointer-events-none" />
              <div className="relative">
                <div className="flex items-center justify-between mb-5">
                  <div className="font-display font-semibold">{g.label}</div>
                  <div className="text-xs font-mono text-muted-foreground">0{gi + 1}</div>
                </div>
                <div className="space-y-4">
                  {g.items.map((s) => (
                    <div key={s.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-foreground/90">{s.name}</span>
                        <span className="text-muted-foreground font-mono text-xs">{s.level}%</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                          className="h-full rounded-full bg-gradient-to-r from-emerald-soft to-primary shadow-[0_0_12px_oklch(0.78_0.17_158/0.6)]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
