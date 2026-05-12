import { TopNav } from "@/components/top-nav";
import { Hero } from "@/components/hero";
import { LiveTicker } from "@/components/live-ticker";
import { Partners } from "@/components/partners";
import { TeamBackers } from "@/components/team-backers";
import { ProblemCta } from "@/components/problem-cta";
import { HowItWorks } from "@/components/how-it-works";
import { Comparison } from "@/components/comparison";
import { Product } from "@/components/product";
import { Advantages } from "@/components/advantages";
import { ReservesCompliance } from "@/components/reserves-compliance";
import { MarketsTable } from "@/components/markets-table";
import { ApiSection } from "@/components/api-section";
import { Media } from "@/components/media";
import { Faq } from "@/components/faq";
import { FinalCta } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/lib/motion";

export default function Home() {
  return (
    <>
      <TopNav />
      <ScrollProgress />
      <main id="main-content">
        <Hero />
        <LiveTicker />
        <Partners />
        <TeamBackers />
        <ProblemCta />
        <HowItWorks />
        <Comparison />
        <Product />
        <Advantages />
        <ReservesCompliance />
        <MarketsTable />
        <ApiSection />
        <Media />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
