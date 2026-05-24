import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[hsl(0_0%_3%)] border-b border-white/5">
      <div className="container-wide px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-semibold text-white">Saltpilot</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-sm text-white/50 hover:text-white transition-colors">
              How it works
            </a>
            <a href="#benefits" className="text-sm text-white/50 hover:text-white transition-colors">
              Benefits
            </a>
            <a href="#use-cases" className="text-sm text-white/50 hover:text-white transition-colors">
              Use cases
            </a>
            <a href="#pricing" className="text-sm text-white/50 hover:text-white transition-colors">
              Pricing
            </a>
          </nav>

          <a href="https://cal.com/saltpilot/45min" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="default">
              Book a Meeting
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
