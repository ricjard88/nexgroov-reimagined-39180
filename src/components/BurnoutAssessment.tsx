import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";

const questions = [
  "I have little energy left for life outside work.",
  "I feel detached or cynical about my work/users/customers.",
  "I've been working 60+ hours/week lately.",
  "I feel emotionally drained from my work.",
  "I have little or no peer/founder support to talk about the hard parts.",
  "I feel like I'm achieving less than I should.",
];

const options = [
  { value: "1", label: "Never" },
  { value: "2", label: "Rarely" },
  { value: "3", label: "Sometimes" },
  { value: "4", label: "Often" },
  { value: "5", label: "Always" },
];

export const BurnoutAssessment = () => {
  const [answers, setAnswers] = useState<(string | null)[]>(Array(6).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const [score, setScore] = useState(0);

  const handleAnswerChange = (questionIndex: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
  };

  const allQuestionsAnswered = answers.every((answer) => answer !== null);

  const calculateScore = () => {
    const sum = answers.reduce((acc, answer) => acc + parseInt(answer || "0"), 0);
    const calculatedScore = (sum / 6) * 20;
    setScore(Math.round(calculatedScore));
    setShowResults(true);
  };

  const getScoreColor = (score: number) => {
    if (score <= 40) return "hsl(var(--accent))"; // Green
    if (score <= 64) return "hsl(38 95% 50%)"; // Yellow
    if (score <= 79) return "hsl(25 95% 50%)"; // Orange
    return "hsl(var(--destructive))"; // Red
  };

  const getRiskLevel = (score: number) => {
    if (score <= 40) return "Low risk";
    if (score <= 64) return "Elevated risk";
    if (score <= 79) return "High risk";
    return "Severe risk";
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    const subject = `Burnout Assessment - ${score}% Risk`;
    const body = `Score: ${score}%\nRisk Level: ${getRiskLevel(score)}\nUser Email: ${email}\nTimestamp: ${new Date().toISOString()}`;
    window.location.href = `mailto:hello@nexgroov.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    toast({
      title: "Thank you!",
      description: "We'll send you the information shortly.",
    });
  };

  if (showResults) {
    const isHighRisk = score >= 65;
    
    return (
      <section id="burnout-quiz" className="py-32 px-6 md:px-12 bg-gradient-subtle">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-3xl md:text-4xl font-light mb-4" style={{ color: "hsl(var(--quiz-headline))" }}>
                Your Burnout Risk: {score}%
              </h3>
              <div className="relative h-6 w-full overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${score}%`,
                    backgroundColor: getScoreColor(score),
                  }}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">{getRiskLevel(score)}</p>
            </div>

            {isHighRisk ? (
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  You're in the danger zone — 82% of founders are right there with you.
                </p>
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  Get your free prevention plan + instant peer pod match (3–5 founders at the same stage):
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  You're holding it together better than most, but early signals matter.
                </p>
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  Want to stay ahead with peer accountability?
                </p>
              </div>
            )}

            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="max-w-md"
                required
              />
              <Button type="submit" size="lg">
                {isHighRisk ? "Send me the plan →" : "Get peer accountability →"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="burnout-quiz" className="py-32 px-6 md:px-12 bg-gradient-subtle">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-light" style={{ color: "hsl(var(--quiz-headline))" }}>
            How close are you to burnout right now?
          </h2>
        </div>

        <div className="space-y-12">
          {questions.map((question, index) => (
            <div key={index} className="space-y-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <p className="text-lg md:text-xl text-foreground font-light">
                {index + 1}. {question}
              </p>
              <RadioGroup
                value={answers[index] || ""}
                onValueChange={(value) => handleAnswerChange(index, value)}
              >
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  {options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={`q${index}-${option.value}`} />
                      <Label
                        htmlFor={`q${index}-${option.value}`}
                        className="text-sm md:text-base cursor-pointer"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          ))}

          <div className="flex justify-center pt-8">
            <Button
              size="lg"
              onClick={calculateScore}
              disabled={!allQuestionsAnswered}
              className="min-w-[200px]"
            >
              Show My Results
            </Button>
          </div>

          {!allQuestionsAnswered && (
            <p className="text-center text-sm text-muted-foreground">
              Please answer all questions to see your results
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
