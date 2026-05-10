import { TopNav } from "@/components/top-nav";
import { Hero } from "@/components/hero";
import { Milestones } from "@/components/milestones";
import { Partners } from "@/components/partners";
import { ProblemCta } from "@/components/problem-cta";
import { HowItWorks } from "@/components/how-it-works";
import { Product } from "@/components/product";
import { Advantages } from "@/components/advantages";
import { MarketsTable } from "@/components/markets-table";
import { ApiSection } from "@/components/api-section";
import { Comparison } from "@/components/comparison";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <TopNav />
      <Hero />
      <Milestones />
      <Partners />
      <ProblemCta />
      <HowItWorks />
      <Product />
      <Advantages />
      <MarketsTable />
      <ApiSection />
      <Comparison />
      <FinalCta />
      <Footer />
    </>
  );
}
