export const Thesis = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-light letter-spacing-wide mb-12">
          Our Thesis
        </h2>
        
        <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
          <p className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Solo founders face the loneliest job in business. Building in isolation leads to burnout, procrastination, 
            and stalled progress. Traditional accountability systems aren't built for the unique challenges of entrepreneurship.
          </p>
          
          <p className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            nexgroov transforms the founder journey through gamified accountability. By organizing builders into squads, 
            each member commits to one focused task daily—all connected to a unified mission. Progress becomes visible, 
            measurable, and celebrated.
          </p>
          
          <p className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            With dedicated coaches facilitating each squad, founders gain structure, support, and momentum. 
            We're not just building products—we're building a new generation of world builders.
          </p>
        </div>
      </div>
    </section>
  );
};
