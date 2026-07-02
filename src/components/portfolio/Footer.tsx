export function Footer() {
  return (
    <footer className="relative border-t border-border/50 py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="font-mono">© 2026 Fadilyas Fathuris · Built with React, Three.js & Motion</div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="font-mono">all systems operational</span>
        </div>
      </div>
    </footer>
  );
}
