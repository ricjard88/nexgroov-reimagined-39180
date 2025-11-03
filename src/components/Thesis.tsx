export const Thesis = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-light letter-spacing-wide mb-12">
          Our Thesis
        </h2>
        
        <div className="space-y-8 text-lg md:text-xl text-muted-foreground leading-relaxed">
          <p className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            The technology landscape is evolving at an unprecedented pace. Traditional approaches to software development, 
            infrastructure management, and data processing are reaching their limits.
          </p>
          
          <p className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            nexgroov is redesigning the foundations of modern technology from the ground up. We're building systems that 
            are not just faster and more efficient, but fundamentally more intelligent, adaptable, and secure.
          </p>
          
          <p className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            Our approach combines cutting-edge research with practical, enterprise-ready solutions that scale seamlessly 
            from prototype to production.
          </p>
        </div>
      </div>
    </section>
  );
};
