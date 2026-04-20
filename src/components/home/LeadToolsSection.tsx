import { CalendarCheck, MailCheck, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookingSectionPath, calendlyPhoneUrl, isExternalUrl } from "@/config/contact";

const tools = [
  {
    icon: UsersRound,
    title: "Telefontermin wählen",
    description: "Der erste Termin klärt Thema, Ort, Fotos und grobe Maße, bevor Zeit vor Ort eingeplant wird.",
  },
  {
    icon: MailCheck,
    title: "Haustermin vorbereiten",
    description: "Wenn es passt, wird der Vor-Ort-Termin gezielt vorbereitet statt spontan geraten.",
  },
  {
    icon: CalendarCheck,
    title: "Nachfragen sammeln",
    description: "Weitere Fragen, Fotos oder Details können nach dem Termin ergänzt werden.",
  },
];

export function LeadToolsSection() {
  const bookingHref = calendlyPhoneUrl || bookingSectionPath;
  const bookingTarget = isExternalUrl(bookingHref) ? "_blank" : undefined;

  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <div>
            <p className="font-body text-sm font-medium text-accent mb-3">
              Schnell zur Beratung
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Telefontermin buchen, Haustermin besser vorbereiten
            </h2>
            <p className="font-body text-muted-foreground mb-6">
              Die Kontaktstrecke beginnt bewusst mit einem kurzen Telefontermin. So ist schnell klar,
              ob ein Haustermin sinnvoll ist und welche Informationen vorher gebraucht werden.
            </p>
            <Button variant="accent" size="lg" asChild>
              <a href={bookingHref} target={bookingTarget} rel={bookingTarget ? "noopener noreferrer" : undefined}>
                Telefontermin online buchen
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
