import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { businessEmail, businessPhone, businessPhoneLabel, whatsappUrl } from "@/config/contact";

export function CTASection() {
  const whatsappLink = whatsappUrl("Hallo, ich möchte eine Beratung für mein Hausprojekt anfragen.");

  return (
    <section className="section-padding bg-accent">
      <div className="container-width text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-accent-foreground mb-4">
          Beratung einfach anfragen
        </h2>
        <p className="font-body text-accent-foreground/80 max-w-2xl mx-auto mb-8">
          Kurz schildern, worum es geht. Ich melde mich mit dem passenden nächsten Schritt für Berlin oder Brandenburg.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="secondary"
            size="xl"
            className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
            asChild
          >
            <a href={`tel:${businessPhone}`} className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              {businessPhoneLabel}
            </a>
          </Button>
          <Button
            variant="whatsapp"
            size="xl"
            asChild
          >
            <a
              href={whatsappLink}
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
            <a href={`mailto:${businessEmail}`} className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              E-Mail schreiben
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
