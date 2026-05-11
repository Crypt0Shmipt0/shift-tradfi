import Image from "next/image";

const TOKENS_ROW_1 = [
  { name: "Tesla", src: "/tokens/3d/tesla-large.png" },
  { name: "Nvidia", src: "/tokens/3d/nvidia.png" },
  { name: "Coinbase", src: "/tokens/3d/coinbase.png" },
  { name: "Spotify", src: "/tokens/3d/spotify.png" },
  { name: "Apple", src: "/tokens/3d/apple.png" },
  { name: "Meta", src: "/tokens/3d/meta.png" },
] as const;

const TOKENS_ROW_2 = [
  { name: "Intel", src: "/tokens/3d/intel.png" },
  { name: "Amazon", src: "/tokens/3d/amazon.png" },
  { name: "Netflix", src: "/tokens/3d/netflix.png" },
  { name: "PayPal", src: "/tokens/3d/paypal.png" },
  { name: "MasterCard", src: "/tokens/3d/mastercard.png" },
  { name: "Robinhood", src: "/tokens/3d/robinhood.png" },
] as const;

export function TokenShowcase() {
  return (
    <section id="tokens" className="bg-black overflow-hidden flex flex-col items-center" aria-label="Available tokenized stocks">
      {/* Row 1 */}
      <div className="inline-grid grid-cols-6 gap-0 mb-[-40px]">
        {TOKENS_ROW_1.map((t) => (
          <div
            key={t.name}
            className="relative w-[140px] h-[140px] md:w-[200px] md:h-[200px] lg:w-[255px] lg:h-[255px] transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={t.src}
              alt={`${t.name} tokenized stock`}
              fill
              sizes="(max-width: 768px) 140px, (max-width: 1024px) 200px, 255px"
              className="object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      {/* Row 2 - offset */}
      <div className="inline-grid grid-cols-6 gap-0 pl-[60px] md:pl-[100px] lg:pl-[121px]">
        {TOKENS_ROW_2.map((t) => (
          <div
            key={t.name}
            className="relative w-[140px] h-[140px] md:w-[200px] md:h-[200px] lg:w-[255px] lg:h-[255px] transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={t.src}
              alt={`${t.name} tokenized stock`}
              fill
              sizes="(max-width: 768px) 140px, (max-width: 1024px) 200px, 255px"
              className="object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
