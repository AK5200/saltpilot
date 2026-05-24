import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#benefits", label: "Benefits" },
  { href: "#use-cases", label: "Use cases" },
  { href: "#pricing", label: "Pricing" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(0_0%_3%)] border-b border-white/5">
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-semibold text-white">Saltpilot</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/50 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a href="https://cal.com/saltpilot/45min" target="_blank" rel="noopener noreferrer" className="hidden md:block">
            <Button variant="hero" size="default">Book a Meeting</Button>
          </a>

          {/* Mobile: hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-white/70 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[hsl(0_0%_4%)] border-t border-white/5 px-4 py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-white/60 hover:text-white py-3 px-2 rounded-lg hover:bg-white/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://cal.com/saltpilot/45min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2"
            onClick={() => setOpen(false)}
          >
            <Button variant="hero" size="default" className="w-full">Book a Meeting</Button>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
