import { CheckCircle2, MapPin, Ruler, Shield, FileText, Users } from "lucide-react";

const trustItems = [
  {
    icon: MapPin,
    title: "Persönliche Vor-Ort-Beratung",
    description: "Ich komme zu Ihnen nach Hause und berate Sie individuell",
  },
  {
    icon: Ruler,
    title: "Maßanfertigungen",
    description: "Jede Lösung wird exakt auf Ihre Anforderungen zugeschnitten",
  },
  {
    icon: Shield,
    title: "Qualität Made in Germany",
    description: "Überwiegend hochwertige deutsche Qualitätsprodukte",
  },
  {
    icon: FileText,
    title: "Transparente Angebote",
    description: "Faire Preise ohne versteckte Kosten",
  },
  {
    icon: Users,
    title: "Betreuung bis zur Umsetzung",
    description: "Von der Planung bis zur fertigen Installation an Ihrer Seite",
  },
];

export function TrustSection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Warum Fachberatung Binder?
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Vertrauen Sie auf persönliche Beratung und Qualität, die überzeugt.
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
