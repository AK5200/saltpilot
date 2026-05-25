import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <div className="text-center p-12 md:p-20 rounded-3xl glass relative overflow-hidden grain">
          <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/5 blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Stop Losing Customers to Missed Calls
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
              Get a custom AI voice agent for your business, trained on your info, connected to your calendar, and answering calls 24/7.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
              <a href="tel:+13613096198" className="w-full sm:w-auto">
                <Button variant="hero" size="xl" className="w-full gap-3">
                  <Phone className="w-5 h-5" />
                  <span className="sm:hidden">Call My Assistant</span>
                  <span className="hidden sm:inline">Call My Assistant &nbsp; +1 (361) 309-6198</span>
                </Button>
              </a>
              <a href="https://cal.com/saltpilot/45min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="xl" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md gap-2 transition-all duration-200">
                  Book a Meeting
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
