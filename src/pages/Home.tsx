import { Link } from 'react-router';
import { ArrowRight, MapPin, Waves, TreePine } from 'lucide-react';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import FadeIn from '../components/FadeIn';

export default function Home() {
  document.title = 'Location à Lestiac sur Garonne — Séjours au cœur des vignobles bordelais';

  return (
    <>
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={properties[1].photos[0]}
            alt="Vue de la propriété à Lestiac-sur-Garonne"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Votre séjour au cœur des vignobles bordelais
            </h1>
            <p className="mt-4 text-lg text-white/90 leading-relaxed">
              Découvrez nos 3 logements à Lestiac-sur-Garonne, entre Garonne et vignes,
              à seulement 25 km de Bordeaux. Piscine, jardin et tranquillité.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/logements"
                className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                Découvrir nos logements
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-medium px-6 py-3 rounded-lg backdrop-blur-sm transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-terracotta/10 text-terracotta">
                  <MapPin size={24} />
                </div>
                <h3 className="font-semibold text-charcoal">Emplacement idéal</h3>
                <p className="text-sm text-warm-gray">
                  Village pittoresque entouré de vignobles, à 25 km de Bordeaux et 5 min de la Garonne.
                </p>
              </div>
              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-terracotta/10 text-terracotta">
                  <Waves size={24} />
                </div>
                <h3 className="font-semibold text-charcoal">Piscine & détente</h3>
                <p className="text-sm text-warm-gray">
                  Profitez de la piscine et du jardin arboré pour des moments de détente inoubliables.
                </p>
              </div>
              <div className="space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-terracotta/10 text-terracotta">
                  <TreePine size={24} />
                </div>
                <h3 className="font-semibold text-charcoal">Calme & nature</h3>
                <p className="text-sm text-warm-gray">
                  Un cadre paisible en pleine campagne bordelaise, idéal pour se ressourcer.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Properties preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal">Nos logements</h2>
              <p className="mt-3 text-warm-gray max-w-2xl mx-auto">
                3 formules pour répondre à toutes vos envies : en solo, en couple, en famille ou entre amis.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
          <FadeIn className="text-center mt-10">
            <Link
              to="/logements"
              className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-dark font-medium transition-colors"
            >
              Voir tous nos logements
              <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
