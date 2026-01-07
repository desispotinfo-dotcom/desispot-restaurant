import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-contact-title">
            Visit Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Come experience the authentic flavors of India
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 text-center hover-elevate">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3" data-testid="text-address-title">Location</h3>
            <p className="text-muted-foreground" data-testid="text-address">
              123 Ashburn Village Blvd<br />
              Ashburn, VA 20147
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => console.log("Get directions")}
              data-testid="button-get-directions"
            >
              Get Directions
            </Button>
          </Card>

          <Card className="p-8 text-center hover-elevate">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-chart-2/10 mb-4">
              <Clock className="h-8 w-8 text-chart-2" />
            </div>
            <h3 className="text-xl font-semibold mb-3" data-testid="text-hours-title">Hours</h3>
            <div className="text-muted-foreground space-y-2" data-testid="text-hours">
              <p>Monday - Thursday: 11:30 AM - 9:30 PM</p>
              <p>Friday - Saturday: 11:30 AM - 10:00 PM</p>
              <p>Sunday: 12:00 PM - 9:00 PM</p>
            </div>
          </Card>

          <Card className="p-8 text-center hover-elevate">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-chart-3/10 mb-4">
              <Phone className="h-8 w-8 text-chart-3" />
            </div>
            <h3 className="text-xl font-semibold mb-3" data-testid="text-contact-info-title">Contact</h3>
            <div className="text-muted-foreground space-y-2">
              <p data-testid="text-phone">571-561-9360</p>
              <p data-testid="text-email">info@desispot.com</p>
            </div>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => console.log("Call now")}
              data-testid="button-call-now"
            >
              Call Now
            </Button>
          </Card>
        </div>

        <Card className="overflow-hidden h-96">
          <div className="w-full h-full bg-muted flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground" data-testid="text-map-placeholder">
                Map integration would display here
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
