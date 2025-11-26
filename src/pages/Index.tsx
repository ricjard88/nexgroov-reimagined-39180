import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CohortAnnouncement } from "@/components/CohortAnnouncement";
import { Thesis } from "@/components/Thesis";
import { Features } from "@/components/Features";
import { BurnoutAssessment } from "@/components/BurnoutAssessment";
import { BurnoutScoreExplainer } from "@/components/BurnoutScoreExplainer";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CohortAnnouncement />
        <Thesis />
        <Features />
        <BurnoutAssessment />
        <BurnoutScoreExplainer />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
