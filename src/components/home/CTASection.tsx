import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail } from "lucide-react";

export function CTASection() {
  const whatsappNumber = "4915111073043";
  const whatsappMessage = encodeURIComponent("Hallo, ich interessiere mich für eine kostenlose Fachberatung.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="section-padding bg-accent">
      <div className="container-width text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-accent-foreground mb-4">
          Lassen Sie sich jetzt kostenlos beraten
        </h2>
        <p className="font-body text-accent-foreground/80 max-w-2xl mx-auto mb-8">
          Unverbindliche Fachberatung vor Ort in Brandenburg und Berlin. 
          Ich freue mich auf Ihre Anfrage!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="secondary"
            size="xl"
            className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
            asChild
          >
            <a href="tel:+4915111073043" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              0151 11073043
            </a>
          </Button>
          <Button
            variant="whatsapp"
            size="xl"
            asChild
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </Button>
          <Button
            variant="secondary"
            size="xl"
            className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
            asChild
          >
            <a href="mailto:info@fachberatung-binder.de" className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              E-Mail schreiben
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
