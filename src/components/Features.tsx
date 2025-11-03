import { Users, Target, Trophy } from "lucide-react";

const features = [
  {
    number: "01",
    title: "Squad-Based Building",
    description: "Join focused squads of fellow founders working toward aligned goals. Each member commits to one meaningful task per day, creating a rhythm of consistent progress and mutual accountability.",
    icon: Users,
  },
  {
    number: "02",
    title: "Daily Focused Tasks",
    description: "No overwhelming to-do lists. One task. One day. All connected to your larger mission. Our system helps you identify what truly moves the needle and execute with clarity.",
    icon: Target,
  },
  {
    number: "03",
    title: "Gamified Progress",
    description: "Track streaks, earn achievements, and celebrate wins with your squad. Our gamification system transforms accountability from a chore into an engaging journey of continuous growth.",
    icon: Trophy,
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
