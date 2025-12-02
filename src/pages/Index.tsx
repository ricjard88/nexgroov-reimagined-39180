import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PodsSection } from "@/components/PodsSection";
import { DefeatBurnoutGame } from "@/components/DefeatBurnoutGame";
import { HowItWorks } from "@/components/HowItWorks";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <PodsSection />
        <DefeatBurnoutGame />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
