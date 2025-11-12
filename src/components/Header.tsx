import { Button } from "@/components/ui/button";
import nexgroovLogo from "@/assets/nexgroov-logo.png";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/30 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={nexgroovLogo} alt="nexgroov" className="h-10 md:h-12" />
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">
            Team
          </a>
        </nav>
        
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
          Work With Us
        </Button>
      </div>
    </header>
  );
};
