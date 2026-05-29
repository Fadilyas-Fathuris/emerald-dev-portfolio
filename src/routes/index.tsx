import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { TechStack } from "@/components/portfolio/TechStack";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { CursorGlow } from "@/components/portfolio/Cursor";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arnav Patel — Full Stack Developer" },
      { name: "description", content: "Full Stack Developer & CS student building scalable web, mobile, and cloud systems with clean architecture and cinematic UI." },
      { property: "og:title", content: "Arnav Patel — Full Stack Developer" },
      { property: "og:description", content: "Portfolio of a Full Stack Developer crafting scalable, modern, production-grade applications." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <CursorGlow />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
