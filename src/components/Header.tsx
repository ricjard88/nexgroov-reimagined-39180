import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="border-b border-border px-6 py-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-lg font-semibold">Don't Burn Out (DBO)</div>
        
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <a href="#signin">Sign in</a>
          </Button>
          <Button size="sm" asChild>
            <a href="#join">I'm in</a>
          </Button>
        </div>
      </div>
    </header>
  );
};
