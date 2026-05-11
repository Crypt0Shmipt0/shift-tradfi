import { ArrowUpRight, Play } from "lucide-react";

type MediaItem = {
  kind: "announcement" | "article" | "video";
  category: string;
  title: string;
  date: string;
  href: string;
  duration?: string;
};

// Placeholder items — replace with real content from CMS / Notion / X feed.
const ITEMS: MediaItem[] = [
  {
    kind: "announcement",
    category: "Announcement",
    title: "SHIFT launches tokenized leveraged stocks on Solana mainnet",
    date: "Apr 2026",
    href: "https://x.com/shiftrwa",
  },
  {
    kind: "article",
    category: "Article",
    title: "Asset-referenced tokens, explained: how SHIFT structures non-liquidatable leverage",
    date: "Mar 2026",
    href: "https://learn.shiftrwa.xyz",
  },
  {
    kind: "video",
    category: "Video",
    title: "Why traditional leverage breaks at scale — and what SHIFT does differently",
    date: "Feb 2026",
    href: "https://youtube.com/@shiftrwa",
    duration: "4:12",
  },
];

export function Media() {
  return (
    <section
      id="media"
      className="bg-[#0a0a0a] text-white py-[80px] md:py-[120px]"
      aria-labelledby="media-heading"
    >
      <div className="mx-auto px-6 md:px-16 lg:px-[80px]" style={{ maxWidth: 1440 }}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-12 mb-[48px] md:mb-[64px]">
          <div className="flex flex-col gap-[18px] max-w-[720px]">
            <h2
              id="media-heading"
              className="font-[var(--font-grotesk)] font-medium text-white leading-[1.1] tracking-[-0.96px]"
              style={{ fontSize: "clamp(28px, 3.33vw, 48px)" }}
            >
              Stay informed
            </h2>
            <p
              className="font-[var(--font-grotesk)] font-medium lowercase text-[#8d8d8d] leading-[1.04] tracking-[-0.64px]"
              style={{ fontSize: "clamp(18px, 1.94vw, 28px)" }}
            >
              Announcements, deep-dive articles, and explainer videos from the SHIFT team
            </p>
          </div>
          <a
            href="https://x.com/shiftrwa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-[var(--font-inter)] font-medium text-[#26c8b8] text-[16px] tracking-[0.32px] hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#26c8b8] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded transition-opacity shrink-0"
          >
            Follow on X
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* 3-card grid */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-5" role="list">
          {ITEMS.map((item) => (
            <li key={item.title}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col gap-6 rounded-2xl bg-[#111820] p-7 transition-colors hover:bg-[#1a2530] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#26c8b8] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                {/* Top meta row */}
                <div className="flex items-center justify-between">
                  <span className="font-[var(--font-inter)] text-[12px] font-medium uppercase tracking-[1.5px] text-[#26c8b8]">
                    {item.category}
                  </span>
                  <span className="font-[var(--font-inter)] text-[13px] font-normal text-[#8d8d8d]">
                    {item.date}
                  </span>
                </div>

                {/* Title — pushes the CTA to the bottom via mt-auto on the CTA */}
                <h3 className="font-[var(--font-grotesk)] font-medium text-white text-[22px] leading-[1.2] tracking-[-0.44px]">
                  {item.title}
                </h3>

                {/* Bottom CTA */}
                <div className="mt-auto flex items-center justify-between pt-2 border-t border-white/[0.08]">
                  <span className="inline-flex items-center gap-2 font-[var(--font-inter)] font-medium text-white text-[14px] tracking-[0.28px] group-hover:text-[#26c8b8] transition-colors">
                    {item.kind === "video" ? (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                        Watch{item.duration ? ` · ${item.duration}` : ""}
                      </>
                    ) : (
                      <>Read more</>
                    )}
                  </span>
                  <ArrowUpRight
                    className="w-4 h-4 text-white/60 group-hover:text-[#26c8b8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-[color,transform] duration-200"
                    aria-hidden="true"
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
