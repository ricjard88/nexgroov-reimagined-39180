import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="font-serif text-4xl md:text-5xl font-normal mb-4">Privacy Policy</h1>
        <p className="font-serif text-muted-foreground mb-16">(Last updated: December 2, 2025)</p>
        
        <div className="font-serif space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="text-foreground text-lg font-normal mb-2">Our core promise</h2>
            <p>We treat your data like a black box. Nothing you share is ever visible to us, our team, or any third party beyond the absolute minimum required to run the product and match you with your squad. No ads, no tracking, no selling, no exceptions.</p>
          </div>
          
          <div>
            <h2 className="text-foreground text-lg font-normal mb-4">What we collect (and why it disappears fast)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 pr-4 text-foreground font-normal">Data Type</th>
                    <th className="text-left py-3 pr-4 text-foreground font-normal">What it is</th>
                    <th className="text-left py-3 pr-4 text-foreground font-normal">How it's used</th>
                    <th className="text-left py-3 text-foreground font-normal">When it's deleted / anonymized</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">Email / Phone (login)</td>
                    <td className="py-3 pr-4">Only for account access & squad invites</td>
                    <td className="py-3 pr-4">Send login links, squad notifications</td>
                    <td className="py-3">On request - instantly & permanently</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">Name / Role / Industry</td>
                    <td className="py-3 pr-4">Display name in your squad</td>
                    <td className="py-3 pr-4">Human-readable matching & squad display</td>
                    <td className="py-3">On request - instantly & permanently</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">Burnout & goal responses</td>
                    <td className="py-3 pr-4">Sliders & selections from onboarding</td>
                    <td className="py-3 pr-4">AI uses once to generate your risk meter & match you</td>
                    <td className="py-3">Raw answers deleted within 24 hours; only anonymized insights kept for model training</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">Drill / task responses</td>
                    <td className="py-3 pr-4">Text, voice notes, check-ins</td>
                    <td className="py-3 pr-4">AI personalizes next drills & squad insights</td>
                    <td className="py-3">Deleted within 7 days; never seen by humans</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">Interaction metadata</td>
                    <td className="py-3 pr-4">Timestamps, completion %, XP earned</td>
                    <td className="py-3 pr-4">Power streaks, leaderboards, squad matching</td>
                    <td className="py-3">Anonymized after 30 days (no link back to you)</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4">Calendar / Slack (optional)</td>
                    <td className="py-3 pr-4">Integration data for Capacity Intelligence</td>
                    <td className="py-3 pr-4">Auto-detect overload & suggest recovery</td>
                    <td className="py-3">You control & revoke anytime; we never store raw calendar events</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div>
            <h2 className="text-foreground text-lg font-normal mb-2">What we NEVER collect</h2>
            <ul className="list-none space-y-1">
              <li>Cookies, pixels, or any cross-site tracking</li>
              <li>Precise location, contacts, microphone/camera access</li>
              <li>Browsing history, IP logging, or device fingerprinting</li>
              <li>Anything sold or shared for advertising</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-foreground text-lg font-normal mb-2">How your data stays a black box</h2>
            <ul className="list-none space-y-3">
              <li><span className="text-foreground">End-to-end encryption:</span> All personal inputs (drills, notes, burnout scores) are encrypted client-side before they leave your device. Even if someone intercepted the data, it's unreadable.</li>
              <li><span className="text-foreground">Zero-knowledge processing:</span> Our AI processes encrypted data and returns only the result (e.g., "Your risk score is Medium, here's your drill"). No employee can ever view raw answers.</li>
              <li><span className="text-foreground">Anonymized squad insights:</span> When your squad sees collective stats ("Squad average energy: 68%") no one, not even us, can trace it back to an individual.</li>
              <li><span className="text-foreground">Strict access controls:</span> Only 1 engineer has production access, and they can only see system logs, never personal content.</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-foreground text-lg font-normal mb-2">Your rights (you're in full control)</h2>
            <ul className="list-none space-y-1">
              <li><span className="text-foreground">Delete everything.</span> One click in Settings or email privacy@nexgroov.com = gone forever within 24 hours</li>
              <li><span className="text-foreground">Export your data</span> and request a copy of everything we still have (usually just your email, anonymized XP history and burn meter metrics)</li>
              <li><span className="text-foreground">Revoke integrations</span> instantly cuts Calendar/Slack access</li>
              <li><span className="text-foreground">No retaliation</span> means exercising any right never affects your squad placement, XP, or access</li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-foreground text-lg font-normal mb-2">Compliance</h2>
            <p>We are fully compliant with GDPR, CCPA/CPRA, TCPA, and all applicable U.S. state privacy laws. We act as a data processor for squad matching and controller only for account access.</p>
          </div>
          
          <div>
            <h2 className="text-foreground text-lg font-normal mb-2">Changes to this policy</h2>
            <p>Material changes will be notified via email and in-app banner. Continued use after 30 days constitutes acceptance.</p>
          </div>
          
          <div>
            <h2 className="text-foreground text-lg font-normal mb-2">Contact us</h2>
            <p>privacy@nexgroov.com</p>
            <p>We answer every single message personally.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
