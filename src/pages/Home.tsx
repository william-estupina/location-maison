import { Link } from 'react-router';
import { ArrowRight, MapPin, Waves, TreePine, Star, Quote, Home as HomeIcon } from 'lucide-react';
import { properties } from '../data/properties';
import { reviews } from '../data/reviews';
import PropertyCard from '../components/PropertyCard';
import FadeIn from '../components/FadeIn';

export default function Home() {
  document.title = 'Locations à Lestiac sur Garonne — Séjours au cœur des vignobles bordelais';

  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-16 lg:py-20">
            {/* Left — Text */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold text-white leading-tight">
                Votre séjour au cœur des vignobles bordelais
              </h1>
              <p className="mt-5 text-lg text-white/80 leading-relaxed">
                Découvrez nos 3 locations à Lestiac-sur-Garonne, entre Garonne et vignes,
                à seulement 25 km de Bordeaux. Piscine, jardin et tranquillité.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/locations"
                  className="inline-flex items-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  Découvrir nos locations
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                >
                  Nous contacter
                </Link>
              </div>
            </div>

            {/* Right — Photo mosaic */}
            <div className="relative grid grid-cols-2 gap-3 lg:gap-4">
              {/* Large photo — Pool (spans 2 cols) */}
              <div className="col-span-2 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/maison-entiere/photo2.jpeg"
                  alt="Piscine avec vue sur le village de Lestiac-sur-Garonne"
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover"
                />
              </div>
              {/* Bottom-left — Game room */}
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/maison-entiere/photo1.jpeg"
                  alt="Salle de jeux avec table de ping-pong et baby-foot"
                  className="w-full h-32 sm:h-40 lg:h-44 object-cover"
                />
              </div>
              {/* Bottom-right — Stone facade */}
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="/images/maison-entiere/photo6.png"
                  alt="Façade en pierre de la maison"
                  className="w-full h-32 sm:h-40 lg:h-44 object-cover"
                />
              </div>
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

      {/* À propos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6">
                <img
                  src="/images/profil.jpg"
                  alt="William et Mélaine"
                  className="w-48 h-48 rounded-full object-cover object-[0%_center] mx-auto ring-4 ring-terracotta/20 shadow-md"
                />
              </div>
              <h2 className="text-3xl font-bold text-charcoal">Qui sommes-nous ?</h2>
              <p className="mt-6 text-warm-gray leading-relaxed">
                Nous sommes William et Mélaine, un couple d'une trentaine d'années installé à
                Lestiac-sur-Garonne. William est ingénieur en informatique et Mélaine est
                manipulatrice en radiologie.
              </p>
              <p className="mt-4 text-warm-gray leading-relaxed">
                Notre aventure Airbnb a commencé il y a 3 ans, avec la location de deux
                chambres chez nous. Encouragés par les retours de nos voyageurs, nous avons
                ensuite aménagé puis entièrement rénové notre dépendance pour en faire un
                logement indépendant et confortable. L'été, nous proposons également la maison
                entière, pouvant accueillir jusqu'à 12 personnes — idéale pour les grandes
                tablées entre amis ou en famille.
              </p>
              <p className="mt-4 text-warm-gray leading-relaxed">
                Nous mettons un point d'honneur à accueillir chaque voyageur avec soin et à
                partager nos bonnes adresses de la région. Au passage, notre famille s'agrandit :
                nous attendons un petit garçon pour l'été 2026 !
              </p>
              <div className="mt-8 flex items-center justify-center gap-8 text-sm text-charcoal/70">
                <div className="flex items-center gap-2">
                  <HomeIcon size={16} className="text-terracotta" />
                  <span>3 ans d'expérience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star size={16} className="fill-terracotta text-terracotta" />
                  <span>Superhôtes Airbnb</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal">Ils nous ont laissé un commentaire</h2>
              <p className="mt-3 text-warm-gray max-w-2xl mx-auto">
                Découvrez les retours de nos voyageurs qui ont séjourné chez nous.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.slice(0, 6).map((review, index) => (
              <FadeIn key={index}>
                <div className="bg-white rounded-xl shadow-sm border border-warm-gray/10 p-6 h-full flex flex-col">
                  <Quote size={24} className="text-terracotta/30 mb-3" />
                  <p className="text-charcoal/80 text-sm leading-relaxed flex-1">
                    {review.text}
                  </p>
                  <div className="mt-4 pt-4 border-t border-warm-gray/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-charcoal">{review.author}</p>
                        <p className="text-xs text-warm-gray">{review.propertyType} — {review.date}</p>
                      </div>
                      <div className="flex gap-0.5">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} size={14} className="fill-terracotta text-terracotta" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Properties preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-charcoal">Nos locations</h2>
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
              to="/locations"
              className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-dark font-medium transition-colors"
            >
              Voir toutes nos locations
              <ArrowRight size={18} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
