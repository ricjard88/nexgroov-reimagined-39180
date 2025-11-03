import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/30 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-primary"
          >
            <path
              d="M20 5L35 12.5V27.5L20 35L5 27.5V12.5L20 5Z"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <circle cx="20" cy="20" r="5" fill="currentColor" />
          </svg>
          <span className="text-2xl font-light tracking-wider">nexgroov</span>
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
