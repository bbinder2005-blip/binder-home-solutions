import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/home/CTASection";
import { CheckCircle2 } from "lucide-react";
import terraceRoofImage from "@/assets/test/terrace-alt1.jpg";
import pergolaImage from "@/assets/test/pergola-alt1.jpg";
import markiseImage from "@/assets/products/markise-1.jpg";
import wintergartenImage from "@/assets/test/wintergarten-alt1.jpg";
import zipScreenImage from "@/assets/test/zip-alt1.jpg";
import dachfensterImage from "@/assets/products/dachfenster-1.jpg";
import rolladenImage from "@/assets/test/rolladen-alt1.jpg";
import fensterImage from "@/assets/test/fenster-alt1.jpg";

const services = [
  {
    id: "terrassendaecher",
    title: "Terrassendächer",
    subtitle: "Aluminium & Glas",
    image: terraceRoofImage,
    description: "Genießen Sie Ihre Terrasse bei jedem Wetter. Unsere hochwertigen Terrassendächer aus Aluminium und Glas bieten optimalen Schutz und schaffen zusätzlichen Wohnraum im Freien.",
    features: [
      "Zuverlässiger Wetter- und Sonnenschutz",
      "Individuelle Maßanfertigung nach Ihren Wünschen",
      "Erweiterbar mit Beschattung und Seitenelementen",
      "Hochwertige Materialien für langlebige Konstruktion",
      "Verschiedene Designs und Farboptionen",
    ],
  },
  {
    id: "pergola",
    title: "Pergola-Markisen & flexible Beschattungssysteme",
    subtitle: "Moderne Sonnenschutzlösungen",
    image: pergolaImage,
    description: "Flexible Beschattung für Ihre Terrasse oder Ihren Garten. Pergola-Markisen kombinieren elegantes Design mit praktischem Nutzen und lassen sich perfekt in bestehende Strukturen integrieren.",
    features: [
      "Effektiver Schutz vor Sonne, Hitze und leichtem Regen",
      "Moderne Steuerung – manuell oder elektrisch",
      "Nahtlose Integration in bestehende Terrassen",
      "Robuste Konstruktion für langlebige Nutzung",
      "Große Auswahl an Tuchfarben und -qualitäten",
    ],
  },
  {
    id: "markisen",
    title: "Markisen",
    subtitle: "Klassischer Sonnenschutz",
    image: markiseImage,
    description: "Unsere hochwertigen Markisen bieten zuverlässigen Sonnenschutz für Terrassen, Balkone und Fensterfronten. Von der klassischen Gelenkarmmarkise bis zur modernen Kassettenmarkise.",
    features: [
      "Effektiver Schutz vor Sonne und UV-Strahlung",
      "Elektrischer Antrieb mit Fernbedienung",
      "Wind- und Sonnensensor optional",
      "Kassettenmarkisen für geschütztes Tuch",
      "Große Auswahl an Farben und Mustern",
    ],
  },
  {
    id: "wintergarten",
    title: "Wintergartenbeschattung",
    subtitle: "Innen- & Außenbeschattung",
    image: wintergartenImage,
    description: "Optimieren Sie das Klima in Ihrem Wintergarten mit professioneller Beschattung. Ob Innen- oder Außenbeschattung – wir finden die passende Lösung für Ihren Wintergarten.",
    features: [
      "Effektiver Hitzeschutz im Sommer",
      "Blendschutz für angenehmes Arbeiten und Wohnen",
      "Deutliche Verbesserung des Raumklimas",
      "Maßlösungen für bestehende Konstruktionen",
      "Verschiedene Systeme für unterschiedliche Anforderungen",
    ],
  },
  {
    id: "zip-screens",
    title: "ZIP-Screens & Senkrechtmarkisen",
    subtitle: "Moderne Fassadenbeschattung",
    image: zipScreenImage,
    description: "ZIP-Screens bieten maximalen Sonnenschutz bei minimaler Windanfälligkeit. Das innovative Führungssystem sorgt für eine straffe Bespannung auch bei Wind.",
    features: [
      "Effektiver Sonnen-, Sicht- und Windschutz",
      "Ideal für große Glasflächen",
      "Moderne Optik und hohe Stabilität",
      "Windbeständig durch ZIP-Führung",
      "Elektrische Steuerung mit Smart-Home-Integration möglich",
    ],
  },
  {
    id: "dachfenster",
    title: "Dachfenster",
    subtitle: "Licht unter dem Dach",
    image: dachfensterImage,
    description: "Moderne Dachfenster bringen natürliches Licht in Ihre Dachräume. Ob Neubau oder Renovierung – wir finden die passende Lösung für jede Dachkonstruktion.",
    features: [
      "Maximaler Lichteinfall durch große Glasflächen",
      "3-fach Wärmeschutzverglasung",
      "Verschiedene Öffnungsarten verfügbar",
      "Elektrische Öffnung mit Regensensor optional",
      "Passende Rollläden und Verdunkelungen erhältlich",
    ],
  },
  {
    id: "rolllaeden",
    title: "Rollläden & Insektenschutz",
    subtitle: "Schutz & Komfort",
    image: rolladenImage,
    description: "Rollläden bieten vielseitigen Schutz für Ihr Zuhause – von Wärmedämmung über Schallschutz bis hin zu erhöhter Sicherheit. Ergänzend bieten wir passende Insektenschutzlösungen.",
    features: [
      "Wärme- und Kälteschutz für Energieeffizienz",
      "Effektiver Schallschutz",
      "Erhöhter Einbruchschutz",
      "Komfortable Bedienung – manuell oder elektrisch",
      "Individuell anpassbar an jede Fensterform",
    ],
  },
  {
    id: "fenster",
    title: "Fenster & Türen",
    subtitle: "Optional im Beratungsgespräch",
    image: fensterImage,
    description: "Fenster- und Türlösungen bieten wir optional im Rahmen einer persönlichen Fachberatung an. Sprechen Sie mich gerne an, wenn Sie auch in diesem Bereich Beratung wünschen.",
    features: [
      "Hohe Energieeffizienz durch moderne Verglasung",
      "Erhöhte Sicherheit durch spezielle Beschläge",
      "Individuelles Design passend zur Architektur",
      "Verschiedene Materialien: Kunststoff, Aluminium, Holz",
      "Professionelle Montage durch erfahrene Partner",
    ],
    optional: true,
  },
];

const Leistungen = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary pt-32">
        <div className="container-width text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-primary-foreground mb-4">
            Unsere Leistungen
          </h1>
          <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Hochwertige Lösungen für Sonnen- und Wetterschutz – individuell geplant und professionell umgesetzt
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-width">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`py-12 ${index > 0 ? "border-t border-border" : ""}`}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  {service.optional && (
                    <span className="inline-block bg-accent/10 text-accent font-body text-sm px-3 py-1 rounded-full mb-4">
                      Optional
                    </span>
                  )}
                  <h2 className="font-display text-3xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h2>
                  <p className="font-body text-accent mb-4">{service.subtitle}</p>
                  <p className="font-body text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="font-body text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Leistungen;
