import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="max-w-4xl mx-auto pt-12 pb-6 px-6 font-serif">
      <h1 className="text-5xl leading-tight mb-4">
        The method to experience accountability without stress, for your truest self.
      </h1>
      <p className="text-muted-foreground text-lg mb-6">
        Nexgroov provides an Exceptional Operating System for growth and advancement. Small pods. Sustainable rhythm. Consistent progress.
      </p>
      <div>
        <Button asChild>
          <a href="/signup">Request access</a>
        </Button>
      </div>
    </section>
  );
};
