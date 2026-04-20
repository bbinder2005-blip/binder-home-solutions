import { CalendarCheck, MailCheck, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { businessEmail, calendlyUrl } from "@/config/contact";

const tools = [
  {
    icon: UsersRound,
    title: "Anfrage erfassen",
    description: "Ihre Nachricht landet gesammelt in der Kontaktstrecke und kann im CRM nachverfolgt werden.",
  },
  {
    icon: MailCheck,
    title: "Antwort vorbereiten",
    description: "Nach der Anfrage folgt eine klare Rückmeldung mit den nächsten Schritten.",
  },
  {
    icon: CalendarCheck,
    title: "Termin einfacher finden",
    description: "Telefontermin oder Vor-Ort-Beratung lassen sich ohne langes Hin und Her abstimmen.",
  },
];

export function LeadToolsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <div>
            <p className="font-body text-sm font-medium text-accent mb-3">
              Schnell zur Beratung
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Anfrage stellen, Rückmeldung bekommen, Termin klären
            </h2>
            <p className="font-body text-muted-foreground mb-6">
              Die Kontaktstrecke ist auf einfache Wörter und klare Schritte ausgelegt. So wissen Interessenten sofort,
              ob es um Beratung für Sonnenschutz, Terrassendach, Markise, Rollladen oder Dachfenster geht.
            </p>
            <Button variant="accent" size="lg" asChild>
              <a href={calendlyUrl || `mailto:${businessEmail}?subject=Terminwunsch%20Beratung`}>
                {calendlyUrl ? "Termin online buchen" : "Termin anfragen"}
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-5">
            {tools.map((tool) => (
              <div key={tool.title} className="bg-secondary p-6 rounded-lg border border-border">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <tool.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-medium text-foreground mb-2">
                  {tool.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {tool.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
