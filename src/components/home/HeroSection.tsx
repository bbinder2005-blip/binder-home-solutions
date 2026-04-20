import { Button } from "@/components/ui/button";
import { CalendarCheck, Home } from "lucide-react";
import heroImage from "@/assets/test/terrace-alt2.jpg";
import { bookingSectionPath, businessName, calendlyPhoneUrl, isExternalUrl } from "@/config/contact";

export function HeroSection() {
  const bookingHref = calendlyPhoneUrl || bookingSectionPath;
  const bookingTarget = isExternalUrl(bookingHref) ? "_blank" : undefined;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Moderne Terrasse mit Glasdach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-width section-padding text-center lg:text-left">
        <div className="max-w-3xl mx-auto lg:mx-0">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-6 animate-fade-up">
            {businessName}
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal mt-2 text-primary-foreground/90">
              Beratung für Sonnenschutz, Terrasse und Fenster
            </span>
          </h1>
          
          <p className="font-body text-lg sm:text-xl text-primary-foreground/80 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Buchen Sie zuerst einen kurzen Telefontermin. Danach lässt sich ein Haustermin gezielt vorbereiten.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href={bookingHref} target={bookingTarget} rel={bookingTarget ? "noopener noreferrer" : undefined} className="flex items-center gap-2">
                <CalendarCheck className="w-5 h-5" />
                Telefontermin buchen
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a
                href={bookingSectionPath}
                className="flex items-center gap-2"
              >
                <Home className="w-5 h-5" />
                Ablauf ansehen
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
