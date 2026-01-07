import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "@assets/LOGO_1763343010502.png";

interface HeaderProps {
  onNavigate?: (section: string) => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Menu", "Reservations", "Contact"];

  const handleNavClick = (item: string) => {
    console.log(`Navigate to ${item}`);
    onNavigate?.(item.toLowerCase());
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer hover-elevate active-elevate-2 rounded-md p-2 -ml-2" onClick={() => handleNavClick("Home")}>
            <img src={logoImage} alt="DesiSpot Logo" className="h-12 w-12" data-testid="img-logo" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground" data-testid="text-logo-name">DesiSpot</span>
              <span className="text-xs text-muted-foreground">Homemade Taste</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item}
                variant="ghost"
                onClick={() => handleNavClick(item)}
                data-testid={`link-nav-${item.toLowerCase()}`}
                className="text-base"
              >
                {item}
              </Button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => console.log("Order online clicked")}
              data-testid="button-order-online"
              className="text-base"
            >
              Order Online
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <Button
                key={item}
                variant="ghost"
                onClick={() => handleNavClick(item)}
                data-testid={`link-nav-mobile-${item.toLowerCase()}`}
                className="justify-start text-base"
              >
                {item}
              </Button>
            ))}
            <Button
              onClick={() => console.log("Order online clicked")}
              data-testid="button-order-online-mobile"
              className="text-base"
            >
              Order Online
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
