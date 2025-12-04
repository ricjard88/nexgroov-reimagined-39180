import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6 font-serif">
      <h1 className="text-5xl leading-tight mb-4">
        The system to experience your greatness.
      </h1>
      <p className="text-muted-foreground text-lg mb-6">
        Nexgroov provides this Exceptional Operating System. Small pods. Sustainable rhythm. Consistent progress.
      </p>
      <div>
        <Button asChild>
          <a href="/signup">Request access</a>
        </Button>
      </div>
    </section>
  );
};
