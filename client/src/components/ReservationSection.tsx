import { useEffect } from "react";
import { Calendar } from "lucide-react";

export default function ReservationSection() {
  useEffect(() => {
    // Load the form embed script
    const script = document.createElement('script');
    script.src = 'https://api.projectelevate.biz/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://api.projectelevate.biz/js/form_embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="reservations" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="mb-6">
              <span className="text-primary-foreground/90 font-semibold text-lg" data-testid="text-reservation-label">
                Catering Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6" data-testid="text-reservation-title">
              Request Catering
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Let us cater your next event with authentic Indian flavors. From corporate events to 
              private parties, we bring the finest cuisine right to you.
            </p>
            <div className="flex items-center gap-4 text-primary-foreground/80">
              <Calendar className="h-8 w-8 text-accent" />
              <div>
                <p className="font-semibold text-primary-foreground">Open Daily</p>
                <p className="text-sm">11:30 AM - 10:00 PM</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 bg-card rounded-lg overflow-hidden min-h-[600px]">
            <iframe
              src="https://api.projectelevate.biz/widget/form/rwZjJlBzPG35ZUY1cyzp"
              style={{ width: '100%', height: '100%', minHeight: '600px', border: 'none', borderRadius: '3px' }}
              id="inline-rwZjJlBzPG35ZUY1cyzp"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Catering Services Request"
              data-height="598"
              data-layout-iframe-id="inline-rwZjJlBzPG35ZUY1cyzp"
              data-form-id="rwZjJlBzPG35ZUY1cyzp"
              title="Catering Services Request"
              data-testid="iframe-catering-form"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
