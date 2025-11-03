import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Thesis } from "@/components/Thesis";
import { Features } from "@/components/Features";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Thesis />
        <Features />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
