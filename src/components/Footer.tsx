export const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <nav className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
          <a href="/privacy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </a>
          <span className="text-border">|</span>
          <a href="/about" className="hover:text-foreground transition-colors">
            About Us
          </a>
          <span className="text-border">|</span>
          <a href="/faq" className="hover:text-foreground transition-colors">
            FAQs
          </a>
          <span className="text-border">|</span>
          <a href="/terms" className="hover:text-foreground transition-colors">
            Terms and Conditions
          </a>
        </nav>
      </div>
    </footer>
  );
};
