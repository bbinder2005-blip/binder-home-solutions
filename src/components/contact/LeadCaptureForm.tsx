import { useEffect, useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { businessEmail, hubspotFormId, hubspotPortalId } from "@/config/contact";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (options: {
          region?: string;
          portalId: string;
          formId: string;
          target: string;
        }) => void;
      };
    };
  }
}

export function LeadCaptureForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formContainerId = useId().replace(/:/g, "");
  const hasHubSpotForm = Boolean(hubspotPortalId && hubspotFormId);

  useEffect(() => {
    if (!hasHubSpotForm) return;

    const target = `#${formContainerId}`;
    const createForm = () => {
      window.hbspt?.forms.create({
        region: "eu1",
        portalId: hubspotPortalId,
        formId: hubspotFormId,
        target,
      });
    };

    if (window.hbspt) {
      createForm();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://js-eu1.hsforms.net/forms/embed/v2.js";
    script.async = true;
    script.onload = createForm;
    document.body.appendChild(script);
  }, [formContainerId, hasHubSpotForm]);

  if (hasHubSpotForm) {
    return (
      <div>
        <div id={formContainerId} />
        <p className="font-body text-sm text-muted-foreground mt-4">
          Ihre Anfrage wird über das angebundene CRM erfasst und zur Bearbeitung gespeichert.
        </p>
      </div>
    );
  }

  const handleFallbackSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const data = new FormData(event.currentTarget);
    const subject = String(data.get("subject") || "Neue Beratungsanfrage");
    const body = [
      `Name: ${data.get("name") || ""}`,
      `Telefon: ${data.get("phone") || ""}`,
      `E-Mail: ${data.get("email") || ""}`,
      "",
      "Nachricht:",
      String(data.get("message") || ""),
    ].join("\n");

    window.location.href = `mailto:${businessEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    toast({
      title: "E-Mail vorbereitet",
      description: "Ihr E-Mail-Programm öffnet sich mit den Angaben aus dem Formular.",
    });

    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleFallbackSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="font-body">Name *</Label>
          <Input id="name" name="name" type="text" required placeholder="Ihr Name" className="font-body" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="font-body">Telefon</Label>
          <Input id="phone" name="phone" type="tel" placeholder="Ihre Telefonnummer" className="font-body" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="font-body">E-Mail *</Label>
        <Input id="email" name="email" type="email" required placeholder="Ihre E-Mail-Adresse" className="font-body" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject" className="font-body">Thema</Label>
        <Input id="subject" name="subject" type="text" placeholder="Zum Beispiel: Terrassendach oder Markise" className="font-body" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="font-body">Ihre Nachricht *</Label>
        <Textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Worum geht es, wo ist das Objekt und wann passt ein Rückruf?"
          className="font-body"
        />
      </div>

      <p className="font-body text-sm text-muted-foreground">
        * Pflichtfelder. Nach Anschluss eines HubSpot-Formulars werden Anfragen automatisch im CRM erfasst.
      </p>

      <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Wird vorbereitet..." : "Anfrage senden"}
      </Button>
    </form>
  );
}
