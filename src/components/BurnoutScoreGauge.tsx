import { useEffect, useState } from "react";

interface BurnoutScoreGaugeProps {
  score?: number;
}

export const BurnoutScoreGauge = ({ score = 30 }: BurnoutScoreGaugeProps) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedScore(score);
    }, 500);
    return () => clearTimeout(timer);
  }, [score]);

  const getScoreZone = (value: number) => {
    if (value >= 70) return { label: "Healthy Zone", color: "text-primary", bgColor: "bg-primary/20", glowColor: "shadow-[0_0_30px_rgba(74,222,128,0.4)]" };
    if (value >= 40) return { label: "Caution Zone", color: "text-warning", bgColor: "bg-warning/20", glowColor: "shadow-[0_0_30px_rgba(251,146,60,0.4)]" };
    return { label: "Alert Zone", color: "text-destructive", bgColor: "bg-destructive/20", glowColor: "shadow-[0_0_30px_rgba(239,68,68,0.4)]" };
  };

  const zone = getScoreZone(animatedScore);
  const circumference = 2 * Math.PI * 90;
  const strokeDashoffset = circumference - (animatedScore / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        <svg width="240" height="240" className="transform -rotate-90">
          <circle
            cx="120"
            cy="120"
            r="90"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="12"
          />
          <circle
            cx="120"
            cy="120"
            r="90"
            fill="none"
            stroke={
              animatedScore >= 70
                ? "hsl(var(--primary))"
                : animatedScore >= 40
                ? "hsl(var(--warning))"
                : "hsl(var(--destructive))"
            }
            strokeWidth="12"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className={`text-6xl font-light ${zone.color} transition-colors duration-500`}>
            {animatedScore}
          </div>
          <div className="text-sm text-muted-foreground mt-1">/ 100</div>
        </div>
      </div>

      <div className={`${zone.bgColor} ${zone.glowColor} px-6 py-3 rounded-full transition-all duration-500`}>
        <span className={`text-sm font-medium ${zone.color}`}>{zone.label}</span>
      </div>

      <div className="grid grid-cols-1 gap-3 w-full max-w-xs text-sm">
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Check-Ins</span>
          <span className="text-foreground font-medium">2/7</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Task Completion</span>
          <span className="text-foreground font-medium">22%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Team Engagement</span>
          <span className="text-primary font-medium">Active</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-muted-foreground">Health Crisis</span>
          <span className="text-destructive font-medium">Danger Zone</span>
        </div>
      </div>
    </div>
  );
};
