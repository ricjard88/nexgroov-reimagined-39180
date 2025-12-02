import { useState, useEffect } from "react";

export const DefeatBurnoutGame = () => {
  const [alive, setAlive] = useState(true);
  const [blueSize, setBlueSize] = useState(140);
  const [msg, setMsg] = useState('');
  const [pos, setPos] = useState({ left: '50%', top: '20%' });
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(1200);
  const [streak, setStreak] = useState(0);

  function moveRandom() {
    const left = `${8 + Math.random() * 84}%`;
    const top = `${8 + Math.random() * 74}%`;
    setPos({ left, top });
  }

  function respawn() {
    moveRandom();
    setAlive(true);
    setMsg('');
    setSpeed((s) => Math.max(450, s - 60));
  }

  function hit() {
    setAlive(false);
    setBlueSize((s) => Math.min(320, s + 12));
    setScore((n) => n + 1);
    setStreak((k) => k + 1);
    setMsg('+1');
    setTimeout(respawn, 500);
  }

  function missReset() {
    setStreak(0);
    setMsg('missed — streak reset');
    setTimeout(() => setMsg(''), 900);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (alive) moveRandom();
    }, speed);
    return () => clearInterval(timer);
  }, [alive, speed]);

  useEffect(() => {
    if (!alive) {
      const t = setTimeout(() => {
        missReset();
        setBlueSize((s) => Math.max(120, s - 18));
        respawn();
      }, 2200);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [alive]);

  useEffect(() => {
    moveRandom();
  }, []);

  return (
    <div className="max-w-3xl mx-auto my-12 px-6">
      <h3 className="font-serif text-2xl text-center mb-2">Defeat the Burnout</h3>
      <div className="flex justify-center gap-3 mb-2">
        <div className="text-xs text-muted-foreground">score: {score}</div>
        <div className="text-xs text-muted-foreground">streak: {streak}</div>
      </div>

      <div className="relative h-56 rounded-xl bg-white border border-border overflow-hidden">
        <div
          className="absolute left-1/2 bottom-3 -translate-x-1/2 rounded-full bg-blue-50 border border-blue-200 transition-all duration-300"
          style={{
            width: blueSize,
            height: blueSize,
          }}
        />

        {alive && (
          <button
            onClick={hit}
            aria-label="defeat burnout"
            className="absolute -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-destructive border-2 border-destructive/80 cursor-pointer hover:scale-110 transition-transform"
            style={{
              left: pos.left,
              top: pos.top,
            }}
          />
        )}

        {msg && (
          <div className="absolute left-1/2 top-2 -translate-x-1/2 text-sm text-muted-foreground">{msg}</div>
        )}
      </div>

      <p className="text-center text-xs text-muted-foreground mt-2">
        Tap the red dot quickly. It speeds up each round. Keep streaks to grow energy.
      </p>
    </div>
  );
};
