import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Bio */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-muted-foreground"
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span>Full Stack Developer · Bandung, ID</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08] text-foreground"
              >
                Engineering scalable web & mobile systems.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed font-normal"
              >
                Halo, saya <span className="text-foreground font-medium">Muhammad Fadilyas</span>. Mahasiswa Sistem Informasi & Full Stack Developer yang berfokus membangun arsitektur perangkat lunak yang terstruktur, efisien, dan berdampak nyata.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-gold transition-all"
              >
                Explore Case Studies
                <ArrowDown size={14} />
              </a>

              <a
                href="/CV_Muhammad_Fadilyas_Fathuris_Haryanto.pdf"
                download="CV_Muhammad_Fadilyas_Fathuris_Haryanto.pdf"
                className="inline-flex items-center gap-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 text-sm font-medium text-foreground transition-all"
              >
                <Download size={14} className="text-muted-foreground" />
                Resume (PDF)
              </a>
            </motion.div>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/5"
            >
              {[
                { label: "Production Projects", value: "4+" },
                { label: "Engineering Stack", value: "10+" },
                { label: "Academic GPA", value: "3.79" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-bold text-foreground tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-mono mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Column: Clean Architectural Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <HeroVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
