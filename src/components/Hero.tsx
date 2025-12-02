import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6 font-serif">
      <h1 className="text-5xl leading-tight mb-4">
        Competitive pods for Operators and Founders. <br className="hidden md:block" /> 
        Sustainable momentum.
      </h1>
      <p className="text-muted-foreground text-lg mb-6">
        Nexgroov helps High Performers stay consistent without burning out. Small pods. Daily rhythm. Weekly progress.
      </p>
      <div>
        <Button asChild>
          <a href="/signup">Get started</a>
        </Button>
      </div>
    </section>
  );
};
