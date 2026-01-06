import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function StickyContactButton() {
  const whatsappNumber = "4915111073043";
  const whatsappMessage = encodeURIComponent("Hallo, ich interessiere mich für eine kostenlose Fachberatung.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Button
        variant="whatsapp"
        size="xl"
        className="rounded-full shadow-xl hover:shadow-2xl animate-fade-up"
        asChild
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </Button>
    </div>
  );
}
