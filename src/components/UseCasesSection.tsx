import { Stethoscope, Wrench, ShoppingBag, Building2 } from "lucide-react";

const useCases = [
  {
    icon: Stethoscope,
    title: "Clinics & Healthcare",
    description: "Handle patient inquiries and appointment requests when your front desk is swamped.",
  },
  {
    icon: Wrench,
    title: "Local Service Businesses",
    description: "Plumbers, electricians, contractors—never miss a service call again.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & Customer Support",
    description: "Answer product questions and support calls even during peak hours.",
  },
  {
    icon: Building2,
    title: "Any Business That Gets Calls",
    description: "If you can't afford missed calls, Saltpilot is built for you.",
  },
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Use cases</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Built for Businesses That Get Calls
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
