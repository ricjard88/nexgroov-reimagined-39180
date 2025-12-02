import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="font-serif text-5xl leading-tight mb-6">
        Competitive pods for operators and founders. <br className="hidden md:block" /> 
        Sustainable momentum.
      </h1>
      <div>
        <Button asChild>
          <a href="/signup">Get started</a>
        </Button>
      </div>
    </section>
  );
};
