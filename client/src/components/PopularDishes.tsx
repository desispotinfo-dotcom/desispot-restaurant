import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { featuredItems } from "@/data/menuData";
import ImageModal from "@/components/ImageModal";

export default function PopularDishes() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const getColorForDish = (index: number) => {
    const colors = [
      { gradient: 'from-primary/20 to-primary/5', border: 'border-primary/40', text: 'group-hover:text-primary', price: 'text-primary' },
      { gradient: 'from-accent/20 to-accent/5', border: 'border-accent/40', text: 'group-hover:text-accent', price: 'text-accent' },
      { gradient: 'from-destructive/20 to-destructive/5', border: 'border-destructive/40', text: 'group-hover:text-destructive', price: 'text-destructive' },
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="popular-dishes" className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-lg mb-2 block" data-testid="text-popular-label">
            Best Food
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground" data-testid="text-popular-title">
            Popular Food Items
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {featuredItems.map((dish, index) => {
            const colors = getColorForDish(index);
            return (
              <div
                key={dish.id}
                className="flex flex-col items-center text-center group"
                data-testid={`card-dish-${index + 1}`}
              >
                <div 
                  className="relative mb-6 w-48 h-48 md:w-56 md:h-56 cursor-pointer"
                  onClick={() => setSelectedImage({ src: dish.image, alt: dish.name })}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} rounded-full blur-xl group-hover:scale-110 transition-transform`}></div>
                  <div className={`relative w-full h-full rounded-full overflow-hidden border-4 ${colors.border} shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105`}>
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-fill"
                      data-testid={`img-dish-${index + 1}`}
                    />
                  </div>
                </div>

                <h3 className={`text-xl md:text-2xl font-bold text-foreground mb-2 ${colors.text} transition-colors`} data-testid={`text-dish-name-${index + 1}`}>
                  {dish.name}
                </h3>
                
                <p className="text-sm md:text-base text-muted-foreground mb-3 max-w-xs" data-testid={`text-dish-description-${index + 1}`}>
                  {dish.description}
                </p>
                
                <span className={`text-xl md:text-2xl font-bold ${colors.price}`} data-testid={`text-dish-price-${index + 1}`}>
                  {dish.price}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <ImageModal
        isOpen={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || ''}
        imageAlt={selectedImage?.alt || ''}
      />
    </section>
  );
}
