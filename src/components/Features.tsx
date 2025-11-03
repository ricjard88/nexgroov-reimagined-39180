import { Code2, Shield, Zap } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Advanced Architecture",
    description: "Built on next-generation principles that prioritize scalability, performance, and maintainability. Our architecture enables seamless integration and deployment across any infrastructure.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Enterprise Security",
    description: "Security isn't an afterthought—it's fundamental to our design. Every component is built with enterprise-grade security protocols and continuous monitoring capabilities.",
    icon: Shield,
  },
  {
    number: "03",
    title: "Lightning Performance",
    description: "Optimized from the ground up for maximum performance. Our solutions deliver exceptional speed and efficiency, even under the most demanding workloads.",
    icon: Zap,
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-light letter-spacing-wide mb-20">
          Core Capabilities
        </h2>
        
        <div className="space-y-24">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className="grid md:grid-cols-[120px_1fr] gap-8 items-start animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center gap-4">
                <span className="text-6xl font-light text-primary/40">{feature.number}</span>
              </div>
              
              <div className="space-y-6 border-l border-primary/30 pl-8">
                <div className="flex items-center gap-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-3xl font-light tracking-wide">{feature.title}</h3>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
