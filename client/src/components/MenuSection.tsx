import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menuCategories, getMenuItemsByCategory } from "@/data/menuData";
import ImageModal from "@/components/ImageModal";

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState("momo");
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const getCategoryColor = (index: number) => {
    const colors = ['primary', 'accent', 'destructive'];
    return colors[index % colors.length];
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-muted-foreground font-semibold text-lg mb-2 block" data-testid="text-menu-label">
            Our Special Menu
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground" data-testid="text-menu-title">
            Explore Our Menu
          </h2>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="overflow-x-auto pb-4 mb-8">
            <TabsList className="inline-flex w-auto min-w-full gap-2 bg-card justify-start md:justify-center flex-nowrap p-2 rounded-lg shadow-md">
              {menuCategories.map((category, index) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="text-sm md:text-base whitespace-nowrap px-6 py-3 rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md text-foreground hover-elevate transition-all"
                  data-testid={`tab-${category.id}`}
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {menuCategories.map((category, catIndex) => {
            const items = getMenuItemsByCategory(category.id);
            return (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {items.map((item, index) => {
                    const colorClass = getCategoryColor(index);
                    return (
                      <div
                        key={item.id}
                        className="flex flex-col items-center text-center group hover-elevate bg-card p-6 rounded-xl transition-all"
                        data-testid={`card-menu-item-${item.id}`}
                      >
                        <div 
                          className="relative mb-4 w-40 h-40 cursor-pointer"
                          onClick={() => setSelectedImage({ src: item.image, alt: item.name })}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${
                            colorClass === 'primary' ? 'from-primary/20 to-primary/5' :
                            colorClass === 'accent' ? 'from-accent/20 to-accent/5' :
                            'from-destructive/20 to-destructive/5'
                          } rounded-full blur-lg group-hover:scale-110 transition-transform`}></div>
                          <div className={`relative w-full h-full rounded-full overflow-hidden border-4 ${
                            colorClass === 'primary' ? 'border-primary/30' :
                            colorClass === 'accent' ? 'border-accent/30' :
                            'border-destructive/30'
                          } shadow-lg group-hover:shadow-xl transition-all group-hover:scale-105`}>
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-fill"
                              data-testid={`img-menu-item-${item.id}`}
                            />
                          </div>
                        </div>

                        <h3 className={`text-lg font-bold mb-2 transition-colors min-h-[3.5rem] flex items-center ${
                          colorClass === 'primary' ? 'text-foreground group-hover:text-primary' :
                          colorClass === 'accent' ? 'text-foreground group-hover:text-accent' :
                          'text-foreground group-hover:text-destructive'
                        }`} data-testid={`text-menu-item-name-${item.id}`}>
                          {item.name}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2" data-testid={`text-menu-item-description-${item.id}`}>
                          {item.description}
                        </p>
                        
                        <span className={`text-xl font-bold ${
                          colorClass === 'primary' ? 'text-primary' :
                          colorClass === 'accent' ? 'text-accent' :
                          'text-destructive'
                        }`} data-testid={`text-menu-item-price-${item.id}`}>
                          {item.price}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
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
