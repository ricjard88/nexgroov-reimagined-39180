import { Button } from "@/components/ui/button";
import { AnimatedLines } from "./AnimatedLines";
import { BurnoutScoreGauge } from "./BurnoutScoreGauge";
import { ObstacleDropdown } from "./ObstacleDropdown";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12">
      <div className="absolute inset-0 overflow-hidden">
        <AnimatedLines />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider">
            <span className="block letter-spacing-wide">Complete Your Goals</span>
            <span className="block letter-spacing-wide text-primary mt-2">Without Burning Out</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            We identify burnout before it happens. Track your health in real-time and get support before you need to ask.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <ObstacleDropdown />
            <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="hidden lg:flex justify-center items-center">
          <BurnoutScoreGauge />
        </div>
      </div>
      
      <div className="lg:hidden mt-16 flex justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <BurnoutScoreGauge />
      </div>
    </section>
  );
};
