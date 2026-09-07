import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Case Studies" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div
          className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${
            scrolled
              ? "bg-[#14161f]/85 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20"
              : "bg-transparent"
          }`}
        >
          {/* Logo / Brand */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center font-display font-semibold text-xs text-primary transition-colors group-hover:border-primary/40">
              F
            </span>
            <span className="font-display font-medium tracking-tight text-sm text-foreground/90 group-hover:text-foreground transition-colors">
              fadilyas<span className="text-primary font-normal">.dev</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-medium">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3.5 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/[0.04] transition-all"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Action button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-1.5 text-xs font-medium text-foreground transition-all hover:border-white/20"
            >
              Get in Touch
              <ArrowUpRight size={13} className="text-muted-foreground" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-1 text-muted-foreground hover:text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 bg-[#14161f]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col gap-1 shadow-2xl"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3.5 py-2.5 rounded-xl text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-2 mt-1 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="w-full text-center block py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-xs"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
