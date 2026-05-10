import Image from "next/image";

const PRODUCT = [
  { label: "Markets", href: "#markets" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Trade", href: "#product" },
  { label: "API Docs", href: "#api" },
] as const;

const RESOURCES = [
  { label: "Documentation", href: "#" },
  { label: "GitHub", href: "https://github.com/devrwa" },
  { label: "Dune Dashboard", href: "https://dune.com/shiftrwa/shift-rwa" },
  { label: "Blog", href: "#" },
] as const;

const LEGAL = [
  { label: "Terms of Use", href: "https://shiftrwa.xyz/terms" },
  { label: "Risk Disclosure", href: "https://shiftrwa.xyz/risk-disclosure" },
  { label: "Privacy Policy", href: "https://shiftrwa.xyz/privacy" },
] as const;

const SOCIALS = [
  { label: "X / Twitter", href: "https://x.com/ShiftRWA" },
  { label: "Discord", href: "https://discord.gg/shiftrwa" },
  { label: "Telegram", href: "https://t.me/shiftrwa" },
  { label: "YouTube", href: "https://www.youtube.com/@SHIFTRWA" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/shiftrwa" },
] as const;

function FooterCol({ title, links }: { title: string; links: ReadonlyArray<{ label: string; href: string }> }) {
  return (
    <div>
      <div
        className="font-[var(--font-inter)] font-semibold uppercase text-white/60 mb-4 text-xs tracking-[1px]"
      >
        {title}
      </div>
      <ul className="space-y-2.5" role="list">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-[var(--font-inter)] text-white/60 text-sm transition-colors duration-200 hover:text-[#26c8b8] focus-visible:text-[#26c8b8]"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10" role="contentinfo">
      <nav
        className="mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 px-6 md:px-16 lg:px-[128px] py-14"
        style={{ maxWidth: 1440 }}
        aria-label="Footer navigation"
      >
        {/* Logo column */}
        <div className="col-span-2 md:col-span-1">
          <div className="mb-3">
            <Image
              src="/shift-logo.png"
              alt="SHIFT"
              width={125}
              height={28}
              className="h-7 w-auto invert"
              loading="lazy"
            />
          </div>
          <p
            className="font-[var(--font-inter)] text-white/60 leading-relaxed text-xs max-w-[240px]"
          >
            Tokenized leveraged stocks, ETFs, and ETNs. On-chain. Zero liquidation risk.
          </p>
        </div>

        <FooterCol title="Product" links={PRODUCT} />
        <FooterCol title="Resources" links={RESOURCES} />
        <FooterCol title="Legal" links={LEGAL} />
        <FooterCol title="Social" links={SOCIALS} />
      </nav>

      {/* Status bar */}
      <div className="border-t border-white/5">
        <div
          className="mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 px-6 md:px-16 lg:px-[128px] py-5"
          style={{ maxWidth: 1440 }}
        >
          <span className="font-[var(--font-inter)] text-white/50 text-xs">
            &copy; 2026 SHIFT DAO LLC. Trading involves risk. Not investment advice.
          </span>
          <span className="flex items-center gap-2 font-[var(--font-inter)] text-white/50 text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#26c8b8] animate-pulse" aria-hidden="true" />
            All systems operational
          </span>
        </div>
      </div>

      {/* Legal disclaimer */}
      <div className="border-t border-white/5">
        <p
          className="mx-auto font-[var(--font-inter)] text-white/55 leading-[1.55] px-6 md:px-16 lg:px-[128px] py-4 text-[10px]"
          style={{ maxWidth: 1440 }}
        >
          The tokens issued by SHIFT DAO LLC and all of its respective Series established under the laws of the Republic of the Marshall Islands are membership-interest tokens. Members&rsquo; rights in a DAO may differ materially from those in other limited liability companies. The Series tokens provide their holders with economic exposure to the value of the Series Assets; holding the Tokens does not grant dividend rights, voting power, legal title, or claims to the underlying Series Assets. The Tokens have not been registered under the U.S. Securities Act of 1933 and are not offered in the United States or the United Kingdom. Nothing herein constitutes financial, legal, or investment advice. Acquiring the Tokens involves significant risks; a holder may incur substantial losses up to the total loss of their purchase price.
        </p>
      </div>
    </footer>
  );
}
