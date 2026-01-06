import { Layout } from "@/components/layout/Layout";

// Original Bilder
import heroOriginal from "@/assets/hero-terrace-real.jpg";
import pergolaOriginal from "@/assets/service-pergola-real.jpg";
import wintergartenOriginal from "@/assets/service-wintergarten-real.jpg";
import zipOriginal from "@/assets/service-zip-real.jpg";
import fensterOriginal from "@/assets/service-fenster-real.jpg";
import rolladenOriginal from "@/assets/service-rolladen-real.jpg";

// Alternative Bilder (Produkt in neuer Umgebung)
import terraceAlt from "@/assets/test/terrace-alt1.jpg";
import pergolaAlt from "@/assets/test/pergola-alt1.jpg";
import wintergartenAlt from "@/assets/test/wintergarten-alt1.jpg";
import zipAlt from "@/assets/test/zip-alt1.jpg";
import fensterAlt from "@/assets/test/fenster-alt1.jpg";
import rolladenAlt from "@/assets/test/rolladen-alt1.jpg";

const imageComparisons = [
  {
    name: "Terrassendach",
    original: heroOriginal,
    alternative: terraceAlt,
  },
  {
    name: "Pergola-Markise",
    original: pergolaOriginal,
    alternative: pergolaAlt,
  },
  {
    name: "Wintergartenbeschattung",
    original: wintergartenOriginal,
    alternative: wintergartenAlt,
  },
  {
    name: "ZIP-Screen",
    original: zipOriginal,
    alternative: zipAlt,
  },
  {
    name: "Haustür & Fenster",
    original: fensterOriginal,
    alternative: fensterAlt,
  },
  {
    name: "Dachfenster-Rollladen",
    original: rolladenOriginal,
    alternative: rolladenAlt,
  },
];

export default function BilderTest() {
  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Test-Seite
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-4">
              Bilder-Vergleich
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Links: Original-Produktbild | Rechts: Gleiches Produkt in neuer Umgebung
            </p>
          </div>

          <div className="space-y-16">
            {imageComparisons.map((item, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-2xl font-display font-semibold text-foreground text-center">
                  {item.name}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground text-center font-medium">
                      Original
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={item.original}
                        alt={`${item.name} - Original`}
                        className="w-full h-64 md:h-80 object-cover"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-accent text-center font-medium">
                      Neue Umgebung (gleiches Produkt)
                    </p>
                    <div className="rounded-xl overflow-hidden shadow-lg border-2 border-accent/30">
                      <img
                        src={item.alternative}
                        alt={`${item.name} - Alternative`}
                        className="w-full h-64 md:h-80 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 bg-muted rounded-xl">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              ℹ️ Hinweis
            </h3>
            <p className="text-muted-foreground">
              Dies ist eine Testseite zum Vergleich der Produktbilder. Die rechten Bilder zeigen 
              das gleiche Produkt-Design in einer anderen Umgebung. Wenn die Ergebnisse gut 
              aussehen, können diese Bilder für die Hauptseite verwendet werden.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
