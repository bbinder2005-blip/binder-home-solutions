import { Layout } from "@/components/layout/Layout";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { BookingOptions } from "@/components/contact/BookingOptions";
import { LeadCaptureForm } from "@/components/contact/LeadCaptureForm";
import { businessEmail, whatsappUrl } from "@/config/contact";

const Kontakt = () => {
  const whatsappLink = whatsappUrl("Hallo, ich habe eine Rückfrage zu meinem Termin oder möchte Fotos senden.");

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary pt-32">
        <div className="container-width text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-primary-foreground mb-4">
            Kontakt
          </h1>
          <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Buchen Sie zuerst einen kurzen Telefontermin. Danach entscheiden wir, ob ein Haustermin sinnvoll ist.
          </p>
        </div>
      </section>

      <BookingOptions />

      {/* Contact Content */}
      <section className="section-padding bg-secondary">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Weitere Rückfragen
              </h2>

              <div className="space-y-6">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-background rounded-lg hover:bg-background/80 transition-colors border border-border"
                >
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground">WhatsApp für Rückfragen</h3>
                    <p className="font-body text-muted-foreground">Fotos, Nachträge oder kurze persönliche Fragen</p>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      Der Hauptweg bleibt die Terminbuchung
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${businessEmail}`}
                  className="flex items-start gap-4 p-4 bg-background rounded-lg hover:bg-background/80 transition-colors border border-border"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground">E-Mail</h3>
                    <p className="font-body text-muted-foreground">{businessEmail}</p>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      Ich antworte zeitnah
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-background rounded-lg border border-border">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground">Einsatzgebiet</h3>
                    <p className="font-body text-muted-foreground">Brandenburg & Berlin</p>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      Beratung vor Ort bei Ihnen
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Beratungsanfrage
              </h2>
              <LeadCaptureForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
