import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="font-serif text-4xl md:text-5xl font-normal mb-4">Terms & Conditions</h1>
        <p className="font-serif text-muted-foreground mb-16">(Last updated: December 2, 2025)</p>
        
        <div className="font-serif space-y-8 text-muted-foreground leading-relaxed">
          <p>By creating an account or using neXgroov, you agree to these terms.</p>
          
          <div>
            <h2 className="text-foreground text-lg font-normal mb-2">Service</h2>
            <p>neXgroov is an invite-only performance platform that connects high-performing operators (founders, executives, doctors, etc.) into small accountability squads, delivers AI-personalized drills, and tracks progress via XP and burnout intelligence.</p>
          </div>
          
          <div>
            <h2 className="text-foreground text-lg font-normal mb-2">Eligibility</h2>
            <p>You must be 18+ and invited by an existing member or approved via waitlist.</p>
          </div>
          
          <div>
            <h2 className="text-foreground text-lg font-normal mb-2">Your Account</h2>
            <ul className="list-none space-y-1">
              <li>Keep your login credentials secure</li>
              <li>You are responsible for all activity under your account</li>
              <li>One account per person</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-foreground text-lg font-normal mb-2">Payment & Subscriptions (when launched)</h2>
            <ul className="list-none space-y-1">
              <li>Free tier available forever</li>
              <li>Premium plans auto-renew; cancel anytime</li>
              <li>No refunds for partial months (except required by law)</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-foreground text-lg font-normal mb-2">Content & Conduct</h2>
            <ul className="list-none space-y-1">
              <li>Be respectful: no harassment, hate speech, or spam in squads</li>
              <li>You own your content; you grant neXgroov a limited license to process it for delivering the service</li>
              <li>We may remove any content or suspend accounts that violate these rules</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-foreground text-lg font-normal mb-2">Intellectual Property</h2>
            <p>The platform, drills, Capacity Intelligence models, and branding are owned by neXgroov. You may not copy, reverse-engineer, or resell any part of the service.</p>
          </div>
          
          <div>
            <h2 className="text-foreground text-lg font-normal mb-2">Termination</h2>
            <ul className="list-none space-y-1">
              <li>You can delete your account anytime</li>
              <li>We may terminate or suspend access for violations or if we shut down the service</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-foreground text-lg font-normal mb-2">Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, NeXgroov is not liable for indirect, incidental, or consequential damages. Total liability is limited to what you paid us in the previous 12 months (or $100 if you're on a free tier).</p>
          </div>
          
          <div>
            <h2 className="text-foreground text-lg font-normal mb-2">Governing Law</h2>
            <p>Delaware, USA (without regard to conflict of laws).</p>
          </div>
          
          <div>
            <h2 className="text-foreground text-lg font-normal mb-2">Changes</h2>
            <p>We may update these terms. We'll notify you of material changes via email or in-app. Continued use after 30 days means you accept the new terms.</p>
          </div>
          
          <div>
            <h2 className="text-foreground text-lg font-normal mb-2">Questions?</h2>
            <p>hello@nexgroov.com</p>
          </div>
          
          <p className="mt-8">We're building this for operators, by operators, we thank you for trusting us with your performance journey.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
