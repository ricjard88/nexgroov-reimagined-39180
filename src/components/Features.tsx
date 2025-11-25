import { Activity, Shield, Users, BarChart3 } from "lucide-react";

const features = [
  {
    number: "04",
    title: "Burnout Health Monitoring",
    description: "Track your burnout score in real-time through daily check-ins, task completion patterns, and engagement levels. We identify when you're approaching your threshold before you feel it.",
    icon: Activity,
  },
  {
    number: "02",
    title: "Proactive Intervention",
    description: "We alert you when your score drops. Our advisors reach out with real-world support and adjustments to your workload. You don't need to ask for help.",
    icon: Shield,
  },
  {
    number: "03",
    title: "Squad-Based Accountability",
    description: "Join squads of builders working toward shared missions. Each member commits to one focused daily task, creating rhythm and progress while coaches facilitate healthy execution.",
    icon: Users,
  },
  {
    number: "01",
    title: "Team Health Dashboard",
    description: "Leading a team? Monitor the collective health of your builders. See aggregate burnout scores, identify at-risk members early, and foster a sustainable high-performance culture.",
    icon: BarChart3,
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
