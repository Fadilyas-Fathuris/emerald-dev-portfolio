import { motion } from "framer-motion";
import { useState } from "react";
import { Server, Layers, Cpu, Database, GitBranch, ArrowRight, Check } from "lucide-react";

export function HeroVisual() {
  const [activeTab, setActiveTab] = useState<"blueprint" | "principles">("blueprint");

  return (
    <div className="relative w-full max-w-xl mx-auto">
      {/* Subtle warm ambient light in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-primary/5 blur-[100px] pointer-events-none" />

      {/* Main Container Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-[#12141c] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/40"
      >
        {/* Card Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="text-xs font-mono text-muted-foreground tracking-wide uppercase">
              System Architecture
            </span>
          </div>

          <div className="flex items-center gap-1 bg-white/5 p-0.5 rounded-lg border border-white/5 text-[11px] font-mono">
            <button
              onClick={() => setActiveTab("blueprint")}
              className={`px-3 py-1 rounded-md transition-all ${
                activeTab === "blueprint"
                  ? "bg-white/10 text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Blueprint
            </button>
            <button
              onClick={() => setActiveTab("principles")}
              className={`px-3 py-1 rounded-md transition-all ${
                activeTab === "principles"
                  ? "bg-white/10 text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Principles
            </button>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          {activeTab === "blueprint" ? (
            <div className="space-y-4">
              {/* Architecture Nodes */}
              <div className="space-y-2.5">
                {[
                  {
                    icon: Layers,
                    layer: "Presentation Layer",
                    tech: "Next.js 15 · TypeScript · Tailwind CSS · Flutter",
                    detail: "Server-side rendering, responsive UI, accessible micro-interactions",
                  },
                  {
                    icon: Server,
                    layer: "Service & Business Logic",
                    tech: "Laravel · Python FastAPI / Flask",
                    detail: "RESTful endpoints, domain services, type-safe validations",
                  },
                  {
                    icon: GitBranch,
                    layer: "Message & Event Broker",
                    tech: "RabbitMQ · Asynchronous Queues",
                    detail: "Decoupled background task dispatching & event streaming",
                  },
                  {
                    icon: Database,
                    layer: "Persistence & Storage",
                    tech: "PostgreSQL · MySQL · Redis",
                    detail: "Normalized schemas, indexed queries, relational integrity",
                  },
                ].map((item, idx) => (
                  <div
                    key={item.layer}
                    className="p-3.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-primary group-hover:text-gold transition-colors">
                          <item.icon size={15} />
                        </div>
                        <div>
                          <div className="text-xs font-medium text-foreground tracking-tight">
                            {item.layer}
                          </div>
                          <div className="text-[11px] font-mono text-muted-foreground">
                            {item.tech}
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-white/30 group-hover:text-primary transition-colors">
                        0{idx + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom deployment status */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                  <span className="font-mono text-[11px]">Production Target: Docker & Linux VPS</span>
                </div>
                <span className="font-mono text-[11px] text-primary">Clean · Scalable</span>
              </div>
            </div>
          ) : (
            <div className="space-y-4 py-2">
              <div className="space-y-3">
                {[
                  {
                    title: "Separation of Concerns",
                    desc: "Modular architecture ensuring decoupled layers, easy testing, and maintainable services.",
                  },
                  {
                    title: "Predictable Performance",
                    desc: "Zero unnecessary bloat. Optimized bundle delivery and efficient database indexation.",
                  },
                  {
                    title: "End-to-End Type Safety",
                    desc: "Strict typing across interfaces, contract-driven APIs, and predictable state flows.",
                  },
                ].map((p, idx) => (
                  <div
                    key={p.title}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px]">
                        <Check size={11} />
                      </div>
                      <h4 className="text-xs font-semibold text-foreground tracking-tight">
                        {p.title}
                      </h4>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed pl-7">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
