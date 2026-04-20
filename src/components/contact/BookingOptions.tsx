import { useEffect, useState } from "react";
import {
  Bell,
  CalendarCheck,
  CheckCircle2,
  FileText,
  Home,
  MessageCircle,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  businessEmail,
  calendlyHomeUrl,
  calendlyPhoneUrl,
  isExternalUrl,
  whatsappUrl,
} from "@/config/contact";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const phoneFallback = `mailto:${businessEmail}?subject=${encodeURIComponent("Telefonische Erstberatung buchen")}`;
const homeFallback = `mailto:${businessEmail}?subject=${encodeURIComponent("Haustermin nach Vorabklärung anfragen")}`;

const calendlyScriptUrl = "https://assets.calendly.com/assets/external/widget.js";
const calendlyStyleUrl = "https://assets.calendly.com/assets/external/widget.css";

const processSteps = [
  {
    title: "Termin buchen",
    description: "Sie wählen den passenden freien Slot direkt im Kalender.",
  },
  {
    title: "Wir telefonieren kurz",
    description: "In 15 Minuten klären wir Thema, Ort, Fotos und nächste Schritte.",
  },
  {
    title: "Vor-Ort-Beratung",
    description: "Wenn es passt, wird der Termin vor Ort gezielt vorbereitet.",
  },
  {
    title: "Angebot erhalten",
    description: "Sie bekommen eine klare Einschätzung und den passenden Vorschlag.",
  },
];

const automationItems = [
  "Bestätigung per E-Mail",
  "Kalendereintrag ohne Doppelbuchung",
  "Erinnerung 24 Stunden vorher",
  "Zusammenfassung nach dem Gespräch",
];

const loadCalendlyWidget = () =>
  new Promise<void>((resolve, reject) => {
    if (window.Calendly) {
      resolve();
      return;
    }

    if (!document.querySelector(`link[href="${calendlyStyleUrl}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = calendlyStyleUrl;
      document.head.appendChild(link);
    }

    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${calendlyScriptUrl}"]`);
    if (existingScript) {
      existingScript.addEventListener("load", () => resolve(), { once: true });
      existingScript.addEventListener("error", () => reject(new Error("Calendly konnte nicht geladen werden.")), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.src = calendlyScriptUrl;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Calendly konnte nicht geladen werden."));
    document.body.appendChild(script);
  });

const withCalendlyParams = (url: string) => {
  try {
    const calendlyUrl = new URL(url);
    calendlyUrl.searchParams.set("hide_landing_page_details", "1");
    calendlyUrl.searchParams.set("hide_gdpr_banner", "1");
    calendlyUrl.searchParams.set("primary_color", "16a34a");
    return calendlyUrl.toString();
  } catch {
    return url;
  }
};

export function BookingOptions() {
  const phoneBookingHref = calendlyPhoneUrl || phoneFallback;
  const homeBookingHref = calendlyHomeUrl || homeFallback;
  const whatsappLink = whatsappUrl("Hallo, ich habe eine kurze Rückfrage zu meinem Termin oder möchte Fotos senden.");
  const [bookingNotice, setBookingNotice] = useState("");

  useEffect(() => {
    const handleCalendlyMessage = (event: MessageEvent) => {
      if (!event.data || typeof event.data !== "object" || !("event" in event.data)) return;

      if (event.data.event === "calendly.event_scheduled") {
        setBookingNotice(
          "Ihr Termin ist eingetragen. Sie erhalten eine Bestätigung und das Gespräch wird aufgezeichnet und zusammengefasst.",
        );
      }
    };

    window.addEventListener("message", handleCalendlyMessage);
    return () => window.removeEventListener("message", handleCalendlyMessage);
  }, []);

  const openBooking = async (href: string) => {
    if (!isExternalUrl(href)) {
      window.location.href = href;
      return;
    }

    await loadCalendlyWidget();
    window.Calendly?.initPopupWidget({ url: withCalendlyParams(href) });
  };

  return (
    <section id="termin" className="section-padding bg-background scroll-mt-24">
      <div className="container-width">
        <div className="text-center mb-12">
          <p className="font-body text-sm font-medium text-accent mb-3">
            Online-Terminbuchung
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Automatisch buchen, sauber vorbereitet beraten
          </h2>
          <p className="font-body text-muted-foreground max-w-3xl mx-auto">
            Wählen Sie den passenden Termin direkt im Kalender. Bestätigung, Erinnerung und Nachbereitung laufen
            automatisch, damit Ihr Anliegen ohne Hin und Her sauber vorbereitet wird.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="bg-secondary p-6 sm:p-8 rounded-lg border-2 border-green-600 shadow-sm">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <PhoneCall className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <span className="inline-block bg-green-600 text-white font-body text-xs px-2 py-1 rounded mb-3">
                  Option A
                </span>
                <span className="inline-block bg-accent text-accent-foreground font-body text-xs px-2 py-1 rounded mb-3 ml-2">
                  Empfohlen
                </span>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Kostenloses Telefonat (15 Min.)
                </h3>
              </div>
            </div>
            <p className="font-body text-muted-foreground mb-6">
              Der beste erste Schritt. Wir klären, worum es geht, welche Fotos oder Maße wichtig sind und ob ein
              Vor-Ort-Termin sinnvoll ist.
            </p>
            <Button
              type="button"
              size="lg"
              className="w-full bg-green-600 text-white hover:bg-green-700"
              onClick={() => openBooking(phoneBookingHref)}
            >
              <CalendarCheck className="w-5 h-5" />
              Jetzt Termin buchen
            </Button>
            <p className="font-body text-sm text-center text-muted-foreground mt-4">
              Kostenlos & unverbindlich - Wir melden uns innerhalb von 24 Stunden
            </p>
          </article>

          <article className="bg-secondary p-6 sm:p-8 rounded-lg border border-border">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Home className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="inline-block bg-background text-muted-foreground font-body text-xs px-2 py-1 rounded mb-3">
                  Option B
                </span>
                <h3 className="font-display text-2xl font-semibold text-foreground">
                  Vor-Ort-Termin vereinbaren
                </h3>
              </div>
            </div>
            <p className="font-body text-muted-foreground mb-6">
              Sinnvoll, wenn das Anliegen schon vorbereitet ist. Adresse, Interesse und Notizen werden direkt im
              Termin hinterlegt.
            </p>
            <Button
              type="button"
              size="lg"
              className="w-full bg-green-600 text-white hover:bg-green-700"
              onClick={() => openBooking(homeBookingHref)}
            >
              <Home className="w-5 h-5" />
              Jetzt Termin buchen
            </Button>
            <p className="font-body text-sm text-center text-muted-foreground mt-4">
              Kostenlos & unverbindlich - Wir melden uns innerhalb von 24 Stunden
            </p>
          </article>
        </div>

        {bookingNotice && (
          <div className="mt-6 rounded-lg border border-green-600 bg-green-50 p-5 text-green-900">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <p className="font-body text-sm">{bookingNotice}</p>
            </div>
          </div>
        )}

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6">
          <div className="bg-secondary p-6 sm:p-8 rounded-lg border border-border">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-6 h-6 text-green-700" />
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Was automatisch passiert
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {automationItems.map((item) => (
                <div key={item} className="flex items-center gap-3 font-body text-sm text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-green-700 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-lg bg-background p-4 border border-border">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="font-body text-sm text-muted-foreground">
                  Ihr Gespräch wird aufgezeichnet und zusammengefasst. Die Zusammenfassung hilft, einen Vor-Ort-Termin
                  mit Adresse, Interesse, Notizen und Lead-Status gezielt vorzubereiten.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-secondary p-6 sm:p-8 rounded-lg border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-6 h-6 text-accent" />
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Ablauf
              </h3>
            </div>
            <div className="space-y-5">
              {processSteps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-green-600 text-white flex items-center justify-center font-body text-sm font-semibold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-display font-medium text-foreground">{step.title}</h4>
                    <p className="font-body text-sm text-muted-foreground mt-1">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
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

        {!calendlyPhoneUrl && (
          <div className="mt-6 rounded-lg border border-dashed border-border bg-secondary/50 p-4">
            <p className="font-body text-sm text-muted-foreground">
              Der Kalenderbereich ist vorbereitet. Sobald der Calendly-Link hinterlegt ist, öffnen die Buttons das
              Buchungsfenster direkt als Popup.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
