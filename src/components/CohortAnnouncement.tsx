import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const CohortAnnouncement = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

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

    const subject = "2025 Cohort Registration - Monday 9:00am";
    const body = `Cohort Registration Request%0D%0AEmail: ${email}`;
    const mailtoLink = `mailto:hello@nexgroov.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    window.location.href = mailtoLink;
    
    setIsDialogOpen(false);
    setEmail("");
    
    toast({
      title: "Registration sent!",
      description: "We'll send you the meeting details soon.",
    });
  };

  return (
    <>
      <section className="py-16 px-6 md:px-12 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-light letter-spacing-wide mb-4">
            Join Our 2025 Cohort
          </h3>
          <p className="text-xl text-muted-foreground mb-6">
            We meet every Monday at 9:00am
          </p>
          <Button 
            size="lg" 
            onClick={() => setIsDialogOpen(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Register for Cohort
          </Button>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle>Join Our 2025 Cohort</DialogTitle>
            <DialogDescription>
              Enter your email and we'll send you the meeting details for our Monday sessions at 9:00am.
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
              Send Registration
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
