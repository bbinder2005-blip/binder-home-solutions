import { CalendarCheck, FileText, Home, Phone } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Phone,
    title: "Anfrage stellen",
    description: "Rufen Sie an, schreiben Sie per WhatsApp oder senden Sie eine kurze Nachricht",
  },
  {
    number: "02",
    icon: Home,
    title: "Bedarf klären",
    description: "Wir besprechen, ob es um Sonne, Wetter, Sichtschutz, Licht oder Sicherheit geht",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Termin abstimmen",
    description: "Der passende Zeitpunkt für Rückruf oder Beratung wird ohne langes Hin und Her geklärt",
  },
  {
    number: "04",
    icon: FileText,
    title: "Nächster Schritt",
    description: "Sie erhalten eine verständliche Empfehlung für die weitere Planung",
  },
];

export function ProcessSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            So läuft die Anfrage ab
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Weniger Hin und Her, mehr Klarheit für Ihr Hausprojekt
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <step.icon className="w-10 h-10 text-accent-foreground" />
                </div>
                <span className="font-display text-4xl font-bold text-accent/20 mb-2">
                  {step.number}
                </span>
                <h3 className="font-display text-lg font-medium text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
