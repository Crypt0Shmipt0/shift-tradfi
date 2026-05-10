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
];

export function TokenShowcase() {
  return (
    <section className="bg-white overflow-hidden" style={{ paddingTop: 48, paddingBottom: 48 }}>
      <div className="mx-auto" style={{ maxWidth: 1440, paddingLeft: 128, paddingRight: 128 }}>
        <div className="flex items-center justify-center flex-wrap" style={{ gap: 32 }}>
          {TOKENS_3D.map((t) => (
            <div
              key={t.name}
              className="flex items-center justify-center transition-transform hover:scale-110"
              style={{ width: 120, height: 120 }}
            >
              <Image
                src={t.src}
                alt={`${t.name} tokenized stock`}
                width={120}
                height={120}
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
