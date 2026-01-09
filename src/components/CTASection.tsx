import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <div className="text-center p-12 md:p-20 rounded-3xl glass relative overflow-hidden grain">
          {/* Floating accent shapes */}
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Increase Your Front Desk Efficiency by 90%
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              We set up a custom AI voice agent for your clinics, connected to your calendar, trained on your FAQs, ready to answer 24/7.
            </p>
            <Button asChild variant="hero" size="xl">
              <a href="https://cal.com/saltpilot/45min" target="_blank" rel="noreferrer">
                Book a Meeting
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-6">
              Ready for your superpowered front desk?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
