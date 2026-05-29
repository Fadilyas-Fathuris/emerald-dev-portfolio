import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { HeroScene } from "./HeroScene";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-28 pb-16">
      {/* background grid + gradients */}
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center min-h-[80vh]">
        {/* left */}
        <div className="lg:col-span-6 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for opportunities · 2026
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-display font-semibold tracking-tighter text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.02]"
            >
              Crafting <span className="text-gradient-emerald">scalable</span><br />
              experiences for the<br />
              modern web.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              I'm <span className="text-foreground font-medium">Arnav Patel</span> — a Full Stack Developer & CS student
              building production-grade web, mobile, and cloud systems with an
              obsession for clean architecture and elegant UI.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:shadow-[0_0_40px_oklch(0.78_0.17_158/0.6)] transition-all"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#cv"
              className="group inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium text-foreground hover:border-primary/40 transition-all"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center gap-8 pt-6 border-t border-border/50"
          >
            {[
              { k: "20+", v: "Projects shipped" },
              { k: "3+", v: "Years building" },
              { k: "12+", v: "Technologies" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-2xl font-semibold text-foreground">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* right — 3D scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 relative h-[420px] sm:h-[520px] lg:h-[600px]"
        >
          <div className="absolute inset-0 rounded-3xl">
            <HeroScene />
          </div>

          {/* floating chips */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 left-4 glass rounded-2xl px-4 py-2.5 flex items-center gap-2 text-xs"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="font-mono">build: passing</span>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-12 right-4 glass rounded-2xl px-4 py-2.5"
          >
            <div className="text-[10px] text-muted-foreground">Latency</div>
            <div className="font-mono text-sm text-primary">42<span className="text-muted-foreground">ms</span></div>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground/60 font-mono tracking-wider"
      >
        SCROLL ↓
      </motion.div>
    </section>
  );
}
