import { Link } from "react-router-dom";
import { CalendarCheck, CheckCircle2, FileText, Home, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";

const nextSteps = [
  {
    icon: PhoneCall,
    title: "Termin ist eingetragen",
    description: "Ihr Termin wurde erfolgreich uebernommen und vorbereitet.",
  },
  {
    icon: CalendarCheck,
    title: "Bestaetigung folgt automatisch",
    description: "Sie erhalten eine Terminbestaetigung und die wichtigsten Infos per E-Mail.",
  },
  {
    icon: FileText,
    title: "Gespräch wird sauber vorbereitet",
    description: "Thema, Notizen und naechste Schritte koennen gezielt vorbereitet werden.",
  },
  {
    icon: Home,
    title: "Vor-Ort-Termin bei Bedarf",
    description: "Wenn es sinnvoll ist, wird anschliessend ein passender Termin vor Ort abgestimmt.",
  },
];

export default function TerminBestaetigt() {
  return (
    <Layout>
      <div className="bg-background pb-16">
        <section className="section-padding">
          <div className="container-width max-w-4xl">
            <div className="rounded-lg border border-green-200 bg-green-50 p-8 sm:p-10">
              <div className="flex items-center gap-3 text-green-700 mb-5">
                <CheckCircle2 className="w-8 h-8" />
                <p className="font-body text-sm font-medium uppercase tracking-[0.12em]">
                  Buchung bestaetigt
                </p>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl font-semibold text-foreground leading-tight">
                Vielen Dank. Ihr Termin wurde erfolgreich uebernommen.
              </h1>

              <p className="font-body text-lg text-muted-foreground mt-5 max-w-2xl">
                Sie erhalten in Kuerze eine Bestaetigung. Das Gespraech wird vorbereitet, damit wir Ihr Anliegen direkt
                strukturiert und persoenlich durchgehen koennen.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Button size="lg" asChild>
                  <Link to="/kontakt">Zur Kontaktseite</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/leistungen">Leistungen ansehen</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
              {nextSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <article key={step.title} className="rounded-lg border border-border bg-secondary p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-green-700" />
                      </div>
                      <div>
                        <h2 className="font-display text-xl font-semibold text-foreground">{step.title}</h2>
                        <p className="font-body text-muted-foreground mt-2">{step.description}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
