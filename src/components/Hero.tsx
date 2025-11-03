import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedLines } from "./AnimatedLines";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12">
      <div className="absolute inset-0 overflow-hidden">
        <AnimatedLines />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider">
            <span className="block letter-spacing-wide">Building</span>
            <span className="block letter-spacing-wide gradient-text mt-2">Next-Generation</span>
            <span className="block letter-spacing-wide mt-2">Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            nexgroov is revolutionizing technology with innovative, scalable solutions for the modern enterprise.
          </p>
          
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="hidden lg:block" />
      </div>
    </section>
  );
};
