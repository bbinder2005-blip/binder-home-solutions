import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Kontakt = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsappNumber = "4915111073043";
  const whatsappMessage = encodeURIComponent("Hallo, ich interessiere mich für eine kostenlose Fachberatung.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Nachricht gesendet!",
      description: "Vielen Dank für Ihre Anfrage. Ich melde mich schnellstmöglich bei Ihnen.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-primary pt-32">
        <div className="container-width text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-primary-foreground mb-4">
            Kontakt
          </h1>
          <p className="font-body text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Kostenlose und unverbindliche Fachberatung – ich freue mich auf Ihre Anfrage!
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
                  href="tel:+4915111073043"
                  className="flex items-start gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground">Telefon</h3>
                    <p className="font-body text-muted-foreground">0151 11073043</p>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      Rufen Sie mich direkt an
                    </p>
                  </div>
                </a>

                <a
                  href={whatsappUrl}
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
                  href="mailto:info@fachberatung-binder.de"
                  className="flex items-start gap-4 p-4 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium text-foreground">E-Mail</h3>
                    <p className="font-body text-muted-foreground">info@fachberatung-binder.de</p>
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
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-6">
                Kontaktformular
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-body">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Ihr Name"
                      className="font-body"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-body">Telefon</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Ihre Telefonnummer"
                      className="font-body"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="font-body">E-Mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Ihre E-Mail-Adresse"
                    className="font-body"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-body">Betreff</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Worum geht es?"
                    className="font-body"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-body">Ihre Nachricht *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                    className="font-body"
                  />
                </div>

                <p className="font-body text-sm text-muted-foreground">
                  * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                </p>

                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
