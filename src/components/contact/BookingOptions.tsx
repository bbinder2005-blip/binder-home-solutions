import { CalendarCheck, Home, MessageCircle, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  businessEmail,
  calendlyHomeUrl,
  calendlyPhoneUrl,
  isExternalUrl,
  whatsappUrl,
} from "@/config/contact";

const phoneFallback = `mailto:${businessEmail}?subject=${encodeURIComponent("Telefonische Erstberatung buchen")}`;
const homeFallback = `mailto:${businessEmail}?subject=${encodeURIComponent("Haustermin nach Vorabklärung anfragen")}`;

const withTarget = (href: string) =>
  isExternalUrl(href)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

export function BookingOptions() {
  const phoneBookingHref = calendlyPhoneUrl || phoneFallback;
  const homeBookingHref = calendlyHomeUrl || phoneBookingHref || homeFallback;
  const whatsappLink = whatsappUrl("Hallo, ich habe eine kurze Rückfrage zu meinem Termin oder möchte Fotos senden.");

  return (
    <section id="termin" className="section-padding bg-background scroll-mt-24">
      <div className="container-width">
        <div className="text-center mb-12">
          <p className="font-body text-sm font-medium text-accent mb-3">
            Online-Terminbuchung
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Erst kurz telefonieren, dann gezielt vor Ort beraten
          </h2>
          <p className="font-body text-muted-foreground max-w-3xl mx-auto">
            Meine Empfehlung: zuerst ein kurzer Telefontermin. Dabei klären wir Thema, Ort, Fotos und grobe Maße.
            Ein Haustermin macht danach mehr Sinn, weil er besser vorbereitet ist und keine Zeit verloren geht.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-secondary p-6 sm:p-8 rounded-lg border border-accent shadow-sm">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <PhoneCall className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="inline-block bg-accent text-accent-foreground font-body text-xs px-2 py-1 rounded mb-3">
                  Empfohlen
                </span>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Telefonische Erstberatung
                </h3>
              </div>
            </div>
            <p className="font-body text-muted-foreground mb-6">
              Ideal als erster Schritt. Wir klären in 15 bis 20 Minuten, ob es um Sonnenschutz, Terrassendach,
              Rollladen, Dachfenster oder ein anderes Thema geht und welche Informationen noch fehlen.
            </p>
            <Button variant="accent" size="lg" className="w-full" asChild>
              <a href={phoneBookingHref} {...withTarget(phoneBookingHref)}>
                <CalendarCheck className="w-5 h-5" />
                Telefontermin online buchen
              </a>
            </Button>
          </div>

          <div className="bg-secondary p-6 sm:p-8 rounded-lg border border-border">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Home className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="inline-block bg-background text-muted-foreground font-body text-xs px-2 py-1 rounded mb-3">
                  Nach Vorabklärung
                </span>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Haustermin vor Ort
                </h3>
              </div>
            </div>
            <p className="font-body text-muted-foreground mb-6">
              Sinnvoll, wenn das Anliegen schon grob geklärt ist. Dann kann der Termin vor Ort gezielter vorbereitet
              werden, zum Beispiel mit Fotos, Maßen und dem passenden Produktbereich.
            </p>
            <Button variant="outline" size="lg" className="w-full" asChild>
              <a href={homeBookingHref} {...withTarget(homeBookingHref)}>
                <Home className="w-5 h-5" />
                {calendlyHomeUrl ? "Haustermin online buchen" : "Zuerst Telefontermin wählen"}
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-6 bg-secondary/70 p-5 rounded-lg border border-border flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div>
            <h3 className="font-display text-lg font-medium text-foreground">
              WhatsApp nur für kurze Rückfragen
            </h3>
            <p className="font-body text-sm text-muted-foreground mt-1">
              Für Fotos, persönliche Rückfragen oder Nachträge bleibt WhatsApp hilfreich. Der Hauptweg bleibt der Termin.
            </p>
          </div>
          <Button variant="outline" size="default" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-4 h-4" />
              Rückfrage senden
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
