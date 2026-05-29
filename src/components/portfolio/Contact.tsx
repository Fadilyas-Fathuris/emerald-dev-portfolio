import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Download, FileText } from "lucide-react";
import { SectionHeader } from "./About";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6 space-y-24">

        {/* CV section */}
        <div id="cv" className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-14">
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/20 blur-[100px]" />
          <div className="absolute inset-0 grid-bg opacity-20" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-primary">06 · For recruiters</div>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tighter">
                The full <span className="text-gradient-emerald">resume</span>, one click away.
              </h2>
              <p className="text-muted-foreground">
                A clean, one-page PDF with experience, education, and the technical stack — formatted for ATS and humans alike.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:shadow-[0_0_40px_oklch(0.78_0.17_158/0.6)] transition-all"
                >
                  <Download size={16} />
                  Download CV (PDF)
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-medium hover:border-primary/40 transition-colors"
                >
                  <FileText size={16} />
                  View online
                </a>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto w-full max-w-xs"
            >
              <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full" />
              <div className="relative aspect-[3/4] rounded-2xl glass-strong p-5 shadow-[0_30px_80px_-20px_oklch(0_0_0/0.6)]">
                <div className="h-2 w-24 rounded-full bg-foreground/80 mb-3" />
                <div className="h-1.5 w-16 rounded-full bg-primary mb-6" />
                <div className="space-y-2">
                  {[90, 70, 80, 60, 75, 85, 65, 78, 70, 60].map((w, i) => (
                    <div key={i} className="h-1 rounded-full bg-foreground/15" style={{ width: `${w}%` }} />
                  ))}
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                  <span>arnav_patel_cv.pdf</span>
                  <span className="text-primary">1.2 MB</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Contact */}
        <div>
          <SectionHeader kicker="07 · Contact" title="Let's build" highlight="something good." />

          <div className="mt-16 grid lg:grid-cols-5 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-4"
            >
              <p className="text-muted-foreground leading-relaxed">
                Currently open to full-time roles, internships, and freelance collaborations.
                Replies within 24 hours.
              </p>
              <div className="space-y-3 pt-4">
                {[
                  { icon: Mail, label: "arnav@portfolio.dev", href: "mailto:arnav@portfolio.dev" },
                  { icon: Github, label: "github.com/arnav", href: "#" },
                  { icon: Linkedin, label: "linkedin.com/in/arnav", href: "#" },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="group flex items-center gap-3 glass rounded-2xl px-4 py-3 hover:border-primary/40 transition-all"
                  >
                    <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_oklch(0.78_0.17_158/0.3)] transition-all">
                      <c.icon size={16} />
                    </div>
                    <span className="text-sm">{c.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 3000);
              }}
              className="lg:col-span-3 glass-strong rounded-3xl p-6 md:p-8 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" placeholder="Your name" />
                <Field label="Email" type="email" placeholder="you@company.com" />
              </div>
              <Field label="Subject" placeholder="Let's talk about…" />
              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about the project, role, or idea."
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:shadow-[0_0_40px_oklch(0.78_0.17_158/0.6)] transition-all"
              >
                {sent ? "Message sent ✦" : <>Send message <Send size={14} className="group-hover:translate-x-0.5 transition-transform" /></>}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{label}</label>
      <input
        required
        {...rest}
        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
      />
    </div>
  );
}
