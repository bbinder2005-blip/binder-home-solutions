import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-width section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-semibold mb-4">
              Fachberatung <span className="text-accent-foreground/80">Binder</span>
            </h3>
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed max-w-md mb-6">
              Persönliche Fachberatung für hochwertige Bauelemente, Sonnen- und Wetterschutzlösungen. 
              Von der ersten Idee bis zur fertigen Umsetzung – kompetent, ehrlich und zuverlässig.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+4915111073043" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-body text-sm">0151 11073043</span>
              </a>
              <a href="mailto:info@fachberatung-binder.de" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
                <span className="font-body text-sm">info@fachberatung-binder.de</span>
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4" />
                <span className="font-body text-sm">Brandenburg & Berlin</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link to="/leistungen" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link to="/ueber-mich" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Über mich
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Rechtliches</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/impressum" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="font-body text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <p className="font-body text-sm text-primary-foreground/60 text-center">
            © {new Date().getFullYear()} Fachberatung Binder. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
