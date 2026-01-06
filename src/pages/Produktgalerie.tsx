import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CTASection } from "@/components/home/CTASection";

// Terrassendächer
import terraceOriginal from "@/assets/hero-terrace-real.jpg";
import terraceAlt1 from "@/assets/test/terrace-alt1.jpg";
import terraceAlt2 from "@/assets/test/terrace-alt2.jpg";
import terraceAlt3 from "@/assets/test/terrace-alt3.jpg";

// Pergola-Markisen
import pergolaOriginal from "@/assets/service-pergola-real.jpg";
import pergolaAlt1 from "@/assets/test/pergola-alt1.jpg";
import pergolaAlt2 from "@/assets/test/pergola-alt2.jpg";
import pergolaAlt3 from "@/assets/test/pergola-alt3.jpg";

// Wintergartenbeschattung
import wintergartenOriginal from "@/assets/service-wintergarten-real.jpg";
import wintergartenAlt1 from "@/assets/test/wintergarten-alt1.jpg";
import wintergartenAlt2 from "@/assets/test/wintergarten-alt2.jpg";
import wintergartenAlt3 from "@/assets/test/wintergarten-alt3.jpg";

// ZIP-Screens
import zipOriginal from "@/assets/service-zip-real.jpg";
import zipAlt1 from "@/assets/test/zip-alt1.jpg";
import zipAlt2 from "@/assets/test/zip-alt2.jpg";
import zipAlt3 from "@/assets/test/zip-alt3.jpg";

// Fenster & Türen
import fensterOriginal from "@/assets/service-fenster-real.jpg";
import fensterAlt1 from "@/assets/test/fenster-alt1.jpg";
import fensterAlt2 from "@/assets/test/fenster-alt2.jpg";
import fensterAlt3 from "@/assets/test/fenster-alt3.jpg";

// Rollläden
import rolladenOriginal from "@/assets/service-rolladen-real.jpg";
import rolladenAlt1 from "@/assets/test/rolladen-alt1.jpg";
import rolladenAlt2 from "@/assets/test/rolladen-alt2.jpg";
import rolladenAlt3 from "@/assets/test/rolladen-alt3.jpg";

interface ProductGallery {
  id: string;
  name: string;
  description: string;
  images: { src: string; label: string }[];
}

const productGalleries: ProductGallery[] = [
  {
    id: "terrassendaecher",
    name: "Terrassendächer",
    description: "Hochwertige Terrassendächer für ganzjährigen Outdoor-Genuss – wetterfest und elegant.",
    images: [
      { src: terraceOriginal, label: "Klassisches Design" },
      { src: terraceAlt1, label: "Moderne Terrasse" },
      { src: terraceAlt2, label: "Mediterrane Villa" },
      { src: terraceAlt3, label: "Penthouse Dachterrasse" },
    ],
  },
  {
    id: "pergola-markisen",
    name: "Pergola-Markisen",
    description: "Flexible Beschattungslösungen für Ihre Terrasse mit eleganter Optik.",
    images: [
      { src: pergolaOriginal, label: "Premium Pergola" },
      { src: pergolaAlt1, label: "Gartenterrasse" },
      { src: pergolaAlt2, label: "Französisches Landhaus" },
      { src: pergolaAlt3, label: "Villa mit Pool" },
    ],
  },
  {
    id: "wintergartenbeschattung",
    name: "Wintergartenbeschattung",
    description: "Optimale Klimaregulierung für Ihren Wintergarten zu jeder Jahreszeit.",
    images: [
      { src: wintergartenOriginal, label: "Innenliegende Beschattung" },
      { src: wintergartenAlt1, label: "Klassischer Wintergarten" },
      { src: wintergartenAlt2, label: "Viktorianischer Stil" },
      { src: wintergartenAlt3, label: "Moderner Glasanbau" },
    ],
  },
  {
    id: "zip-screens",
    name: "ZIP-Screens",
    description: "Innovative Senkrechtmarkisen für effektiven Sonnen- und Sichtschutz.",
    images: [
      { src: zipOriginal, label: "Wohnhaus ZIP-Screen" },
      { src: zipAlt1, label: "Einfamilienhaus" },
      { src: zipAlt2, label: "Bürogebäude" },
      { src: zipAlt3, label: "Strandhaus" },
    ],
  },
  {
    id: "fenster-tueren",
    name: "Fenster & Türen",
    description: "Hochwertige Haustüren und Fenster mit bester Wärmedämmung.",
    images: [
      { src: fensterOriginal, label: "Premium Haustür" },
      { src: fensterAlt1, label: "Einfamilienhaus" },
      { src: fensterAlt2, label: "Fachwerkhaus" },
      { src: fensterAlt3, label: "Modernes Kubushaus" },
    ],
  },
  {
    id: "rolllaeden",
    name: "Rollläden & Insektenschutz",
    description: "Dachfenster-Rollläden für perfekte Verdunkelung und Wärmedämmung.",
    images: [
      { src: rolladenOriginal, label: "Dachfenster-Rollladen" },
      { src: rolladenAlt1, label: "Schlafzimmer" },
      { src: rolladenAlt2, label: "Moderner Dachausbau" },
      { src: rolladenAlt3, label: "Loft mit Bergblick" },
    ],
  },
];

function ProductCarousel({ product }: { product: ProductGallery }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id={product.id} className="scroll-mt-32">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Image Carousel */}
        <div className="relative group">
          <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
            <img
              src={product.images[currentIndex].src}
              alt={`${product.name} - ${product.images[currentIndex].label}`}
              className="w-full h-full object-cover transition-transform duration-500"
            />
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Vorheriges Bild"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Nächstes Bild"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Label */}
          <div className="absolute bottom-4 left-4 bg-background/90 text-foreground px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
            {product.images[currentIndex].label}
          </div>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            {product.images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  idx === currentIndex 
                    ? "bg-primary w-6" 
                    : "bg-background/60 hover:bg-background/80"
                }`}
                aria-label={`Gehe zu Bild ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            {product.name}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {product.description}
          </p>
          
          {/* Thumbnail Grid */}
          <div className="grid grid-cols-4 gap-3">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                  idx === currentIndex 
                    ? "border-primary ring-2 ring-primary/20" 
                    : "border-transparent hover:border-muted-foreground/30"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

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
            Entdecken Sie unsere hochwertigen Sonnenschutz- und Bauelemente 
            in verschiedenen Anwendungsszenarien.
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <nav className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
            {productGalleries.map((product) => (
              <a
                key={product.id}
                href={`#${product.id}`}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted rounded-full whitespace-nowrap transition-colors"
              >
                {product.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Product Galleries */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {productGalleries.map((product) => (
              <ProductCarousel key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
