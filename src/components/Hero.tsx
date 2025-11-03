import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export const Hero = () => {
  const [email, setEmail] = useState("");
  const [obstacle, setObstacle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Beta signup:", { email, obstacle });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-4xl mx-auto text-center space-y-12 animate-fade-in">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            ne<span className="text-primary">x</span>groov
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground">
            Elite support for the loneliest job in business
          </p>
          
          <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            As a founder, you battle solo as the coach, GM, and star player... and it's time to break free. 
            Join a tight-knit squad of founders who get it: "iron sharpens iron". Training together, 
            conquering wins, and dodging burnout with elite coaches and peers by your side with each 
            accomplishing their vision for value.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <Select value={obstacle} onValueChange={setObstacle}>
              <SelectTrigger className="md:w-[280px] bg-input border-border text-foreground">
                <SelectValue placeholder="What's your obstacle as a solo founder?" />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                <SelectItem value="energy">Energy/Burnout</SelectItem>
                <SelectItem value="decisions">Too many decisions</SelectItem>
                <SelectItem value="scale">Ready to scale/hire</SelectItem>
                <SelectItem value="revenue">Revenue consistency</SelectItem>
                <SelectItem value="figuring">Still figuring that out</SelectItem>
              </SelectContent>
            </Select>
            
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-input border-border text-foreground placeholder:text-muted-foreground"
              required
            />
            
            <Button 
              type="submit" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            >
              Join the beta
            </Button>
          </div>
          
          <p className="text-xs text-muted-foreground">
            no spam. just beta updates.
          </p>
        </form>
      </div>
    </section>
  );
};
