import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send, Download, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./About";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-28 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 space-y-20">

        {/* Resume Download Section */}
        <div className="p-8 sm:p-12 rounded-2xl bg-[#12141c] border border-white/10 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-primary font-medium">
              Curriculum Vitae
            </div>
            <h3 className="font-display font-semibold text-2xl sm:text-3xl text-foreground">
              Tinjau riwayat lengkap dalam format PDF.
            </h3>
            <p className="text-sm text-muted-foreground max-w-xl leading-relaxed">
              Memuat rangkuman terstruktur pengalaman kerja, pendidikan, riwayat projek, dan sertifikasi teknis.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3">
            <a
              href="/CV_Muhammad_Fadilyas_Fathuris_Haryanto.pdf"
              download="CV_Muhammad_Fadilyas_Fathuris_Haryanto.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-medium text-primary-foreground hover:bg-gold transition-all"
            >
              <Download size={14} />
              Download CV (PDF)
            </a>
            <a
              href="/CV_Muhammad_Fadilyas_Fathuris_Haryanto.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-3 text-xs font-medium text-foreground transition-all"
            >
              Lihat Online
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Contact Form & Channels */}
        <div>
          <SectionHeader
            kicker="Contact"
            title="Let's build together."
            highlight="Get in touch."
          />

          <div className="mt-16 grid lg:grid-cols-12 gap-12">
            {/* Direct Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-6"
            >
              <p className="text-sm text-muted-foreground leading-relaxed">
                Terbuka untuk peluang kerja full-time, proyek lepas (freelance), maupun diskusi seputar arsitektur sistem dan pengembangan aplikasi.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  {
                    icon: Mail,
                    label: "muhfadilyas@gmail.com",
                    href: "mailto:muhfadilyas@gmail.com",
                  },
                  {
                    icon: Github,
                    label: "github.com/Fadilyas-Fathuris",
                    href: "https://github.com/Fadilyas-Fathuris",
                  },
                  {
                    icon: Linkedin,
                    label: "linkedin.com/in/muhammad-fadilyas",
                    href: "https://linkedin.com/in/muhammad-fadilyas-fathuris-haryanto",
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-[#12141c] border border-white/5 hover:border-white/15 transition-all text-xs font-mono text-muted-foreground hover:text-foreground group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 text-primary flex items-center justify-center group-hover:text-gold transition-colors">
                      <item.icon size={15} />
                    </div>
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Direct Message Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 3000);
              }}
              className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#12141c] border border-white/10 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-muted-foreground">Nama</label>
                  <input
                    required
                    placeholder="Nama Anda"
                    className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-xs text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-muted-foreground">Email</label>
                  <input
                    required
                    type="email"
                    placeholder="email@domain.com"
                    className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-xs text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-muted-foreground">Pesan / Subjek</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Ceritakan tentang proyek, peran, atau peluang kerja sama..."
                  className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-xs text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-xs font-medium text-primary-foreground hover:bg-gold transition-all"
              >
                {sent ? "Pesan Terkirim ✓" : <>Kirim Pesan <Send size={13} /></>}
              </button>
            </motion.form>
          </div>
        </div>

      </div>
    </section>
  );
}
