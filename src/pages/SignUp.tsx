import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const SUPABASE_URL = "https://aybfhcfuohelichpqayl.supabase.co";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${SUPABASE_URL}/functions/v1/send-interest-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setIsSubmitted(true);
      toast({
        title: "Request received!",
        description: "We'll reach out when a spot opens up.",
      });
    } catch (error) {
      console.error("Error submitting interest:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly at hello@nexgroov.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md text-center">
          {isSubmitted ? (
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="font-serif text-3xl">You're on the list!</h1>
              <p className="text-muted-foreground">
                We'll reach out to <span className="text-foreground font-medium">{email}</span> when a spot opens up.
              </p>
              <a href="/" className="text-primary hover:underline text-sm">
                ← Back to home
              </a>
            </div>
          ) : (
            <>
              <h1 className="font-serif text-3xl mb-4">We're currently invite-only</h1>
              <p className="text-muted-foreground mb-8">
                Interested in joining? Drop your email below and we'll reach out when a spot opens up.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input 
                  type="email" 
                  placeholder="you@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  className="text-center"
                />
                <Button className="w-full" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Request Access"}
                </Button>
              </form>
              
              <p className="text-sm text-muted-foreground mt-6">
                Or email us directly at{" "}
                <a href="mailto:hello@nexgroov.com" className="text-foreground hover:underline">
                  hello@nexgroov.com
                </a>
              </p>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
