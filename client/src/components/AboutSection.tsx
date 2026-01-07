import { Card } from "@/components/ui/card";
import { Award, ChefHat } from "lucide-react";
import restaurantInterior from "@assets/generated_images/Restaurant_interior_ambiance_f9a55ea8.png";
import chefCooking from "@assets/generated_images/Chef_cooking_in_tandoor_e99bf15c.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src={restaurantInterior}
                alt="Restaurant Interior"
                className="rounded-2xl w-full h-64 object-cover shadow-lg"
                data-testid="img-restaurant-interior"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src={chefCooking}
                alt="Chef Cooking"
                className="rounded-2xl w-full h-64 object-cover shadow-lg"
                data-testid="img-chef-cooking"
              />
            </div>
          </div>

          <div>
            <div className="mb-4">
              <span className="text-primary font-semibold text-lg" data-testid="text-about-label">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-about-title">
              Variety of Flavors from Indian Cuisine
            </h2>
            <p className="text-lg text-muted-foreground mb-8" data-testid="text-about-description">
              Every dish is not just prepared, it's crafted with the utmost precision and a deep 
              understanding of flavor harmony. Located in the heart of Ashburn, Virginia, we bring 
              authentic Indian flavors to your table with recipes passed down through generations.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <Card className="p-6 hover-elevate">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2" data-testid="text-feature-authentic">
                      Authentic Recipes
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Traditional flavors using time-honored cooking methods
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-elevate">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-chart-2/10">
                    <ChefHat className="h-6 w-6 text-chart-2" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2" data-testid="text-feature-chefs">
                      Expert Chefs
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Experienced hands crafting each dish with passion
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-8 rounded-2xl overflow-hidden border border-border h-[450px] w-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3099.655767821828!2d-77.4836486!3d39.0231653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b63ed0be402691%3A0xcd5ff00437eddc4f!2sLotte%20Plaza%20Market%20-%20Ashburn!5e0!3m2!1sen!2sus!4v1767740824240!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                data-testid="iframe-google-map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
