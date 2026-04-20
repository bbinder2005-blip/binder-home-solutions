import { CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookingSectionPath, calendlyPhoneUrl, isExternalUrl } from "@/config/contact";

export function StickyContactButton() {
  const bookingHref = calendlyPhoneUrl || bookingSectionPath;
  const bookingTarget = isExternalUrl(bookingHref) ? "_blank" : undefined;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Button
        variant="accent"
        size="xl"
        className="rounded-full shadow-xl hover:shadow-2xl animate-fade-up"
        asChild
      >
        <a
          href={bookingHref}
          target={bookingTarget}
          rel={bookingTarget ? "noopener noreferrer" : undefined}
          className="flex items-center gap-2"
        >
          <CalendarCheck className="w-5 h-5" />
          <span className="hidden sm:inline">Termin buchen</span>
        </a>
      </Button>
    </div>
  );
}
