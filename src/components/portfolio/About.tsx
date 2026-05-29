import { motion } from "framer-motion";
import { Code2, Smartphone, Layers, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Full Stack Engineering", desc: "End-to-end ownership from database schemas to pixel-perfect UI." },
  { icon: Layers, title: "Scalable Architecture", desc: "Designing systems that grow gracefully — clean, modular, typed." },
  { icon: Smartphone, title: "Mobile Development", desc: "Cross-platform apps with Flutter that feel native everywhere." },
  { icon: Rocket, title: "Modern UI / UX", desc: "Cinematic, accessible interfaces built with motion and craft." },
];

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader kicker="01 · About" title="Engineer first," highlight="designer always." />

        <div className="mt-16 grid lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-emerald-soft/20" />
              <div className="absolute inset-0 grid-bg opacity-30" />
              {/* profile placeholder */}
              <div className="absolute inset-0 grid place-items-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-emerald-soft grid place-items-center font-display text-6xl font-bold text-primary-foreground shadow-[0_0_80px_oklch(0.78_0.17_158/0.4)]">
                  A
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 glass-strong rounded-2xl p-4">
                <div className="text-xs text-muted-foreground">Currently</div>
                <div className="font-medium">B.Tech CS · Final Year</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 space-y-8"
          >
            <p className="text-xl leading-relaxed text-muted-foreground">
              I'm a Full Stack Developer focused on shipping <span className="text-foreground">production-grade applications</span>
              that scale. My toolkit spans modern React, Node, Python, mobile with Flutter, and self-hosted
              cloud deployments. I care about <span className="text-foreground">DX, performance, and the small details</span>
              that elevate software from functional to memorable.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass rounded-2xl p-5 group hover:border-primary/30 transition-colors"
                >
                  <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center mb-3 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_oklch(0.78_0.17_158/0.3)] transition-all">
                    <h.icon size={18} />
                  </div>
                  <div className="font-display font-semibold">{h.title}</div>
                  <div className="text-sm text-muted-foreground mt-1">{h.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ kicker, title, highlight }: { kicker: string; title: string; highlight: string }) {
  return (
    <div className="space-y-3">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs font-mono uppercase tracking-[0.2em] text-primary"
      >
        {kicker}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display font-semibold tracking-tighter text-4xl sm:text-5xl"
      >
        {title} <span className="text-gradient-emerald">{highlight}</span>
      </motion.h2>
    </div>
  );
}
