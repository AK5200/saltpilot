import { useMemo, useState } from "react";
import type React from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SaltParticle = ({
  delay,
  x,
  y,
  size,
  opacity,
  duration,
}: {
  delay: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  duration: number;
}) => (
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
      "--particle-opacity": opacity,
    } as React.CSSProperties}
  />
);

const SeeItInAction = () => {
  const [websiteUrl, setWebsiteUrl] = useState("");

  const particles = useMemo(
    () =>
      Array.from({ length: 160 }, (_, i) => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const densityFactor = 0.7 + Math.sin(x * 0.03) * 0.3;
        const size = 1 + Math.random() * 2.5 * densityFactor;
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
      }),
    [],
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!websiteUrl) return;
    alert(`Thanks! We'll reach out about: ${websiteUrl}`);
    setWebsiteUrl("");
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[hsl(0_0%_3%)] text-white">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-bl from-[hsl(0_0%_6%)] via-[hsl(0_0%_3%)] to-[hsl(0_0%_2%)]" />

      {/* Subtle moon element for depth */}
      <div
        className="pointer-events-none absolute right-[-15%] top-1/2 aspect-square w-[50%] -translate-y-1/2"
        style={{
          background: `
            radial-gradient(circle at 30% 30%, hsl(0 0% 28%) 0%, hsl(0 0% 20%) 30%, hsl(0 0% 14%) 60%, hsl(0 0% 8%) 100%)
          `,
          borderRadius: "50%",
          boxShadow: `
            inset -20px -20px 60px rgba(0, 0, 0, 0.7),
            inset 10px 10px 40px rgba(255, 255, 255, 0.05),
            0 0 100px rgba(255, 255, 255, 0.06),
            0 0 200px rgba(255, 255, 255, 0.03)
          `,
        }}
      >
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

      {/* Particle field */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {particles.map((particle) => (
          <SaltParticle key={particle.id} {...particle} />
        ))}
      </div>

      {/* Content */}
      <Header />
      <div className="relative z-20 flex min-h-screen items-center justify-center px-6 pt-28 pb-12">
        <div className="w-full max-w-2xl text-center space-y-6 bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold text-white">See it in action</h1>
            <p className="text-sm text-white/70">Share your website and we’ll get back to you with a live walkthrough.</p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Input
              type="url"
              placeholder="Enter your website URL"
              value={websiteUrl}
              onChange={(event) => setWebsiteUrl(event.target.value)}
              className="h-12 text-base sm:text-lg bg-white/90 text-black placeholder:text-gray-500"
              required
            />
            <Button type="submit" className="h-12 px-6 text-base" variant="secondary">
              Continue
            </Button>
          </form>

          <p className="text-sm text-white/70">Don&apos;t have a website? Book a call and we’ll guide you.</p>
        </div>
      </div>
    </div>
  );
};

export default SeeItInAction;
