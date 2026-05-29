import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { SectionHeader } from "./About";

type Project = {
  title: string;
  tag: string;
  desc: string;
  tech: string[];
  long: string;
  gradient: string;
  demo?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Nimbus Analytics",
    tag: "SaaS Platform",
    desc: "Real-time analytics dashboard with cohort tracking, funnel analysis and live event streams.",
    long: "A production analytics SaaS serving 200k+ events/day. Built with a Next.js dashboard, Node.js ingestion pipeline, Postgres + TimescaleDB for time-series, and Docker-orchestrated workers behind an Nginx reverse proxy.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Docker", "Nginx"],
    gradient: "from-emerald-500/30 via-teal-500/20 to-transparent",
    demo: "#",
    github: "#",
  },
  {
    title: "Atlas Mobile",
    tag: "Mobile · Flutter",
    desc: "Cross-platform travel companion with offline maps, itinerary AI and live currency conversion.",
    long: "A Flutter mobile app for iOS and Android with offline-first sync, integrated Mapbox tiles, and a Python Flask backend exposing OpenAI-powered itinerary suggestions.",
    tech: ["Flutter", "Python", "Flask", "PostgreSQL"],
    gradient: "from-teal-500/30 via-emerald-500/20 to-transparent",
    demo: "#",
    github: "#",
  },
  {
    title: "Forge UI Kit",
    tag: "Design System",
    desc: "Open-source React component library with 60+ accessible components and a live playground.",
    long: "A typed, themeable React component library with Storybook docs, automated visual regression tests, and a GitHub Actions release pipeline publishing to npm.",
    tech: ["React", "TypeScript", "Tailwind CSS", "GitHub Actions"],
    gradient: "from-emerald-400/30 via-cyan-500/20 to-transparent",
    demo: "#",
    github: "#",
  },
  {
    title: "Pulse Devboard",
    tag: "Internal Tool",
    desc: "DevOps console for monitoring VPS fleets, deployments and Nginx routes from one pane.",
    long: "An Express + React internal tool that aggregates VPS health metrics, Docker container states, and Nginx access logs into a single real-time dashboard.",
    tech: ["React", "Express", "Docker", "Nginx", "VPS"],
    gradient: "from-emerald-600/30 via-emerald-400/20 to-transparent",
    demo: "#",
    github: "#",
  },
];

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader kicker="03 · Selected work" title="Projects with" highlight="real impact." />

        <div className="mt-16 grid md:grid-cols-6 gap-5">
          {projects.map((p, i) => (
            <motion.button
              key={p.title}
              type="button"
              onClick={() => setActive(p)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`group relative text-left glass rounded-3xl overflow-hidden hover:border-primary/40 transition-all ${
                i % 4 === 0 || i % 4 === 3 ? "md:col-span-4" : "md:col-span-2"
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient}`} />
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="font-display text-6xl md:text-7xl font-bold text-foreground/10 group-hover:text-foreground/20 transition-colors">
                    {p.title.split(" ")[0]}
                  </div>
                </div>
                <div className="absolute top-4 left-4 glass rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider">
                  {p.tag}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                  <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {p.tech.slice(0, 4).map((t) => (
                    <span key={t} className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md bg-white/5 text-muted-foreground border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] grid place-items-center p-4 bg-background/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl glass-strong rounded-3xl overflow-hidden"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-10 h-9 w-9 rounded-full glass grid place-items-center hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X size={16} />
              </button>
              <div className={`relative aspect-[16/8] bg-gradient-to-br ${active.gradient}`}>
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="font-display text-7xl font-bold text-foreground/15">{active.title.split(" ")[0]}</div>
                </div>
              </div>
              <div className="p-8 space-y-5">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-primary mb-2">{active.tag}</div>
                  <h3 className="font-display text-3xl font-semibold">{active.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{active.long}</p>
                <div className="flex flex-wrap gap-2">
                  {active.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <a href={active.demo} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:shadow-[0_0_30px_oklch(0.78_0.17_158/0.5)] transition-shadow">
                    <ExternalLink size={14} /> Live demo
                  </a>
                  <a href={active.github} className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium hover:border-primary/40 transition-colors">
                    <Github size={14} /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
