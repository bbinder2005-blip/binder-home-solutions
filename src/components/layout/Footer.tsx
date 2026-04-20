import { Link } from "react-router-dom";
import { CalendarCheck, Mail, MapPin } from "lucide-react";
import { bookingSectionPath, businessEmail, businessName } from "@/config/contact";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-width section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-2xl font-semibold mb-4">
              {businessName}
            </h3>
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed max-w-md mb-6">
              Rollläden, Markisen, Terrassendächer, Dachfenster und mehr für Heim und Haus.
              Persönliche, unabhängige Beratung – direkt und verständlich.
            </p>
            <div className="flex flex-col gap-3">
              <a href={bookingSectionPath} className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <CalendarCheck className="w-4 h-4" />
                <span className="font-body text-sm">Telefontermin online buchen</span>
              </a>
              <a href={`mailto:${businessEmail}`} className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
                <span className="font-body text-sm">{businessEmail}</span>
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
            © {new Date().getFullYear()} {businessName}. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
