import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="max-w-4xl mx-auto pt-12 pb-6 px-6 font-serif">
      <h1 className="text-5xl leading-tight mb-4">
        Do you want to be great? We support your truest self <span className="italic text-primary"> while understanding your capacity</span>.
      </h1>
      <p className="text-muted-foreground text-lg mb-6">
        Nexgroov is an Exceptional Operating System for growth and advancement. Small pods. Capacity based rhythm. Consistent progress.
      </p>
      <div>
        <Button asChild>
          <a href="/signup">Request access</a>
        </Button>
      </div>
    </section>
  );
};
