import { Button } from "@/components/ui/button";
import nexgroovLogo from "@/assets/nexgroov-logo-new.png";

export const Header = () => {
  return (
    <header className="border-b border-border px-6 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={nexgroovLogo} alt="nexgroov" className="h-8" />
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <a href="/signin">Sign in</a>
          </Button>
          <Button size="sm" asChild>
            <a href="/signup">Sign up</a>
          </Button>
        </div>
      </div>
    </header>
  );
};
