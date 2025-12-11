import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* À Propos */}
          <div>
            <h3 className="text-xl font-display font-bold text-gradient-gold mb-4">
              KFG LUXECARS
            </h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Votre partenaire de confiance pour l'acquisition de véhicules de luxe neufs et d'occasion à Douala, Cameroun.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Liens Rapides */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-foreground">
              Liens Rapides
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/catalogue" className="text-muted-foreground hover:text-primary transition-colors">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/financement" className="text-muted-foreground hover:text-primary transition-colors">
                  Financement
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-foreground">
              Nos Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Vente Véhicules Neufs</li>
              <li className="text-muted-foreground">Vente Véhicules Occasion</li>
              <li className="text-muted-foreground">Reprise Auto</li>
              <li className="text-muted-foreground">Financement</li>
              <li className="text-muted-foreground">Assurance</li>
              <li className="text-muted-foreground">Entretien & Maintenance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-foreground">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Douala, Cameroun</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+237693378712" className="hover:text-primary transition-colors">
                  (+237) 693 37 87 12
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:sales@kfgluxecars.com" className="hover:text-primary transition-colors">
                  sales@kfgluxecars.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Lun-Sam: 8h00 - 19h00</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} KFG LUXECARS. Tous droits réservés. Kuate Fosso Ghislain - CEO
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
