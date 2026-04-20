import { Layout } from "@/components/layout/Layout";
import { Phone, Mail, MapPin, MessageCircle, Clock, CalendarCheck } from "lucide-react";
import { LeadCaptureForm } from "@/components/contact/LeadCaptureForm";
import { businessEmail, businessPhone, businessPhoneLabel, calendlyUrl, whatsappUrl } from "@/config/contact";

const Kontakt = () => {
  const whatsappLink = whatsappUrl("Hallo, ich möchte eine Beratung für mein Hausprojekt anfragen.");

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary pt-32">
        <div className="container-width text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-primary-foreground mb-4">
            Kontakt
          </h1>
          <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Stellen Sie Ihre Anfrage kurz und einfach. Ich melde mich mit dem passenden nächsten Schritt.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                So erreichen Sie mich
              </h2>

              <div className="space-y-6">
                <a
                  href={`tel:${businessPhone}`}
                  className="flex items-start gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground">Telefon</h3>
                    <p className="font-body text-muted-foreground">{businessPhoneLabel}</p>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      Rufen Sie mich direkt an
                    </p>
                  </div>
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  <div className="w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground">WhatsApp</h3>
                    <p className="font-body text-muted-foreground">Schnell und unkompliziert</p>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      Schreiben Sie mir eine Nachricht
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${businessEmail}`}
                  className="flex items-start gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
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

                <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
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

                <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground">Rückruf-Service</h3>
                    <p className="font-body text-muted-foreground">Hinterlassen Sie mir Ihre Nummer</p>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      Ich rufe Sie zurück
                    </p>
                  </div>
                </div>

                <a
                  href={calendlyUrl || `mailto:${businessEmail}?subject=Terminwunsch%20Beratung`}
                  target={calendlyUrl ? "_blank" : undefined}
                  rel={calendlyUrl ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CalendarCheck className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground">Terminbuchung</h3>
                    <p className="font-body text-muted-foreground">
                      {calendlyUrl ? "Online-Termin wählen" : "Terminwunsch senden"}
                    </p>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      Weniger Hin und Her bei der Abstimmung
                    </p>
                  </div>
                </a>
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
