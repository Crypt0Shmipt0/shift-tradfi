"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { APP_URL } from "@/lib/constants";

const LINKS: { href: string; label: string; active?: boolean; external?: boolean }[] = [
  { href: "#", label: "Home", active: true },
  { href: "#markets", label: "Markets" },
  { href: "https://dune.com/shiftrwa/shift-rwa", label: "Blockchain Stats", external: true },
  { href: "#how-it-works", label: "Learn" },
  { href: "#api", label: "Resources" },
];

export function TopNav() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const closeMenu = useCallback(() => setOpen(false), []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white"
      role="banner"
    >
      <nav
        className="mx-auto flex items-center justify-between px-6 md:px-16 lg:px-[32px]"
        style={{ maxWidth: 1440, paddingTop: 37, paddingBottom: 37 }}
        aria-label="Main navigation"
      >
        {/* Left: logo + links */}
        <div className="flex items-center gap-[48px]">
          <a href="#" aria-label="SHIFT home">
            <Image
              src="/shift-logo.png"
              alt="SHIFT"
              width={125}
              height={28}
              className="h-7 w-auto"
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-[32px]">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                aria-current={l.active ? "page" : undefined}
                className={`font-[var(--font-inter)] font-medium leading-[20px] text-[18px] tracking-[0.18px] transition-colors duration-200 hover:opacity-80 text-[#021c24] ${
                  l.active
                    ? "underline underline-offset-4 decoration-[#021c24]"
                    : ""
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop CTA */}
        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center justify-center bg-[#021c24] text-white font-[var(--font-inter)] font-medium text-[18px] tracking-[0.36px] rounded-full transition-all duration-300 hover:bg-[#021c24]/90"
          style={{ paddingLeft: 32, paddingRight: 32, paddingTop: 14, paddingBottom: 14 }}
        >
          Launch App
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 transition-colors duration-200 rounded-md text-[#021c24]"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu with slide transition */}
      <div
        id="mobile-menu"
        className={`lg:hidden bg-white border-t border-gray-100 px-8 overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[400px] py-6 opacity-100" : "max-h-0 py-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="space-y-1">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              onClick={!l.external ? closeMenu : undefined}
              className="block font-[var(--font-inter)] font-medium text-[#021c24] text-lg tracking-[0.18px] py-3 px-2 rounded-lg transition-colors duration-200 hover:bg-gray-50 hover:text-mint focus-visible:bg-gray-50"
              tabIndex={open ? 0 : -1}
            >
              {l.label}
            </a>
          ))}
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-[#021c24] text-white font-[var(--font-inter)] font-medium text-lg px-8 py-3.5 rounded-full mt-4 transition-all duration-200 hover:bg-[#021c24]/90 focus-visible:ring-2 focus-visible:ring-mint focus-visible:ring-offset-2"
            tabIndex={open ? 0 : -1}
          >
            Launch App
          </a>
        </div>
      </div>
    </header>
  );
}
