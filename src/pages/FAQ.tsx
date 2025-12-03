import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Nexgroov?",
      answer: "A private operating system for high-stakes individuals. A supreme squad of peers at your level, daily crafted drills that move the needle, and a path measured in real-world momentum - not wellness points."
    },
    {
      question: "Who is it for?",
      answer: "For those who know what they want. For what we call founders, operators, surgeons, traders, or anyone who carries that weight making 100+ decisions a day and wants realness while growing their capacity."
    },
    {
      question: "How is it different from masterminds or coaching?",
      answer: "Masterminds meet when it's convenient. Nexgroov is daily. Coaches advise. Your squad and us make sure you follow through. Wellness apps calm you down. We are the concierge to your operating system."
    },
    {
      question: "Is my data private?",
      answer: "Yes. End-to-end encrypted, zero-knowledge AI, raw answers deleted in days, nothing sold, nothing seen by humans. Read the policy, we wrote it because we mean it."
    },
    {
      question: "Is this just a gamified to-do app with XP?",
      answer: "No. The game is the squad. XP and streaks exist to make accountability unavoidable."
    },
    {
      question: "How much time does it take?",
      answer: "5–15 minutes. Designed for people who don't have time to waste."
    },
    {
      question: "Is there a free version?",
      answer: "Core experience is free forever. Premium unlocks 1-on-1 coaching credits, advanced Capacity Intelligence, and unique rewards."
    },
    {
      question: "How do I join?",
      answer: "You need an invite from an existing member or apply through the waitlist. We keep signal high."
    },
    {
      question: "Can I bring my co-founder or team?",
      answer: "Yes. We run private squads for teams and companies."
    },
    {
      question: "What if I'm unsure?",
      answer: "Take your time. This isn't for everyone. This is for those who know they need this."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="font-serif text-4xl md:text-5xl font-normal mb-16">FAQ</h1>
        
        <div className="space-y-12">
          {faqs.map((faq, index) => (
            <div key={index}>
              <h2 className="font-serif text-xl font-normal mb-3">{faq.question}</h2>
              <p className="font-serif text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <p className="font-serif text-2xl mt-16">Simply Decide.</p>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
