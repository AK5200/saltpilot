const steps = [
  {
    number: "01",
    title: "Call goes unanswered",
    description: "When your team is busy or it's after hours, Saltpilot automatically answers.",
  },
  {
    number: "02",
    title: "Saltpilot speaks naturally",
    description: "Our AI understands the caller's request and responds with human-like conversation.",
  },
  {
    number: "03",
    title: "Your team follows up",
    description: "Receive a clean summary with caller details and intent. Follow up when ready.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-foreground text-background">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">How it works</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-balance">
            Simple. Seamless. No complexity.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl md:text-7xl font-bold text-primary/20 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-background/70">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 right-0 w-full h-px bg-gradient-to-r from-primary/30 to-transparent transform translate-x-1/2" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
