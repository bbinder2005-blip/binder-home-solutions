import { Button } from "@/components/ui/button";
import { CalendarCheck, Home, Mail } from "lucide-react";
import {
  bookingSectionPath,
  businessEmail,
  calendlyHomeUrl,
  calendlyPhoneUrl,
  isExternalUrl,
} from "@/config/contact";

export function CTASection() {
  const phoneBookingHref = calendlyPhoneUrl || bookingSectionPath;
  const homeBookingHref = calendlyHomeUrl || bookingSectionPath;
  const phoneBookingTarget = isExternalUrl(phoneBookingHref) ? "_blank" : undefined;
  const homeBookingTarget = isExternalUrl(homeBookingHref) ? "_blank" : undefined;

  return (
    <section className="section-padding bg-accent">
      <div className="container-width text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-accent-foreground mb-4">
          Beratungstermin einfach buchen
        </h2>
        <p className="font-body text-accent-foreground/80 max-w-2xl mx-auto mb-8">
          Erst kurz telefonisch klären, danach den passenden Haustermin vorbereiten.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="secondary"
            size="xl"
            className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
            asChild
          >
            <a href={phoneBookingHref} target={phoneBookingTarget} rel={phoneBookingTarget ? "noopener noreferrer" : undefined} className="flex items-center gap-2">
              <CalendarCheck className="w-5 h-5" />
              Telefontermin buchen
            </a>
          </Button>
          <Button
            variant="secondary"
            size="xl"
            className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
            asChild
          >
            <a
              href={homeBookingHref}
              target={homeBookingTarget}
              rel={homeBookingTarget ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              Haustermin vorbereiten
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
