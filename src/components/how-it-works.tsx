import Image from "next/image";
import { ArrowRight } from "lucide-react";

const APP_URL = "https://app.shiftrwa.xyz";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            From prime brokers, to your Web3 wallet
          </h2>
          <p className="text-text-light text-lg italic">
            Your assets are fully segregated, bankruptcy remote
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left — partner logos */}
          <div className="flex flex-col gap-4 shrink-0">
            <div className="flex items-center justify-center h-20 w-[250px] rounded-xl bg-gray-100 px-6">
              <Image src="/partners/alpaca.png" alt="Alpaca" width={160} height={46} className="h-8 w-auto object-contain" />
            </div>
            <div className="flex items-center justify-center h-20 w-[250px] rounded-xl bg-gray-100 px-6">
              <span className="text-sm font-semibold text-text-light">DekaBank</span>
            </div>
          </div>

          {/* Right — app mockup */}
          <div className="flex-1 relative">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src="/visuals/app-desktop.png"
                alt="SHIFT trading app on desktop"
                fill
                className="object-contain object-center"
              />
              <div className="absolute -right-4 md:right-4 bottom-0 w-[120px] md:w-[160px] h-[250px] md:h-[330px]">
                <Image
                  src="/visuals/app-phone.png"
                  alt="SHIFT trading app on mobile"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-white text-sm font-semibold hover:bg-foreground/90 transition-colors"
          >
            Trade Now
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
