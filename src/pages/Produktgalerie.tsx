import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

import terraceImg from "@/assets/test/terrace-alt1.jpg";
import pergolaImg from "@/assets/test/pergola-alt1.jpg";
import markiseImg from "@/assets/test/markise-alt1.jpg";
import wintergartenImg from "@/assets/test/wintergarten-alt1.jpg";
import zipImg from "@/assets/test/zip-alt1.jpg";
import dachfensterImg from "@/assets/test/dachfenster-alt1.jpg";
import rolladenImg from "@/assets/test/rolladen-alt1.jpg";
import fensterImg from "@/assets/test/fenster-alt1.jpg";

interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  href: string;
}

const products: Product[] = [
  {
    id: "terrassendaecher",
    name: "Terrassendächer",
    description: "Hochwertige Terrassendächer für ganzjährigen Outdoor-Genuss – wetterfest und elegant.",
    image: terraceImg,
    href: "/produkte/terrassendaecher",
  },
  {
    id: "pergola-markisen",
    name: "Pergola-Markisen",
    description: "Flexible Beschattungslösungen mit wasserdichten Lamellen für Ihre Terrasse.",
    image: pergolaImg,
    href: "/produkte/pergola-markisen",
  },
  {
    id: "markisen",
    name: "Markisen",
    description: "Klassische Gelenkarm- und Kassettenmarkisen für Terrasse und Balkon.",
    image: markiseImg,
    href: "/produkte/markisen",
  },
  {
    id: "wintergartenbeschattung",
    name: "Wintergartenbeschattung",
    description: "Optimale Klimaregulierung für Ihren Wintergarten zu jeder Jahreszeit.",
    image: wintergartenImg,
    href: "/produkte/wintergartenbeschattung",
  },
  {
    id: "zip-screens",
    name: "ZIP-Screens",
    description: "Innovative Senkrechtmarkisen für effektiven Sonnen- und Sichtschutz.",
    image: zipImg,
    href: "/produkte/zip-screens",
  },
  {
    id: "dachfenster",
    name: "Dachfenster",
    description: "Moderne Dachfenster für maximalen Lichteinfall und gute Belüftung.",
    image: dachfensterImg,
    href: "/produkte/dachfenster",
  },
  {
    id: "rolllaeden",
    name: "Rollläden & Insektenschutz",
    description: "Rollläden für perfekte Verdunkelung, Wärmedämmung und erhöhte Sicherheit.",
    image: rolladenImg,
    href: "/produkte/rolllaeden",
  },
  {
    id: "fenster-tueren",
    name: "Fenster & Türen",
    description: "Hochwertige Haustüren und Fenster mit bester Wärmedämmung und Sicherheit.",
    image: fensterImg,
    href: "/produkte/fenster-tueren",
  },
];

export default function Produktgalerie() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4 text-center">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Unsere Produkte
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mt-2 mb-6">
            Produktgalerie
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Entdecken Sie unsere hochwertigen Sonnenschutz- und Bauelemente. 
            Klicken Sie auf ein Produkt für mehr Details und Bilder.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.id}
                to={product.href}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="text-lg font-display font-semibold mb-1 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-accent text-sm font-medium">
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
