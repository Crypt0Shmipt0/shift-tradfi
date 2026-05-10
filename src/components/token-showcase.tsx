import Image from "next/image";

const TOKENS_3D = [
  { name: "Tesla", src: "/tokens/3d/tesla-large.png" },
  { name: "Nvidia", src: "/tokens/3d/nvidia.png" },
  { name: "Apple", src: "/tokens/3d/apple.png" },
  { name: "Meta", src: "/tokens/3d/meta.png" },
  { name: "Amazon", src: "/tokens/3d/amazon.png" },
  { name: "Intel", src: "/tokens/3d/intel.png" },
  { name: "Coinbase", src: "/tokens/3d/coinbase.png" },
  { name: "Netflix", src: "/tokens/3d/netflix.png" },
  { name: "PayPal", src: "/tokens/3d/paypal.png" },
  { name: "Spotify", src: "/tokens/3d/spotify.png" },
] as const;

export function TokenShowcase() {
  return (
    <section id="tokens" className="bg-white overflow-hidden py-12" aria-label="Available tokenized stocks">
      <div className="mx-auto px-6 md:px-16 lg:px-[128px]" style={{ maxWidth: 1440 }}>
        <div className="flex items-center justify-center flex-wrap gap-6 md:gap-8">
          {TOKENS_3D.map((t) => (
            <div
              key={t.name}
              className="flex items-center justify-center w-20 h-20 md:w-[120px] md:h-[120px] transition-transform duration-300 hover:scale-110"
            >
              <Image
                src={t.src}
                alt={`${t.name} tokenized stock`}
                width={120}
                height={120}
                sizes="(max-width: 768px) 80px, 120px"
                className="w-full h-full object-contain drop-shadow-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
