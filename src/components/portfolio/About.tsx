import { motion } from "framer-motion";
import { Code2, Smartphone, Layers, ShieldCheck } from "lucide-react";

const capabilities = [
  {
    icon: Code2,
    title: "Full Stack Development",
    desc: "Membangun aplikasi web end-to-end dengan ekosistem modern: React, Next.js, TypeScript, dan backend Laravel / Python.",
  },
  {
    icon: Layers,
    title: "System Architecture",
    desc: "Merancang arsitektur sistem berbasis Microservices, message broker RabbitMQ, serta deployment kontainer Docker di VPS.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Pengembangan aplikasi mobile multiplatform menggunakan Flutter & Dart yang terintegrasi dengan REST API yang aman dan teruji.",
  },
  {
    icon: ShieldCheck,
    title: "Code Quality & Testing",
    desc: "Menekankan struktur kode yang bersih, modular, konsistensi skema basis data, dan performa tinggi yang andal.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeader
          kicker="About"
          title="Bridging software architecture"
          highlight="and real-world impact."
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden bg-[#12141c] border border-white/10 p-6 space-y-6">
              <div className="relative aspect-square rounded-xl overflow-hidden bg-black/40 border border-white/5">
                <img
                  src="/profil_fadil.webp"
                  alt="Muhammad Fadilyas"
                  className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
              </div>

              <div className="space-y-2">
                <div className="font-display text-xl font-semibold text-foreground">
                  Muhammad Fadilyas Fathuris
                </div>
                <div className="text-xs font-mono text-primary">
                  S1 Sistem Informasi · Telkom University
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-white/5">
                  Berlatar belakang pendidikan Sistem Informasi dengan fokus pada integrasi sistem, arsitektur data, dan rekayasa perangkat lunak modern.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Bio and Core Capabilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>
                Saya berdedikasi menciptakan solusi digital yang tidak hanya fungsional, tetapi juga memiliki fondasi kode yang kuat, modular, dan dapat diskalakan secara berkelanjutan.
              </p>
              <p className="text-sm text-muted-foreground/90">
                Pengalaman saya mencakup pengembangan sistem agregasi data berjenjang untuk instansi pemerintah (GovConnect), platform analisis AI untuk kesiapan karir, hingga aplikasi mobile pengelolaan bank sampah masyarakat.
              </p>
            </div>

            {/* 4 Capabilities Grid */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {capabilities.map((c, i) => (
                <div
                  key={c.title}
                  className="p-5 rounded-xl bg-[#12141c] border border-white/5 hover:border-white/10 transition-all space-y-2.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 text-primary flex items-center justify-center">
                    <c.icon size={16} />
                  </div>
                  <h3 className="font-display font-medium text-sm text-foreground">
                    {c.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  kicker,
  title,
  highlight,
}: {
  kicker: string;
  title: string;
  highlight: string;
}) {
  return (
    <div className="space-y-3">
      <div className="text-xs font-mono uppercase tracking-widest text-primary font-medium">
        // {kicker}
      </div>
      <h2 className="font-display font-semibold tracking-tight text-3xl sm:text-4xl text-foreground max-w-2xl leading-tight">
        {title} <span className="text-muted-foreground font-normal">{highlight}</span>
      </h2>
    </div>
  );
}
