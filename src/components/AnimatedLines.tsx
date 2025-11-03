export const AnimatedLines = () => {
  return (
    <svg
      className="absolute right-0 top-0 h-full w-full opacity-30"
      viewBox="0 0 1200 800"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMaxYMid slice"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(180, 100%, 50%)" stopOpacity="0.8" />
          <stop offset="50%" stopColor="hsl(200, 90%, 45%)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(170, 100%, 45%)" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      
      {/* Animated horizontal lines */}
      <line
        x1="600"
        y1="100"
        x2="1200"
        y2="100"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        className="animate-glow"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        style={{ animation: "draw-line 2s ease-out forwards" }}
      />
      <line
        x1="600"
        y1="200"
        x2="1100"
        y2="200"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        className="animate-glow"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        style={{ animation: "draw-line 2s ease-out 0.2s forwards" }}
      />
      <line
        x1="600"
        y1="300"
        x2="1000"
        y2="300"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        className="animate-glow"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        style={{ animation: "draw-line 2s ease-out 0.4s forwards" }}
      />
      <line
        x1="600"
        y1="400"
        x2="900"
        y2="400"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        className="animate-glow"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        style={{ animation: "draw-line 2s ease-out 0.6s forwards" }}
      />
      <line
        x1="600"
        y1="500"
        x2="1100"
        y2="500"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        className="animate-glow"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        style={{ animation: "draw-line 2s ease-out 0.8s forwards" }}
      />
      <line
        x1="600"
        y1="600"
        x2="900"
        y2="600"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        className="animate-glow"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        style={{ animation: "draw-line 2s ease-out 1s forwards" }}
      />
      <line
        x1="600"
        y1="700"
        x2="1000"
        y2="700"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        className="animate-glow"
        strokeDasharray="1000"
        strokeDashoffset="1000"
        style={{ animation: "draw-line 2s ease-out 1.2s forwards" }}
      />
    </svg>
  );
};
