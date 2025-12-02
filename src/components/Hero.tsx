import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="font-serif text-5xl leading-tight mb-3">
        Competitive pods for operators and founders. <br className="hidden md:block" /> 
        Sustainable momentum.
      </h1>
      <p className="text-muted-foreground max-w-xl mb-6">
        Nexgroov helps high-performers stay consistent without burning out. Competitive pods. Daily rhythm. Weekly progress.
      </p>
      <div>
        <Button asChild>
          <a href="#join">I'm in</a>
        </Button>
      </div>
    </section>
  );
};
