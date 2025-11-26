import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

type TestimonialCategory = "burnout" | "pods" | "groove" | "outcomes" | "community" | "roi";

interface Testimonial {
  category: TestimonialCategory;
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  // Burnout & Decision Fatigue
  {
    category: "burnout",
    quote: "I was making 200+ micro-decisions a day and felt paralyzed by all of them. neXgroov told me I only had capacity for 3 deep tasks, and that permission to say no to everything else changed everything. My burnout score dropped 40% in 8 weeks.",
    name: "Sarah Chen",
    role: "Solo Founder, EdTech SaaS"
  },
  {
    category: "burnout",
    quote: "I thought burnout was just part of the founder journey. Turns out I was just managing my energy like shit. The Groove Index made it quantifiable. Suddenly I could see patterns I'd been blind to for 18 months.",
    name: "Marcus Rivera",
    role: "Technical Founder, DevTools"
  },
  {
    category: "burnout",
    quote: "The decision wheel sounds gimmicky until you realize you've been staring at your todo list for 45 minutes. It just tells you: do this one thing right now. That clarity is worth $149/month alone.",
    name: "Priya Malhotra",
    role: "Solo Founder, FinTech"
  },
  // Pod Squads / Human Connection
  {
    category: "pods",
    quote: "Building solo is lonely as hell. My pod became the co-founders I didn't have. Every Thursday, 45 minutes, three founders who actually get it. We've saved each other from quitting at least twice.",
    name: "James Ko",
    role: "2nd-Time Founder, B2B SaaS"
  },
  {
    category: "pods",
    quote: "I didn't realize how isolated I was until my pod lead asked 'When's the last time someone checked if you were okay?' Week 3, I broke down on the call. Week 12, I shipped my MVP. The accountability was everything.",
    name: "Leila Hassan",
    role: "Solo Founder, Healthcare Tech"
  },
  {
    category: "pods",
    quote: "My pod matched me with two founders at the exact same stage: pre-revenue, post-MVP, figuring out GTM. We share tactics, commiserate about rejections, and hold each other to shipping. It's like YC office hours but weekly and human.",
    name: "David Park",
    role: "Technical Founder, AI Startup"
  },
  // Capacity Intelligence / Groove Index
  {
    category: "groove",
    quote: "The Groove Index told me my 'productive Tuesdays' were actually my highest burnout risk days. I was redlining my energy without realizing it. Now I schedule recovery on Wednesdays. My sustained output is up 30%.",
    name: "Zoe Martinez",
    role: "Solo Founder, Creator Tools"
  },
  {
    category: "groove",
    quote: "I'm not an engineer, so I can't track my own patterns. neXgroov showed me I do my best strategic thinking between 10-11 AM, and after 6 PM I'm useless. I restructured my entire week around that insight.",
    name: "Alex Okonkwo",
    role: "Non-Technical Founder, Marketplace"
  },
  {
    category: "groove",
    quote: "My Groove Score was 42/100 when I started. I was in the red zone. Twelve weeks later, I'm at 78. I didn't work more hours. I just stopped working when my OS told me I had no capacity left. Game-changer.",
    name: "Nina Gupta",
    role: "Solo Founder, Climate Tech"
  },
  // Product Outcomes / Progress
  {
    category: "outcomes",
    quote: "Before neXgroov, I'd have 'productive weeks' where I completed 50 tasks but made zero progress on revenue. Now the AI serves me the 3 tasks that actually move the needle. I hit $5K MRR in 10 weeks.",
    name: "Tom Chen",
    role: "Solo Founder, DTC Brand"
  },
  {
    category: "outcomes",
    quote: "I shipped more in 12 weeks with neXgroov than I did in the previous 6 months. Not because I worked harder. I worked on the right things at the right times. My pod kept me accountable to what actually mattered.",
    name: "Rachel Goldman",
    role: "Technical Founder, Analytics Tool"
  },
  {
    category: "outcomes",
    quote: "The Groove Index predicted I was about to burn out 2 weeks before I felt it. The app literally said 'Your squad synergy is at 12%. Schedule a pod call.' I did. My co-pod members talked me out of a spiral that would've cost me a month.",
    name: "Jamal Wright",
    role: "Solo Founder, HR Tech"
  },
  // Community / Belonging
  {
    category: "community",
    quote: "I've been in Slack communities, founder groups, mastermind programs. None of them felt like my pod. Three founders, same timezone, same struggles. We text each other daily now. It's the team I didn't know I needed.",
    name: "Sophie Laurent",
    role: "Solo Founder, Design Agency"
  },
  {
    category: "community",
    quote: "My pod gave me something I didn't even know was missing: proof that I'm not the only one struggling. Every week, we share what killed us, and somehow that makes it survivable. I don't feel alone anymore.",
    name: "Chris Adeyemi",
    role: "1st-Time Founder, PropTech"
  },
  // ROI / Value Prop
  {
    category: "roi",
    quote: "$99/month for this? I spend more on productivity apps that don't work. neXgroov is the only tool that actually prevented me from quitting. Worth 100x the price.",
    name: "Emily Tran",
    role: "Solo Founder, Wellness App"
  },
  {
    category: "roi",
    quote: "I was 3 weeks from shutting down when I joined neXgroov. My pod helped me pivot my positioning, my Groove Index showed me where I was burning energy on the wrong things. Two months later, I closed my first customer. Still here.",
    name: "Ayo Johnson",
    role: "Solo Founder, EduTech"
  },
  {
    category: "roi",
    quote: "Most founder tools are just task managers with a growth mindset veneer. neXgroov actually changed my behavior. The Groove Index gave me a scoreboard, the pods gave me accountability, and the capacity engine gave me clarity. That's the stack.",
    name: "Maya Patel",
    role: "Technical Founder, Security SaaS"
  }
];

const categories = [
  { id: "burnout", label: "Burnout & Decision Fatigue" },
  { id: "pods", label: "Pod Squads" },
  { id: "groove", label: "Groove Index" },
  { id: "outcomes", label: "Outcomes" },
  { id: "community", label: "Community" },
  { id: "roi", label: "ROI" }
] as const;

export const Testimonials = () => {
  const [selectedCategory, setSelectedCategory] = useState<TestimonialCategory>("burnout");

  const filteredTestimonials = testimonials.filter(t => t.category === selectedCategory);

  return (
    <section className="py-32 px-6 md:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-light letter-spacing-wide">
            What Founders Are Saying
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real builders like you
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-foreground hover:bg-accent"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {filteredTestimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full border-border/50 bg-card hover:shadow-lg transition-shadow">
                    <CardContent className="p-8 flex flex-col h-full">
                      <Quote className="h-8 w-8 text-primary/30 mb-4" />
                      <blockquote className="text-foreground leading-relaxed mb-6 flex-grow">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="border-t border-border pt-4">
                        <p className="font-medium text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-border bg-background hover:bg-accent" />
            <CarouselNext className="border-border bg-background hover:bg-accent" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
