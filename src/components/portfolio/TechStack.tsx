import { motion } from "framer-motion";
import { SectionHeader } from "./About";

const categories = [
  {
    name: "Frontend & Web",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    name: "Backend & APIs",
    items: ["Laravel", "PHP", "FastAPI", "Python", "Flask", "Node.js"],
  },
  {
    name: "Mobile Development",
    items: ["Flutter", "Dart", "Cross-Platform UI", "State Management"],
  },
  {
    name: "Data & Messaging",
    items: ["PostgreSQL", "MySQL", "RabbitMQ", "Database Modeling"],
  },
  {
    name: "DevOps & Tools",
    items: ["Docker", "Linux VPS", "Git/GitHub", "Figma", "Draw.io", "YED Graph"],
  },
];

export function TechStack() {
  return (
    <section id="stack" className="relative py-28 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          kicker="Technical Stack"
          title="Tools and technologies"
          highlight="mastered in practice."
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-[#12141c] border border-white/5 hover:border-white/10 transition-all space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <h3 className="font-display font-medium text-sm text-foreground">
                  {cat.name}
                </h3>
                <span className="text-[10px] font-mono text-muted-foreground">
                  0{idx + 1}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 text-xs text-foreground/80 font-mono transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
