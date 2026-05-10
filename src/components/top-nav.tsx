"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#", label: "Home", active: true },
  { href: "#markets", label: "Markets" },
  { href: "#", label: "Blockchain Stats" },
  { href: "#how-it-works", label: "Learn" },
  { href: "#api", label: "Resources" },
];

const APP_URL = "https://app.shiftrwa.xyz";

export function TopNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="mx-auto flex items-center justify-between px-8 lg:px-[128px]" style={{ height: 74, paddingTop: 37, paddingBottom: 37, boxSizing: "content-box" }}>
        <a href="#">
          <Image src="/shift-logo.png" alt="SHIFT" width={125} height={28} className="h-7 w-auto" />
        </a>

        <div className="hidden lg:flex items-center" style={{ gap: 32 }}>
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-[var(--font-inter)] font-medium text-foreground transition-colors hover:opacity-70"
              style={{
                fontSize: 18,
                letterSpacing: "0.18px",
                textDecoration: l.active ? "underline" : "none",
                textUnderlineOffset: "4px",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center justify-center rounded-full bg-foreground text-white font-[var(--font-inter)] font-medium transition-colors hover:bg-foreground/90"
          style={{
            fontSize: 18,
            letterSpacing: "0.36px",
            paddingLeft: 32,
            paddingRight: 32,
            paddingTop: 14,
            paddingBottom: 14,
            borderRadius: 100,
          }}
        >
          Launch App
        </a>

        <button onClick={() => setOpen(!open)} className="lg:hidden p-2 text-foreground" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-8 py-6 space-y-4">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-[var(--font-inter)] font-medium text-foreground py-2"
              style={{ fontSize: 18, letterSpacing: "0.18px" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center rounded-full bg-foreground text-white font-[var(--font-inter)] font-medium mt-4"
            style={{ fontSize: 18, paddingTop: 14, paddingBottom: 14, borderRadius: 100 }}
          >
            Launch App
          </a>
        </div>
      )}
    </nav>
  );
}
