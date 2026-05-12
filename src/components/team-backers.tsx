import { Reveal, RevealStagger, RevealItem } from "@/lib/motion";

type TeamMember = {
  name: string;
  role: string;
  pedigree: string;
};

const TEAM: TeamMember[] = [
  {
    name: "Att. Daniel Liven",
    role: "CEO",
    pedigree:
      "European commercial & antitrust lawyer, former COO at Zaisan, Web3 regulatory specialist",
  },
  {
    name: "Michael Bar Zeev",
    role: "CBDO",
    pedigree:
      "Serial fintech & Web3 founder with 3 exits, former CEO of Titan (acquired by Fireblocks)",
  },
  {
    name: "Thomas Wolff",
    role: "Technology Director",
    pedigree: "Former CTO of Flow Traders",
  },
  {
    name: "Att. Shoham Ben Rubi",
    role: "Legal Counsel",
    pedigree:
      "Former Head of International Department at Israel Securities Authority, ex-Deloitte, ex-TASE",
  },
  {
    name: "Bar Elkis",
    role: "COO",
    pedigree: "Co-Founder of PayBase, 10+ years in fintech & Web3",
  },
];

function getInitials(name: string): string {
  const cleaned = name.replace(/^Att\.\s+/i, "").trim();
  const parts = cleaned.split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function TeamBackers() {
  return (
    <section
      id="team"
      className="bg-white py-[80px] md:py-[100px] lg:py-[120px]"
    >
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <Reveal>
          <div className="flex flex-col items-start gap-4 md:max-w-[760px]">
            <span className="font-mono uppercase tracking-wider text-cyan text-[12px]">
              Leadership
            </span>
            <h2
              className="text-[#021c24] font-semibold leading-[1.1]"
              style={{
                fontFamily: "var(--font-grotesk)",
                fontSize: "clamp(32px, 4.5vw, 48px)",
                letterSpacing: "-0.02em",
              }}
            >
              Built by veterans of TradFi infrastructure
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#6b7280] leading-relaxed">
              Decades of operator experience across prime brokerage,
              market-making, and securities regulation.
            </p>
          </div>
        </Reveal>

        <RevealStagger
          staggerChildren={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[16px] md:gap-[24px] pt-[64px]"
        >
          {TEAM.map((member) => (
            <RevealItem key={member.name}>
              <article className="flex flex-col items-start gap-3 px-6 py-8 md:px-8 md:py-10 rounded-2xl border border-black/[0.06] bg-white transition-colors hover:bg-[#f9fafb] h-full">
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan/10 text-cyan font-mono text-[16px] font-semibold"
                  aria-hidden="true"
                >
                  {getInitials(member.name)}
                </div>
                <h3
                  className="text-[20px] font-semibold text-[#021c24]"
                  style={{ fontFamily: "var(--font-grotesk)" }}
                >
                  {member.name}
                </h3>
                <p className="font-mono uppercase text-[14px] tracking-[0.1em] text-cyan">
                  {member.role}
                </p>
                <p className="text-[14px] text-[#6b7280] leading-relaxed">
                  {member.pedigree}
                </p>
              </article>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}

export default TeamBackers;
