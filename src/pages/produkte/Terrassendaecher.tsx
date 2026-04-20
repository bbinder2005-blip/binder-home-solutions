import { Layout } from "@/components/layout/Layout";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Check, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/home/CTASection";

import img1 from "@/assets/test/terrace-alt1.jpg";
import img2 from "@/assets/test/terrace-alt2.jpg";
import img3 from "@/assets/test/terrace-alt3.jpg";

const images = [
  { src: img1, label: "Terrassendach mit Glasdach" },
  { src: img2, label: "Aluminium-Terrassendach" },
  { src: img3, label: "Überdachte Terrasse am Haus" },
];

const features = [
  "Wetterfeste Aluminium-Konstruktion",
  "Verschiedene Glasarten wählbar (VSG, ESG)",
  "Integrierte LED-Beleuchtung optional",
  "Erweiterbar mit Beschattung und Seitenelementen",
  "Individuelle Maßanfertigung für jede Terrassengröße",
  "Verschiedene Farben und Designs verfügbar",
];

export default function Terrassendaecher() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <Layout>
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4">
          <Link 
            to="/produktgalerie" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Übersicht
          </Link>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="relative group">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={images[currentIndex].src}
                    alt={images[currentIndex].label}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="absolute bottom-4 left-4 bg-background/90 text-foreground px-4 py-2 rounded-lg text-sm font-medium">
                  {images[currentIndex].label}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`aspect-video rounded-lg overflow-hidden border-2 transition-all ${
                      idx === currentIndex 
                        ? "border-primary ring-2 ring-primary/20" 
                        : "border-transparent hover:border-muted-foreground/30"
                    }`}
                  >
                    <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <span className="text-accent font-medium text-sm uppercase tracking-wider">
                  Premium Sonnenschutz
                </span>
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2">
                  Terrassendächer
                </h1>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Ein Terrassendach macht die Terrasse wetterunabhängig nutzbar – bei Regen,
                Wind und starker Sonne. In der Beratung klären wir, welche Dachform,
                Verglasung und Beschattung zu Ihrem Haus und Ihrer Terrasse passen.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Aluminium-Konstruktionen sind langlebig, pflegeleicht und in vielen
                Farben erhältlich. Sicherheitsglas (VSG oder ESG) sorgt für
                Stabilität und Lichteinfall. Optional lassen sich Seitenelemente,
                Beleuchtung und motorisierte Beschattung ergänzen.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Vorteile im Überblick</h3>
                <ul className="space-y-3">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="accent" size="lg" asChild>
                  <Link to="/kontakt#termin">Telefontermin buchen</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/kontakt#termin">Haustermin vorbereiten</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
