import { PhoneOff, Clock, UserX } from "lucide-react";

const problems = [
  {
    icon: PhoneOff,
    title: "Calls come in when your team is busy",
    description: "Your staff is helping a customer in person. The phone rings. No one picks up. That caller is gone.",
  },
  {
    icon: Clock,
    title: "Calls come after business hours",
    description: "Customers don't wait until 9am. They call when they need you — evenings, weekends, holidays.",
  },
  {
    icon: UserX,
    title: "Missed calls don't call back",
    description: "62% of callers won't leave a voicemail. They'll just call your competitor instead.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">The Problem</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Missed Calls = Lost Revenue
          </h2>
        </div>

        <div className="space-y-6 md:space-y-8 max-w-3xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-6 p-6 rounded-2xl glass"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-foreground font-medium">
            Your AI receptionist answers every call — so you never lose another customer to a missed ring.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
