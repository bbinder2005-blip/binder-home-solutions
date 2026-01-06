import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import terraceRoofImage from "@/assets/service-terrace-real.jpg";
import pergolaImage from "@/assets/service-pergola-real.jpg";
import wintergartenImage from "@/assets/service-wintergarten-real.jpg";
import zipScreenImage from "@/assets/service-zip-real.jpg";
import rolladenImage from "@/assets/service-rolladen-real.jpg";
import fensterImage from "@/assets/service-fenster-real.jpg";

const services = [
  {
    title: "Terrassendächer",
    subtitle: "Aluminium & Glas",
    description: "Wetter- und Sonnenschutz mit hochwertiger Maßanfertigung",
    image: terraceRoofImage,
    href: "/leistungen#terrassendaecher",
  },
  {
    title: "Pergola-Markisen",
    subtitle: "Flexible Beschattung",
    description: "Moderner Schutz vor Sonne, Hitze und Regen",
    image: pergolaImage,
    href: "/leistungen#pergola",
  },
  {
    title: "Wintergartenbeschattung",
    subtitle: "Innen & Außen",
    description: "Optimaler Hitzeschutz und besseres Raumklima",
    image: wintergartenImage,
    href: "/leistungen#wintergarten",
  },
  {
    title: "ZIP-Screens",
    subtitle: "Senkrechtmarkisen",
    description: "Effektiver Sonnen-, Sicht- und Windschutz",
    image: zipScreenImage,
    href: "/leistungen#zip-screens",
  },
  {
    title: "Rollläden",
    subtitle: "& Insektenschutz",
    description: "Wärme-, Schall- und Einbruchschutz",
    image: rolladenImage,
    href: "/leistungen#rolllaeden",
  },
  {
    title: "Fenster & Türen",
    subtitle: "Optional",
    description: "Energieeffiziente und sichere Lösungen",
    image: fensterImage,
    href: "/leistungen#fenster",
  },
];

export function ServicesPreview() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Unsere Leistungen
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Hochwertige Lösungen für Ihr Zuhause – individuell geplant und professionell umgesetzt
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="group bg-card rounded-lg overflow-hidden shadow-sm card-hover border border-border"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-medium text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-accent mb-2">{service.subtitle}</p>
                <p className="font-body text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 font-body text-sm font-medium text-accent group-hover:gap-3 transition-all">
                  Mehr erfahren
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="accent" size="lg" asChild>
            <Link to="/leistungen" className="flex items-center gap-2">
              Alle Leistungen ansehen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
