import { useRef } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PopularDishes from "@/components/PopularDishes";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import ReservationSection from "@/components/ReservationSection";
import Footer from "@/components/Footer";
import WavyDivider from "@/components/WavyDivider";

export default function Home() {
  const menuRef = useRef<HTMLDivElement>(null);
  const reservationsRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: string) => {
    if (section === "menu" && menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "reservations" && reservationsRef.current) {
      reservationsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={handleNavigate} />
      <HeroSection onNavigate={handleNavigate} />
      
      <PopularDishes />

      <div ref={menuRef}>
        <MenuSection />
      </div>

      <AboutSection />

      <div className="relative bg-primary">
        <WavyDivider flip={true} color="hsl(var(--background))" />
        <div ref={reservationsRef}>
          <ReservationSection />
        </div>
        <WavyDivider color="hsl(var(--background))" />
      </div>

      <Footer />
    </div>
  );
}
