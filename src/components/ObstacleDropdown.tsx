import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const obstacles = [
  { label: "Energy & Burnout", subject: "Energy & Burnout Support Request" },
  { label: "Too many decisions", subject: "Decision Fatigue Support Request" },
  { label: "Ready to scale/hire", subject: "Scaling & Hiring Support Request" },
  { label: "Revenue consistency", subject: "Revenue Consistency Support Request" },
  { label: "Still figuring it out", subject: "General Support Request" },
];

export const ObstacleDropdown = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedChallenge, setSelectedChallenge] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleObstacleSelect = (challenge: string) => {
    setSelectedChallenge(challenge);
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    const body = `Challenge: ${selectedChallenge}%0D%0AEmail: ${email}`;
    const mailtoLink = `mailto:hello@nexgroov.com?subject=${encodeURIComponent(selectedChallenge)}&body=${body}`;
    window.location.href = mailtoLink;
    
    setIsDialogOpen(false);
    setEmail("");
    
    toast({
      title: "Request sent!",
      description: "We'll be in touch soon.",
    });
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground">
            What's your biggest challenge?
            <ChevronDown className="ml-2 h-5 w-5 transition-transform group-data-[state=open]:rotate-180" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-64 bg-card border-border z-50">
          {obstacles.map((obstacle) => (
            <DropdownMenuItem
              key={obstacle.label}
              onClick={() => handleObstacleSelect(obstacle.label)}
              className="cursor-pointer text-foreground hover:bg-primary/10"
            >
              {obstacle.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle>Let's talk about: {selectedChallenge}</DialogTitle>
            <DialogDescription>
              Enter your email and we'll reach out to discuss how we can help.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-background border-border"
              required
            />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              Send Request
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
