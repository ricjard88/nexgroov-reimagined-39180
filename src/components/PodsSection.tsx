import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const PodsSection = () => {
  return (
    <section className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mx-auto">
          <Card className="border-border shadow-none transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
            <CardContent className="p-6">
              <h3 className="font-serif text-lg font-semibold mb-2">Made For Serious Producers</h3>
              <p className="font-serif text-muted-foreground text-sm mb-4">
                Who build, decide, and deliver on value every day. Who crave a system that handles the capacity of their aims for sustainable momentum.
              </p>
              <Button variant="outline" size="sm" className="w-full font-serif" asChild>
                <a href="/signup">Request access</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
