import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="font-serif text-4xl md:text-5xl font-normal mb-16">About Us</h1>
        
        <div className="font-serif space-y-6 text-muted-foreground leading-relaxed">
          <p>What we build here isn't for everyone. And that is by design.</p>
          
          <p>We make tools for people who actually build things. The ones who carry weight. The ones who don't get to tap out or make excuses. The ones who don't hide behind ideas but show up despite capacity, again and again.</p>
          
          <p>Most people want shortcuts, hacks, stories. We don't have any of that.</p>
          
          <p>What we make takes real work. Real observation. Real pressure testing. And yes…sometimes it looks obsessive. Because it is.</p>
          
          <p>We study what breaks people. We study what keeps them sharp. Not in theory. Or the safety of the classroom, but in the field. In real teams pushing real goals.</p>
          
          <p>That's why we call this an OS. Because capacity isn't a trick. It's a system. And most people never learn it.</p>
          
          <p>There's no fluff. No motivational sugar. No "inspiration."</p>
          
          <p>Just clear signals, honest tracking, and the pressure of showing up with people who expect something of you.</p>
          
          <p>If you want noise, there are other places for that.</p>
          <p>If you're looking for feel-good stories and rainbow charts, there are plenty of OTHER options.</p>
          
          <p>But if you want to grow capacity, for real…</p>
          <p>If you want to train the way serious builders train…</p>
          <p>If you want an environment that keeps you honest and sharp…</p>
          
          <p>If you refuse to become another burnout statistic, you're in the right place.</p>
          
          <p className="mt-8">We built Nexgroov for builders who want to operate at a high standard without burning themselves down. For teams who want an arena to push each other. For groups who want to win clean, not collapse messy.</p>
          
          <p className="italic">We're obsessed with one outcome: turning high-performers into unstoppable ones without burning them out. Our world deserves it.</p>
          
          <p className="mt-8">If this sounds like you…</p>
          
          <p className="text-foreground">Welcome.</p>
          
          <p className="text-foreground">You're in the right place.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
