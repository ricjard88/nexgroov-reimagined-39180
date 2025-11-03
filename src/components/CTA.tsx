import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export const CTA = () => {
  return (
    <section id="team" className="py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-light letter-spacing-wide">
            Join Our Mission
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're always looking for exceptional talent to help shape the future of technology. 
            If you're passionate about building groundbreaking solutions, we want to hear from you.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground">
            <Mail className="mr-2 h-5 w-5" />
            Work With Us
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10">
            View Open Positions
          </Button>
        </div>
      </div>
    </section>
  );
};
