import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6 font-serif">
      <h1 className="text-5xl leading-tight mb-4">
        Do you want to touch greatness?
      </h1>
      <p className="text-muted-foreground text-lg mb-6">
        Nexgroov provides the Exceptional Operating System for High Performers. Small pods. Sustainable rhythm. Consistent progress.
      </p>
      <div>
        <Button asChild>
          <a href="/signup">Get started</a>
        </Button>
      </div>
    </section>
  );
};
