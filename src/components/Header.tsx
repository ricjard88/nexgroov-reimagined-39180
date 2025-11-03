export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xs text-muted-foreground">early access</div>
        <div className="text-xs text-muted-foreground">beta</div>
      </div>
    </header>
  );
};
