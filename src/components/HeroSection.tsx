import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SaltParticle = ({ delay, x, y, size, opacity, duration }: { delay: number; x: number; y: number; size: number; opacity: number; duration: number }) => (
  <div
    className="absolute rounded-full bg-white animate-salt-drift"
    style={{
      width: size,
      height: size,
      left: `${x}%`,
      top: `${y}%`,
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      opacity: 0,
      '--particle-opacity': opacity,
    } as React.CSSProperties}
  />
);

const HeroSection = () => {
  // Generate dense salt particle field distributed organically across the page
  const particles = Array.from({ length: 200 }, (_, i) => {
    // Organic distribution across entire hero
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    // Gentle density variation - slightly more particles toward center-right
    const densityFactor = 0.7 + Math.sin(x * 0.03) * 0.3;
    
    // Varied sizes for salt grain effect
    const size = 1 + Math.random() * 2.5 * densityFactor;
    
    // Subtle opacity variation
    const opacity = 0.2 + Math.random() * 0.5;
    
    return {
      id: i,
      delay: Math.random() * 12,
      x,
      y,
      size,
      opacity,
      duration: 8 + Math.random() * 6,
    };
  });

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[hsl(0_0%_3%)]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-bl from-[hsl(0_0%_6%)] via-[hsl(0_0%_3%)] to-[hsl(0_0%_2%)]" />
      
      {/* Moon element - large, minimal, partially visible from right */}
      <div 
        className="absolute right-[-15%] top-1/2 -translate-y-1/2 w-[50%] aspect-square pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, hsl(0 0% 28%) 0%, hsl(0 0% 20%) 30%, hsl(0 0% 14%) 60%, hsl(0 0% 8%) 100%)
          `,
          borderRadius: '50%',
          boxShadow: `
            inset -20px -20px 60px rgba(0, 0, 0, 0.7),
            inset 10px 10px 40px rgba(255, 255, 255, 0.05),
            0 0 100px rgba(255, 255, 255, 0.06),
            0 0 200px rgba(255, 255, 255, 0.03)
          `,
        }}
      >
        {/* Subtle surface texture with dents */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 40%),
              radial-gradient(circle at 20% 45%, rgba(0,0,0,0.25) 0%, transparent 8%),
              radial-gradient(circle at 35% 30%, rgba(0,0,0,0.2) 0%, transparent 5%),
              radial-gradient(circle at 28% 60%, rgba(0,0,0,0.18) 0%, transparent 12%),
              radial-gradient(circle at 45% 50%, rgba(0,0,0,0.15) 0%, transparent 6%),
              radial-gradient(circle at 15% 70%, rgba(0,0,0,0.2) 0%, transparent 4%),
              radial-gradient(circle at 40% 75%, rgba(0,0,0,0.12) 0%, transparent 7%),
              radial-gradient(circle at 55% 35%, rgba(0,0,0,0.1) 0%, transparent 3%)
            `,
          }}
        />
      </div>

      {/* Salt particle field - overlaps moon for embedded feel */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {particles.map((particle) => (
          <SaltParticle
            key={particle.id}
            delay={particle.delay}
            x={particle.x}
            y={particle.y}
            size={particle.size}
            opacity={particle.opacity}
            duration={particle.duration}
          />
        ))}
      </div>
      
      <div className="container-narrow relative z-20 section-padding pt-32 md:pt-40">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/70 text-sm font-medium mb-8 animate-fade-up backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-white/60" />
            <span>We set up AI voice agents that increase your team's efficiency by 90%</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-up text-balance" style={{ animationDelay: "0.1s" }}>
            Tooth Pain Doesn't Wait
            <br />
            <span className="text-white/80">for Office Hours</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-xl animate-fade-up text-balance" style={{ animationDelay: "0.2s" }}>
            Saltpilot helps you set up an AI voice assistant for your dental clinic that answers patient calls 24/7, responds to common queries, and books appointments, no call goes unanswered.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button
              asChild
              className="bg-white text-black hover:bg-white/90 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              size="xl"
            >
              <a href="https://cal.com/saltpilot/45min" target="_blank" rel="noreferrer">
                Book a Meeting
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
          
          <p className="text-sm text-white/40 mt-8 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            24/7 coverage for dental clinics
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
