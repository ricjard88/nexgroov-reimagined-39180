import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const obstacles = [
  { label: "Energy & Burnout", subject: "Energy & Burnout Support Request" },
  { label: "Too many decisions", subject: "Decision Fatigue Support Request" },
  { label: "Ready to scale/hire", subject: "Scaling & Hiring Support Request" },
  { label: "Revenue consistency", subject: "Revenue Consistency Support Request" },
  { label: "Still figuring it out", subject: "General Support Request" },
];

export const ObstacleDropdown = () => {
  const handleObstacleSelect = (subject: string) => {
    const mailtoLink = `mailto:hello@nexgroov.com?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground">
          What's your biggest challenge?
          <ChevronDown className="ml-2 h-5 w-5 transition-transform group-data-[state=open]:rotate-180" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-64 bg-card border-border">
        {obstacles.map((obstacle) => (
          <DropdownMenuItem
            key={obstacle.label}
            onClick={() => handleObstacleSelect(obstacle.subject)}
            className="cursor-pointer text-foreground hover:bg-primary/10"
          >
            {obstacle.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
