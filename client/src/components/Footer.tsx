import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter } from "lucide-react";
import logoImage from "@assets/LOGO_1763343010502.png";

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription submitted");
  };

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="DesiSpot" className="h-12 w-12" data-testid="img-footer-logo" />
              <div>
                <span className="text-xl font-bold text-foreground">DesiSpot</span>
                <p className="text-sm text-muted-foreground">Homemade Taste</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">
              Authentic Indian cuisine in the heart of Ashburn, Virginia.
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => console.log("Facebook")}
                data-testid="button-social-facebook"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => console.log("Instagram")}
                data-testid="button-social-instagram"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => console.log("Twitter")}
                data-testid="button-social-twitter"
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4" data-testid="text-footer-quick-links">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Menu", "Catering"].map((link) => (
                <li key={link}>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto font-normal text-muted-foreground hover:text-foreground"
                    onClick={() => console.log(`Navigate to ${link}`)}
                    data-testid={`link-footer-${link.toLowerCase().replace(" ", "-")}`}
                  >
                    {link}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4" data-testid="text-footer-hours">Hours & Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Mon-Thu: 11:30 AM - 9:30 PM</p>
              <p>Fri-Sat: 11:30 AM - 10:00 PM</p>
              <p>Sun: 12:00 PM - 9:00 PM</p>
              <p className="pt-2">571-561-9360</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4" data-testid="text-footer-location">Location</h3>
            <p className="text-muted-foreground">
              DesiSpot Ashburn<br />
              Ashburn, Virginia
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p data-testid="text-copyright">
            &copy; 2025 DesiSpot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
