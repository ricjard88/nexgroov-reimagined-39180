import { Activity, CheckCircle2, Users, Heart } from "lucide-react";

const scoreInputs = [
  {
    icon: Activity,
    title: "Daily Check-ins",
    weight: "40%",
    items: ["Energy level", "Stress indicators", "Mood tracking"],
  },
  {
    icon: CheckCircle2,
    title: "Task Completion",
    weight: "30%",
    items: ["Daily goal achievement", "Streak consistency", "Task load balance"],
  },
  {
    icon: Users,
    title: "Team Engagement",
    weight: "20%",
    items: ["Squad participation", "Peer support given", "Communication frequency"],
  },
  {
    icon: Heart,
    title: "Self-Reported Wellness",
    weight: "10%",
    items: ["Sleep quality", "Work-life balance", "Personal health flags"],
  },
];

export const BurnoutScoreExplainer = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-light letter-spacing-wide mb-8 text-center">
          Understanding Your Burnout Score
        </h2>
        
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto mb-20 leading-relaxed">
          Your Burnout Score is calculated from multiple data points collected through your daily interactions with nexgroov. 
          When your score indicates risk, we don't just notify you. We intervene with personalized support to help you recover before burnout sets in.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {scoreInputs.map((input, index) => (
            <div
              key={input.title}
              className="space-y-4 p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in hover:border-primary/50 transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-primary/20">
                  <input.icon className="h-6 w-6 text-primary" />
                </div>
                <span className="text-2xl font-light text-primary">{input.weight}</span>
              </div>
              
              <h3 className="text-xl font-light tracking-wide">{input.title}</h3>
              
              <ul className="space-y-2">
                {input.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-lg border border-primary/30 bg-primary/5 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/20 mt-1">
              <Activity className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-light mb-3">Real-Time Monitoring</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your score updates continuously as you check in, complete tasks, and engage with your squad. 
                We track patterns over time to identify early warning signs like a sudden drop of 15+ points or staying below 65 for three consecutive days. 
                When we detect risk, our advisors reach out proactively with real-world interventions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
