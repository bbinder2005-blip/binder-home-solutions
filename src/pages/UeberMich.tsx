import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { CheckCircle2, Heart, Target, Users } from "lucide-react";
const values = [{
  icon: Heart,
  title: "Persönlich",
  description: "Direkte Beratung von Mensch zu Mensch, ohne Callcenter oder Warteschleifen"
}, {
  icon: Target,
  title: "Bedarfsorientiert",
  description: "Ich empfehle nur Lösungen, die wirklich zu Ihren Anforderungen passen"
}, {
  icon: Users,
  title: "Verlässlich",
  description: "Von der ersten Idee bis zur fertigen Umsetzung bin ich Ihr fester Ansprechpartner"
}];
const UeberMich = () => {
  return <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary pt-32">
        <div className="container-width text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-primary-foreground mb-4">
            Über mich
          </h1>
          <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Persönliche Fachberatung für Ihr Zuhause
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Unser Team
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Persönliche Beratung von erfahrenen Fachberatern
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Benedikt Binder */}
            <div className="bg-secondary rounded-lg p-8 text-center">
              <div className="w-24 h-24 bg-accent/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="font-display text-3xl text-accent">BB</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Benedikt Binder
              </h3>
              <p className="font-body text-muted-foreground mt-2">
                Fachberater für Sonnen- und Wetterschutz
              </p>
            </div>

            {/* Maximilian Größer */}
            <div className="bg-secondary rounded-lg p-8 text-center">
              <div className="w-24 h-24 bg-accent/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="font-display text-3xl text-accent">MG</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground">Maximilian Grießer</h3>
              <p className="font-body text-muted-foreground mt-2">
                Fachberater für Sonnen- und Wetterschutz
              </p>
            </div>
          </div>

          {/* Shared Philosophy */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6 text-center">
              Persönliche Beratung mit Leidenschaft
            </h3>
            
            <div className="space-y-4 font-body text-muted-foreground">
              <p>
                Als unabhängige Fachberater ist es unser Ziel, für Sie die beste Lösung zu finden – 
                nicht die teuerste oder einfachste, sondern die, die wirklich zu Ihren Bedürfnissen passt.
              </p>
              <p>
                Wir nehmen uns Zeit für jedes Projekt, hören genau zu und beraten ehrlich. 
                Denn nur wenn wir Ihre Wünsche und die Gegebenheiten vor Ort wirklich verstehen, 
                können wir Ihnen eine Lösung empfehlen, mit der Sie langfristig zufrieden sind.
              </p>
              <p>
                Von der ersten Kontaktaufnahme über die Planung bis hin zur fertigen Umsetzung 
                sind wir Ihre persönlichen Ansprechpartner. Auch nach Abschluss des Projekts 
                stehen wir Ihnen bei Fragen gerne zur Verfügung.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="font-body text-foreground">
                  Fokus auf Qualität, Funktion und Langlebigkeit
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="font-body text-foreground">
                  Ehrliche, bedarfsorientierte Beratung
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="font-body text-foreground">
                  Transparente Angebote ohne versteckte Kosten
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Meine Werte
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto">
              Was mir bei der Zusammenarbeit mit meinen Kunden wichtig ist
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(value => <div key={value.title} className="bg-card p-8 rounded-lg shadow-sm border border-border text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-medium text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="font-body text-muted-foreground">
                  {value.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>;
};
export default UeberMich;