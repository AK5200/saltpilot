import { Phone, Clock, UserX, FileText } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Answers calls your team misses",
    description: "When your front desk is busy or unavailable, your AI agent picks up.",
  },
  {
    icon: Clock,
    title: "Handles after-hours inquiries",
    description: "Patients call outside business hours. Your AI agent is always there.",
  },
  {
    icon: UserX,
    title: "Collects caller details and intent",
    description: "Understands what the caller needs and captures key information.",
  },
  {
    icon: FileText,
    title: "Sends a clean summary to your team",
    description: "Your team gets everything they need to follow up effectively.",
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Your AI Call Backup
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            We set up an AI voice agent that answers calls when your front desk can't.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl glass hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground font-medium glass inline-block px-6 py-3 rounded-full">
            Increase your team's efficiency by 90%
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
