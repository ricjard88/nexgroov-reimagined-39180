import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PODS = [
  { 
    title: 'Early Founders', 
    desc: 'People finding traction and testing product-market fit.' 
  },
  { 
    title: 'Founder Operators', 
    desc: 'Founders running product and ops with ownership.' 
  },
  { 
    title: 'Solo Specialists', 
    desc: 'Designers, devs, coaches, and consultants who need steady output without burning out.' 
  },
];

export const PodsSection = () => {
  return (
    <section className="bg-muted py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-4">
          {PODS.map((pod) => (
            <Card key={pod.title} className="bg-background border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">{pod.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{pod.desc}</p>
                <Button variant="outline" size="sm" className="w-full">
                  Get started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
