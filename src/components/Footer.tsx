import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const PrivacyContent = () => (
  <div className="text-sm text-muted-foreground space-y-4">
    <p>
      Saltpilot collects information you provide when booking a meeting or contacting us, including your name, phone number, and email address.
    </p>
    <p>
      We use this information only to provide our AI voice agent service and communicate with you about your account. We do not sell your personal information to third parties.
    </p>
    <p>
      Call recordings may be stored to improve the quality of your AI voice agent. You may request deletion of your data at any time by emailing{" "}
      <a href="mailto:anupam@saltpilot.com" className="text-foreground hover:underline">
        anupam@saltpilot.com
      </a>.
    </p>
  </div>
);

const TermsContent = () => (
  <div className="text-sm text-muted-foreground space-y-4">
    <div>
      <p className="font-semibold text-foreground mb-1">Setup Fee</p>
      <p>The one-time setup fee of $1,500 is non-refundable once the onboarding process has begun.</p>
    </div>
    <div>
      <p className="font-semibold text-foreground mb-1">Monthly Subscription</p>
      <p>Monthly fees are billed in advance. You may cancel at any time with 30 days written notice.</p>
    </div>
    <div>
      <p className="font-semibold text-foreground mb-1">Usage</p>
      <p>Your plan includes up to 1,000 minutes per month. Additional minutes are billed separately at the prevailing rate.</p>
    </div>
    <div>
      <p className="font-semibold text-foreground mb-1">Service</p>
      <p>Saltpilot will make reasonable efforts to maintain uptime and quality. We are not liable for interruptions caused by third-party providers.</p>
    </div>
    <div>
      <p className="font-semibold text-foreground mb-1">Governing Law</p>
      <p>These terms are governed by the applicable laws of the jurisdiction in which services are provided.</p>
    </div>
  </div>
);

const ContactContent = () => (
  <div className="text-sm text-muted-foreground space-y-4">
    <p>Have questions? We would love to hear from you.</p>
    <div>
      <p className="font-semibold text-foreground mb-1">Email</p>
      <a href="mailto:anupam@saltpilot.com" className="text-foreground hover:underline">
        anupam@saltpilot.com
      </a>
    </div>
    <div>
      <p className="font-semibold text-foreground mb-1">Book a call</p>
      <a
        href="https://cal.com/saltpilot/45min"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:underline"
      >
        cal.com/saltpilot/45min
      </a>
    </div>
  </div>
);

const Footer = () => {
  const [open, setOpen] = useState<"privacy" | "terms" | "contact" | null>(null);

  return (
    <>
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
              <button
                onClick={() => setOpen("privacy")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy
              </button>
              <button
                onClick={() => setOpen("terms")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms
              </button>
              <button
                onClick={() => setOpen("contact")}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </nav>

            <p className="text-sm text-muted-foreground text-center md:text-right">
              We set up AI voice agents that increase your team's efficiency by 90%.
            </p>
          </div>
        </div>
      </footer>

      <Dialog open={open === "privacy"} onOpenChange={() => setOpen(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Privacy Policy</DialogTitle>
          </DialogHeader>
          <PrivacyContent />
        </DialogContent>
      </Dialog>

      <Dialog open={open === "terms"} onOpenChange={() => setOpen(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Terms of Service</DialogTitle>
          </DialogHeader>
          <TermsContent />
        </DialogContent>
      </Dialog>

      <Dialog open={open === "contact"} onOpenChange={() => setOpen(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contact</DialogTitle>
          </DialogHeader>
          <ContactContent />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
