import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, MessageCircle, Mail } from "lucide-react";
import logoImage from "@assets/download_1758464627960.png";

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup submitted');
    // TODO: Handle newsletter signup
  };

  const handleSocialClick = (platform: string) => {
    console.log(`Opening ${platform}`);
    // TODO: Open social media links
  };

  const quickLinks = [
    { name: "Age Calculator", href: "#" },
    { name: "BMI Calculator", href: "#" },
    { name: "Loan Calculator", href: "#" },
    { name: "Percentage Calculator", href: "#" },
    { name: "Word Counter", href: "#" },
    { name: "Unit Converter", href: "#" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Disclaimer", href: "#" },
    { name: "Sitemap", href: "#" }
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logoImage} 
                alt="CalcHub Tools" 
                className="h-8 w-8"
              />
              <div className="flex flex-col">
                <span className="font-semibold">CalcHub Tools</span>
                <span className="text-xs text-muted-foreground">Smart Calculators</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your go-to platform for professional online calculators and productivity tools. 
              Free, accurate, and easy to use.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Contact:</span>
              <a 
                href="mailto:calchubtools@gmail.com" 
                className="text-sm text-primary hover:text-primary/80"
                data-testid="contact-email"
              >
                calchubtools@gmail.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Popular Tools</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`footer-tool-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal & Support</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`footer-legal-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Get the latest tools and tips delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email"
                data-testid="newsletter-input"
              />
              <Button type="submit" size="sm" className="w-full" data-testid="newsletter-submit">
                <Mail className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
            </form>
            
            {/* Social Links */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSocialClick('Facebook')}
                data-testid="social-facebook"
                className="h-8 w-8"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSocialClick('Twitter')}
                data-testid="social-twitter"
                className="h-8 w-8"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSocialClick('LinkedIn')}
                data-testid="social-linkedin"
                className="h-8 w-8"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleSocialClick('WhatsApp')}
                data-testid="social-whatsapp"
                className="h-8 w-8"
              >
                <MessageCircle className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* AdSense Footer Banner */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex justify-center mb-8">
            <div className="bg-muted/50 border-2 border-dashed border-muted-foreground/20 rounded-lg p-6 text-center">
              <p className="text-sm text-muted-foreground">AdSense Banner 336x280</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 CalcHub Tools. All rights reserved. Made with ❤️ for productivity enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
}