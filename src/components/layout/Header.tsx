import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Start", href: "/" },
  { name: "Leistungen", href: "/leistungen" },
  { name: "Produkte", href: "/produktgalerie" },
  { name: "Über mich", href: "/ueber-mich" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container-width section-padding py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-xl md:text-2xl font-semibold text-foreground">
            Fachberatung <span className="text-accent">Binder</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`font-body text-sm font-medium transition-colors duration-200 link-underline ${
                location.pathname === item.href
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="accent" size="default" asChild>
            <a href="tel:+4915111073043" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Beratung anfragen
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in">
          <div className="container-width px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-2 font-body text-base font-medium ${
                  location.pathname === item.href
                    ? "text-accent"
                    : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <Button variant="accent" size="lg" className="w-full" asChild>
                <a href="tel:+4915111073043" className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Beratung anfragen
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
