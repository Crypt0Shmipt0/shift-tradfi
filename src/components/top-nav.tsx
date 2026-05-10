"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#", label: "Home" },
  { href: "#markets", label: "Markets" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#product", label: "Trade" },
  { href: "#comparison", label: "Why SHIFT" },
  { href: "#api", label: "Developers" },
];

const APP_URL = "https://app.shiftrwa.xyz";

export function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border">
      <div className="max-w-[1440px] mx-auto section-padding flex items-center justify-between h-[72px]">
        <a href="#" className="text-xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-mint to-accent bg-clip-text text-transparent">
            SHIFT
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold hover:bg-foreground/90 transition-colors"
        >
          Launch App
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-muted hover:text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-card-border px-6 py-4 space-y-3">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-sm text-muted hover:text-foreground py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center px-6 py-2.5 rounded-full bg-foreground text-background text-sm font-semibold mt-3"
          >
            Launch App
          </a>
        </div>
      )}
    </nav>
  );
}
