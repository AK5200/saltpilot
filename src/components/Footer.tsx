const Footer = () => {
  return (
    <footer className="section-padding py-12 md:py-16 border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-semibold text-foreground">Saltpilot</span>
          </div>
          
          <nav className="flex items-center gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </nav>
          
          <p className="text-sm text-muted-foreground text-center md:text-right">
            We set up AI voice agents that increase your team's efficiency by 90%.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
