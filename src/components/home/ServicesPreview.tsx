import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    title: "Terrassendächer",
    subtitle: "Aluminium & Glas",
    description: "Wetter- und Sonnenschutz mit hochwertiger Maßanfertigung",
    image: terraceRoofImage,
    href: "/produkte/terrassendaecher",
  },
  {
    title: "Pergola-Markisen",
    subtitle: "Flexible Beschattung",
    description: "Moderner Schutz vor Sonne, Hitze und Regen",
    image: pergolaImage,
    href: "/produkte/pergola-markisen",
  },
  {
    title: "Markisen",
    subtitle: "Klassischer Sonnenschutz",
    description: "Gelenkarm- und Kassettenmarkisen für jeden Bedarf",
    image: markiseImage,
    href: "/produkte/markisen",
  },
  {
    title: "Wintergartenbeschattung",
    subtitle: "Innen & Außen",
    description: "Optimaler Hitzeschutz und besseres Raumklima",
    image: wintergartenImage,
    href: "/produkte/wintergartenbeschattung",
  },
  {
    title: "ZIP-Screens",
    subtitle: "Senkrechtmarkisen",
    description: "Effektiver Sonnen-, Sicht- und Windschutz",
    image: zipScreenImage,
    href: "/produkte/zip-screens",
  },
  {
    title: "Dachfenster",
    subtitle: "Licht unter dem Dach",
    description: "Moderne Dachfenster mit bester Wärmedämmung",
    image: dachfensterImage,
    href: "/produkte/dachfenster",
  },
  {
    title: "Rollläden",
    subtitle: "& Insektenschutz",
    description: "Wärme-, Schall- und Einbruchschutz",
    image: rolladenImage,
    href: "/produkte/rolllaeden",
  },
  {
    title: "Fenster & Türen",
    subtitle: "Optional",
    description: "Energieeffiziente und sichere Lösungen",
    image: fensterImage,
    href: "/produkte/fenster-tueren",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
              <div className="p-4">
                <h3 className="font-display text-base font-medium text-foreground mb-0.5">
                  {service.title}
                </h3>
                <p className="font-body text-xs text-accent mb-1">{service.subtitle}</p>
                <p className="font-body text-xs text-muted-foreground mb-3 line-clamp-2">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1 font-body text-xs font-medium text-accent group-hover:gap-2 transition-all">
                  Mehr erfahren
                  <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="accent" size="lg" asChild>
            <Link to="/produktgalerie" className="flex items-center gap-2">
              Alle Produkte ansehen
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
