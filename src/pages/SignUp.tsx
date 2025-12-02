import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const SignUp = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the email submission
    console.log("Email submitted:", email);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <h1 className="font-serif text-3xl text-center mb-8">
            {step === 1 ? "Create your account" : "Almost there!"}
          </h1>
          
          {step === 1 ? (
            <form onSubmit={handleNext} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" type="text" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" required />
              </div>
              <Button className="w-full" type="submit">
                Next
              </Button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="you@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <Button className="w-full" type="submit">
                Get started
              </Button>
              <Button 
                className="w-full" 
                variant="outline" 
                type="button"
                onClick={() => setStep(1)}
              >
                Back
              </Button>
            </form>
          )}
          
          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{" "}
            <a href="/signin" className="text-foreground hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
