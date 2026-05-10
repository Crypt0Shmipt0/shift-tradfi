import Image from "next/image";

export function TokenShowcase() {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-[128px]">
        <div className="relative w-full max-w-[1000px] mx-auto">
          <Image
            src="/visuals/token-arc.png"
            alt="Tokenized stocks — Tesla, Nvidia, Apple, Amazon, Meta, Intel, Spotify, Netflix, Coinbase, PayPal and more"
            width={1672}
            height={941}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
