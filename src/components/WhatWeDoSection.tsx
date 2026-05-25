import { Phone, Clock, CalendarCheck, Brain } from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Answers calls your team misses",
    description: "When your staff is busy or unavailable, your AI agent picks up instantly.",
  },
  {
    icon: Clock,
    title: "Handles after-hours inquiries",
    description: "Customers call nights and weekends. Your AI agent is always on.",
  },
  {
    icon: CalendarCheck,
    title: "Books appointments",
    description: "Your AI schedules directly into your calendar. No back and forth, no missed bookings.",
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Your 24/7 AI Receptionist
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            We build and run a custom AI voice agent for your business, trained on your info, connected to your calendar, and always ready to answer.
          </p>
        </div>

        {/* Featured card */}
        <div className="group mb-6 p-7 rounded-2xl glass border border-primary/20 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-start gap-6">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl gradient-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Brain className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Built around your business, not a template</h3>
            <p className="text-sm text-muted-foreground max-w-2xl">
              This is not a generic AI that reads from a script. Before your agent answers a single call, we train it on your services, pricing, FAQs, policies, and the way you talk to customers. When callers ask real questions, they get real answers: the kind only someone who truly knows your business could give.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl glass hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground font-medium glass inline-block px-6 py-3 rounded-full">
            Handle more calls without hiring anyone new.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
