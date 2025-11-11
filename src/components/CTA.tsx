import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { ObstacleDropdown } from "./ObstacleDropdown";

export const CTA = () => {
  return (
    <section id="team" className="py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-light letter-spacing-wide">
            Join the Next Generation of World Builders
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Build ambitious things without sacrificing your health. Start monitoring your burnout score today.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <ObstacleDropdown />
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/50 text-foreground hover:bg-primary/10"
            onClick={() => window.location.href = 'mailto:hello@nexgroov.com?subject=Career Opportunities'}
          >
            <Mail className="mr-2 h-5 w-5" />
            Work With Us
          </Button>
        </div>
      </div>
    </section>
  );
};
