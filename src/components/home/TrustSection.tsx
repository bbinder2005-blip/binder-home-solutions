import { CheckCircle2, MapPin, Ruler, Shield, FileText, Users } from "lucide-react";

const trustItems = [
  {
    icon: MapPin,
    title: "Beratung vor Ort",
    description: "Ihr Anliegen wird direkt am Haus, an der Terrasse oder am Fenster besprochen",
  },
  {
    icon: Ruler,
    title: "Passende Anfrage",
    description: "Maße, Wünsche und offene Fragen werden so vorbereitet, dass der nächste Schritt klar ist",
  },
  {
    icon: Shield,
    title: "Verständliche Auswahl",
    description: "Sie bekommen einfache Erklärungen zu Systemen, Nutzen und möglichen Varianten",
  },
  {
    icon: FileText,
    title: "Klare Rückmeldung",
    description: "Nach Ihrer Anfrage wissen Sie, welche Informationen noch fehlen und wie es weitergeht",
  },
  {
    icon: Users,
    title: "Fester Ansprechpartner",
    description: "Sie sprechen mit einem direkten Kontakt statt mit anonymen Formularwegen",
  },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Warum persönliche Fachberatung?
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Schnell verstehen, was möglich ist, welche Lösung passt und welcher nächste Schritt sinnvoll ist.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="bg-card p-6 rounded-lg shadow-sm card-hover border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
