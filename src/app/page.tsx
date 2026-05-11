import { TopNav } from "@/components/top-nav";
import { Hero } from "@/components/hero";
import { Partners } from "@/components/partners";
import { ProblemCta } from "@/components/problem-cta";
import { HowItWorks } from "@/components/how-it-works";
import { Product } from "@/components/product";
import { Advantages } from "@/components/advantages";
import { MarketsTable } from "@/components/markets-table";
import { ApiSection } from "@/components/api-section";
import { Comparison } from "@/components/comparison";
import { Media } from "@/components/media";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <TopNav />
      <main id="main-content">
        <Hero />
        <Partners />
        <ProblemCta />
        <HowItWorks />
        <Product />
        <Advantages />
        <MarketsTable />
        <ApiSection />
        <Comparison />
        <Media />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
