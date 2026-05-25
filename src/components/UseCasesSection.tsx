import { Stethoscope, Wrench, ShoppingBag, Building2, Home, ArrowRight } from "lucide-react";

const useCases = [
  {
    icon: Stethoscope,
    title: "Clinics & Healthcare",
    description: "Handle patient inquiries, appointment requests, and after-hours calls without adding staff.",
  },
  {
    icon: Wrench,
    title: "Home Services",
    description: "Plumbers, electricians, contractors: capture every job request, even on weekends.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Restaurants",
    description: "Answer product questions, take reservations, and handle support during your busiest hours.",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Never miss a lead. Your AI answers inquiries, qualifies callers, and books showings around the clock.",
  },
  {
    icon: Building2,
    title: "Any Local Business",
    description: "If phone calls drive your revenue, Saltpilot makes sure none of them go unanswered.",
  },
  {
    icon: ArrowRight,
    title: "...And Your Business",
    description: "Whatever you do, if calls matter to your business, we'll build an AI receptionist around how you work.",
  },
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Use cases</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Built for Any Local Business That Gets Calls
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl glass hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <useCase.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{useCase.title}</h3>
              <p className="text-sm text-muted-foreground">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
