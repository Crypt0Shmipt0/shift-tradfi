const PRODUCT = [
  { label: "Markets", href: "#markets" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Trade", href: "#product" },
  { label: "API Docs", href: "#api" },
];

const RESOURCES = [
  { label: "Documentation", href: "#" },
  { label: "GitHub", href: "https://github.com/devrwa" },
  { label: "Dune Dashboard", href: "https://dune.com/shiftrwa/shift-rwa" },
  { label: "Blog", href: "#" },
];

const LEGAL = [
  { label: "Terms of Use", href: "https://shiftrwa.xyz/terms" },
  { label: "Risk Disclosure", href: "https://shiftrwa.xyz/risk-disclosure" },
  { label: "Privacy Policy", href: "https://shiftrwa.xyz/privacy" },
];

const SOCIALS = [
  { label: "X / Twitter", href: "https://x.com/ShiftRWA" },
  { label: "Discord", href: "https://discord.gg/shiftrwa" },
  { label: "Telegram", href: "https://t.me/shiftrwa" },
  { label: "YouTube", href: "https://www.youtube.com/@SHIFTRWA" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/shiftrwa" },
];

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <div className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
        {title}
      </div>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm text-foreground/70 hover:text-mint transition-colors"
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
    <footer className="border-t border-card-border mt-10">
      <div className="max-w-[1440px] mx-auto section-padding py-14 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="text-xl font-bold mb-3">
            <span className="bg-gradient-to-r from-mint to-accent bg-clip-text text-transparent">
              SHIFT
            </span>
          </div>
          <p className="text-xs text-muted leading-relaxed max-w-[240px]">
            Tokenized leveraged stocks, ETFs, and ETNs. On-chain. Zero liquidation risk.
          </p>
        </div>
        <FooterCol title="Product" links={PRODUCT} />
        <FooterCol title="Resources" links={RESOURCES} />
        <FooterCol title="Legal" links={LEGAL} />
        <FooterCol title="Social" links={SOCIALS} />
      </div>

      <div className="border-t border-card-border/60">
        <div className="max-w-[1440px] mx-auto section-padding py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
          <span>© 2026 SHIFT DAO LLC. Trading involves risk. Not investment advice.</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse" />
            All systems operational
          </span>
        </div>
      </div>

      <div className="border-t border-card-border/30">
        <p className="max-w-[1440px] mx-auto section-padding py-4 text-[10px] leading-[1.55] text-muted/50">
          The tokens issued by SHIFT DAO LLC and all of its respective Series established under the laws of the Republic of the Marshall Islands are membership-interest tokens. Members&rsquo; rights in a DAO may differ materially from those in other limited liability companies. The Series tokens provide their holders with economic exposure to the value of the Series Assets; holding the Tokens does not grant dividend rights, voting power, legal title, or claims to the underlying Series Assets. The Tokens have not been registered under the U.S. Securities Act of 1933 and are not offered in the United States or the United Kingdom. Token-related communications herein are not directed at any investor in jurisdictions where the Tokens cannot be legally offered. Nothing herein constitutes financial, legal, or investment advice. Acquiring the Tokens involves significant risks; a holder may incur substantial losses up to the total loss of their purchase price.
        </p>
      </div>
    </footer>
  );
}
