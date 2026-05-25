import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const setupIncludes = [
  "Understanding your business and call workflow",
  "AI receptionist setup and customization",
  "Training the AI on your business information",
  "Call flow and routing setup",
  "Appointment booking setup",
  "End-to-end testing and optimization",
];

const monthlyIncludes = [
  "24/7 AI call answering",
  "Ongoing support and maintenance",
  "Up to 1,000 minutes/month included",
  "AI updates and optimizations",
  "Monitoring and reliability management",
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-[hsl(0_0%_5%)]">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-white uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4 text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            One-time setup to get you live. Low monthly fee to keep it running.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-3xl border border-white/20 overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_40px_rgba(0,0,0,0.4)] bg-white/[0.03]">
          {/* Step 1 — Setup */}
          <div className="p-5 sm:p-8 md:p-10 border-b border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-6 h-6 rounded-full bg-white/20 text-white text-xs flex items-center justify-center font-semibold">1</span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/70">One-Time Setup</span>
                </div>
                <p className="text-sm text-white/60 mt-1">Everything needed to get your AI receptionist live.</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-4xl font-bold text-white">$1,500</span>
              </div>
            </div>
            <ul className="grid sm:grid-cols-2 gap-2">
              {setupIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                    <Check className="w-3 h-3 text-black stroke-[3]" />
                  </span>
                  <span className="text-sm text-white/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step 2 — Monthly */}
          <div className="p-5 sm:p-8 md:p-10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-6 h-6 rounded-full bg-white/20 text-white text-xs flex items-center justify-center font-semibold">2</span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/70">Then Monthly</span>
                </div>
                <p className="text-sm text-white/60 mt-1">Keep your AI receptionist running 24/7.</p>
              </div>
              <div className="flex-shrink-0 text-right">
                <span className="text-4xl font-bold text-white">$399</span>
                <span className="text-white/60 text-sm">/month</span>
                <p className="text-xs text-white/50 mt-1">Additional usage billed separately.</p>
              </div>
            </div>
            <ul className="grid sm:grid-cols-2 gap-2">
              {monthlyIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-white flex items-center justify-center">
                    <Check className="w-3 h-3 text-black stroke-[3]" />
                  </span>
                  <span className="text-sm text-white/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="px-6 md:px-10 py-6 bg-white/5 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <p className="text-sm text-white/60 text-center sm:text-left">
              Ready to stop missing calls?
            </p>
            <a href="https://cal.com/saltpilot/45min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button size="lg" className="w-full gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md transition-all duration-200">
                Book a Meeting
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
