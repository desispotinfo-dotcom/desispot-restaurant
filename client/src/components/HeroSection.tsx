import { Button } from "@/components/ui/button";
import WavyDivider from "./WavyDivider";

const heroImage = "/attached_assets/1_1763354412347.png";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative pt-20 bg-primary overflow-hidden">
      <WavyDivider flip={true} color="hsl(var(--background))" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left z-10">
            <p className="text-primary-foreground/90 text-lg md:text-xl mb-4 font-medium" data-testid="text-hero-tagline">
              Good Food, Good Mood
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight" data-testid="text-hero-title">
              Desi Spot
            </h1>
            <p className="text-primary-foreground/80 text-base md:text-lg mb-8 max-w-xl" data-testid="text-hero-description">
              Experience authentic flavors from Nepal and India. Every dish is crafted with passion, served with love, bringing you the taste of home.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => onNavigate("menu")}
              data-testid="button-hero-order"
              className="text-base font-semibold px-8 py-6"
            >
              ORDER NOW
            </Button>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-gradient-radial from-primary-foreground/10 to-transparent rounded-full blur-3xl"></div>
            
            <div className="relative z-10 w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-full"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-primary-foreground/20 shadow-2xl">
                <img
                  src={heroImage}
                  alt="Delicious Biryani"
                  className="w-full h-full object-cover"
                  data-testid="img-hero-food"
                />
              </div>
              
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent rounded-full opacity-60 blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary-foreground/20 rounded-full opacity-40 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      <WavyDivider color="hsl(var(--background))" />
    </section>
  );
}
