import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_section_background_d83f1b8e.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
      
      <div className="container relative px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight" data-testid="hero-title">
                Smart Online
                <br />
                <span className="text-primary">Calculators & Tools</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl" data-testid="hero-description">
                Access 50+ professional calculators for finance, health, education, and productivity. 
                Get instant, accurate results with our free, user-friendly tools.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" data-testid="cta-explore">
                Explore Tools
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" data-testid="cta-learn-more">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-primary" />
                <span>100% Free & Secure</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="h-4 w-4 text-primary" />
                <span>Instant Results</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4 text-primary" />
                <span>Trusted by Thousands</span>
              </div>
            </div>
          </div>

          {/* Featured Calculator Preview */}
          <div className="relative">
            <div className="bg-card/50 backdrop-blur border rounded-lg p-6 shadow-lg">
              <h3 className="font-semibold mb-4" data-testid="featured-calculator-title">Quick BMI Calculator</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Height (cm)</label>
                    <input 
                      type="number" 
                      placeholder="170" 
                      className="w-full p-2 border rounded mt-1 bg-background"
                      data-testid="input-height"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Weight (kg)</label>
                    <input 
                      type="number" 
                      placeholder="70" 
                      className="w-full p-2 border rounded mt-1 bg-background"
                      data-testid="input-weight"
                    />
                  </div>
                </div>
                <Button className="w-full" data-testid="calculate-bmi">
                  Calculate BMI
                </Button>
                <div className="text-center p-3 bg-primary/10 rounded text-primary font-semibold">
                  BMI: 24.2 (Normal)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AdSense Banner Placeholder */}
      <div className="container px-4 pb-8">
        <div className="flex justify-center">
          <div className="bg-muted/50 border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 text-center">
            <p className="text-sm text-muted-foreground">AdSense Banner 728x90</p>
          </div>
        </div>
      </div>
    </section>
  );
}