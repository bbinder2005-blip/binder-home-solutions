import { Layout } from "@/components/layout/Layout";

// Original Bilder
import heroOriginal from "@/assets/hero-terrace-real.jpg";
import pergolaOriginal from "@/assets/service-pergola-real.jpg";
import wintergartenOriginal from "@/assets/service-wintergarten-real.jpg";
import zipOriginal from "@/assets/service-zip-real.jpg";
import fensterOriginal from "@/assets/service-fenster-real.jpg";
import rolladenOriginal from "@/assets/service-rolladen-real.jpg";

// Terrace alternatives
import terraceAlt1 from "@/assets/test/terrace-alt1.jpg";
import terraceAlt2 from "@/assets/test/terrace-alt2.jpg";
import terraceAlt3 from "@/assets/test/terrace-alt3.jpg";
import terraceAlt4 from "@/assets/test/terrace-alt4.jpg";

// Pergola alternatives
import pergolaAlt1 from "@/assets/test/pergola-alt1.jpg";
import pergolaAlt2 from "@/assets/test/pergola-alt2.jpg";
import pergolaAlt3 from "@/assets/test/pergola-alt3.jpg";
import pergolaAlt4 from "@/assets/test/pergola-alt4.jpg";

// Wintergarten alternatives
import wintergartenAlt1 from "@/assets/test/wintergarten-alt1.jpg";
import wintergartenAlt2 from "@/assets/test/wintergarten-alt2.jpg";
import wintergartenAlt3 from "@/assets/test/wintergarten-alt3.jpg";
import wintergartenAlt4 from "@/assets/test/wintergarten-alt4.jpg";

// ZIP-Screen alternatives
import zipAlt1 from "@/assets/test/zip-alt1.jpg";
import zipAlt2 from "@/assets/test/zip-alt2.jpg";
import zipAlt3 from "@/assets/test/zip-alt3.jpg";
import zipAlt4 from "@/assets/test/zip-alt4.jpg";

// Fenster alternatives
import fensterAlt1 from "@/assets/test/fenster-alt1.jpg";
import fensterAlt2 from "@/assets/test/fenster-alt2.jpg";
import fensterAlt3 from "@/assets/test/fenster-alt3.jpg";
import fensterAlt4 from "@/assets/test/fenster-alt4.jpg";

// Rolladen alternatives
import rolladenAlt1 from "@/assets/test/rolladen-alt1.jpg";
import rolladenAlt2 from "@/assets/test/rolladen-alt2.jpg";
import rolladenAlt3 from "@/assets/test/rolladen-alt3.jpg";
import rolladenAlt4 from "@/assets/test/rolladen-alt4.jpg";

interface ProductGallery {
  name: string;
  original: string;
  alternatives: { image: string; scene: string }[];
}

const productGalleries: ProductGallery[] = [
  {
    name: "Terrassendächer",
    original: heroOriginal,
    alternatives: [
      { image: terraceAlt1, scene: "Moderne Terrasse" },
      { image: terraceAlt2, scene: "Mediterrane Villa" },
      { image: terraceAlt3, scene: "Penthouse Dachterrasse" },
      { image: terraceAlt4, scene: "Haus am See" },
    ],
  },
  {
    name: "Pergola-Markisen",
    original: pergolaOriginal,
    alternatives: [
      { image: pergolaAlt1, scene: "Gartenterrasse" },
      { image: pergolaAlt2, scene: "Französisches Landhaus" },
      { image: pergolaAlt3, scene: "Moderne Villa mit Pool" },
      { image: pergolaAlt4, scene: "Gemütlicher Cottage-Garten" },
    ],
  },
  {
    name: "Wintergartenbeschattung",
    original: wintergartenOriginal,
    alternatives: [
      { image: wintergartenAlt1, scene: "Klassischer Wintergarten" },
      { image: wintergartenAlt2, scene: "Viktorianischer Stil" },
      { image: wintergartenAlt3, scene: "Moderner Glasanbau" },
      { image: wintergartenAlt4, scene: "Rustikale Orangerie" },
    ],
  },
  {
    name: "ZIP-Screens",
    original: zipOriginal,
    alternatives: [
      { image: zipAlt1, scene: "Wohnhaus" },
      { image: zipAlt2, scene: "Modernes Bürogebäude" },
      { image: zipAlt3, scene: "Luxus-Penthouse" },
      { image: zipAlt4, scene: "Strandhaus" },
    ],
  },
  {
    name: "Fenster & Türen",
    original: fensterOriginal,
    alternatives: [
      { image: fensterAlt1, scene: "Einfamilienhaus" },
      { image: fensterAlt2, scene: "Fachwerkhaus" },
      { image: fensterAlt3, scene: "Modernes Kubushaus" },
      { image: fensterAlt4, scene: "Stadthaus mit Backstein" },
    ],
  },
  {
    name: "Rollläden",
    original: rolladenOriginal,
    alternatives: [
      { image: rolladenAlt1, scene: "Dachfenster" },
      { image: rolladenAlt2, scene: "Moderner Dachausbau" },
      { image: rolladenAlt3, scene: "Luxus-Schlafzimmer" },
      { image: rolladenAlt4, scene: "Gemütliche Leseecke" },
    ],
  },
];

export default function BilderTest() {
  return (
    <Layout>
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Produkt-Galerie
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-2 mb-4">
              Bilder-Vergleich
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Jedes Produkt in verschiedenen Szenen dargestellt. 
              Original + 4 alternative Umgebungen pro Produkt.
            </p>
          </div>

          <div className="space-y-16">
            {productGalleries.map((product, index) => (
              <div key={index} className="space-y-6">
                <h2 className="text-2xl font-display font-semibold text-foreground border-b border-border pb-3">
                  {product.name}
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {/* Original Image */}
                  <div className="relative group">
                    <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium z-10">
                      Original
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg ring-2 ring-primary/50">
                      <img
                        src={product.original}
                        alt={`${product.name} Original`}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  </div>

                  {/* Alternative Images */}
                  {product.alternatives.map((alt, altIndex) => (
                    <div key={altIndex} className="relative group">
                      <div className="absolute top-3 left-3 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium z-10">
                        {alt.scene}
                      </div>
                      <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <img
                          src={alt.image}
                          alt={`${product.name} - ${alt.scene}`}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 bg-muted rounded-xl">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              ℹ️ Hinweis
            </h3>
            <p className="text-muted-foreground">
              Alle Produktbilder zeigen das gleiche Produkt in verschiedenen Umgebungen. 
              Die Produkte wurden KI-unterstützt in neue Szenen eingefügt, 
              wobei das originale Produktdesign beibehalten wurde.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
