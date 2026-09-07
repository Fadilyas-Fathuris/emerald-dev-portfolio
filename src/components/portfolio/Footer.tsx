export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#0c0d12] text-xs font-mono text-muted-foreground">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} Muhammad Fadilyas Fathuris. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a href="#hero" className="hover:text-foreground transition-colors">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
