import Image from "next/image";

export function TokenShowcase() {
  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="relative w-full max-w-[900px] mx-auto">
          <Image
            src="/visuals/token-arc.png"
            alt="Tokenized stocks — Tesla, Nvidia, Apple, Amazon, Meta, Intel, Spotify, Netflix, Coinbase, PayPal and more"
            width={1672}
            height={941}
            className="w-full h-auto"
            priority
          />
        </div>
        <p className="text-center text-text-light text-xs mt-4 font-mono uppercase tracking-widest">
          Hundreds of stocks coming soon
        </p>
      </div>
    </section>
  );
}
