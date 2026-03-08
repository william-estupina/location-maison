import { Link } from 'react-router';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-cream font-semibold text-lg mb-3">Location à Lestiac sur Garonne</h3>
            <p className="text-sm text-warm-gray-light leading-relaxed">
              Découvrez nos logements au cœur des vignobles bordelais, à seulement 25 km de Bordeaux.
              Piscine, jardin et calme de la campagne vous attendent.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-cream font-semibold text-lg mb-3">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-warm-gray-light hover:text-cream transition-colors">Accueil</Link></li>
              <li><Link to="/logements" className="text-warm-gray-light hover:text-cream transition-colors">Nos logements</Link></li>
              <li><Link to="/logements/chambre-privee" className="text-warm-gray-light hover:text-cream transition-colors">Chambre privée</Link></li>
              <li><Link to="/logements/dependance" className="text-warm-gray-light hover:text-cream transition-colors">Dépendance</Link></li>
              <li><Link to="/logements/maison-entiere" className="text-warm-gray-light hover:text-cream transition-colors">Maison entière</Link></li>
              <li><Link to="/contact" className="text-warm-gray-light hover:text-cream transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-cream font-semibold text-lg mb-3">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Lestiac-sur-Garonne, Nouvelle-Aquitaine, France</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:contact@location-lestiac.fr" className="hover:text-cream transition-colors">
                  contact@location-lestiac.fr
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+33600000000" className="hover:text-cream transition-colors">
                  06 00 00 00 00
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-warm-gray/30 text-center text-xs text-warm-gray">
          &copy; {new Date().getFullYear()} Location à Lestiac sur Garonne. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
