import { useParams, Link, Navigate } from 'react-router';
import { Users, BedDouble, Bath, Star, ExternalLink, ArrowLeft, MessageCircle } from 'lucide-react';
import { properties } from '../data/properties';
import PhotoGallery from '../components/PhotoGallery';
import AmenityList from '../components/AmenityList';
import FadeIn from '../components/FadeIn';

export default function PropertyDetail() {
  const { slug } = useParams<{ slug: string }>();
  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    return <Navigate to="/locations" replace />;
  }

  document.title = `${property.title} — Locations à Lestiac sur Garonne`;

  return (
    <section className="py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <Link
          to="/locations"
          className="inline-flex items-center gap-1 text-sm text-warm-gray hover:text-terracotta transition-colors mb-6"
        >
          <ArrowLeft size={16} />
          Retour aux locations
        </Link>

        {/* Gallery */}
        <PhotoGallery photos={property.photos} title={property.title} />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <FadeIn>
              <div>
                <span className="text-sm font-medium text-terracotta uppercase tracking-wide">
                  {property.type}
                </span>
                <h1 className="mt-1 text-3xl font-bold text-charcoal">{property.title}</h1>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-warm-gray">
                  <span className="flex items-center gap-1">
                    <Users size={16} />
                    {property.capacity} voyageurs
                  </span>
                  <span className="flex items-center gap-1">
                    <BedDouble size={16} />
                    {property.bedrooms} chambre{property.bedrooms > 1 ? 's' : ''}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath size={16} />
                    {property.bathrooms} salle{property.bathrooms > 1 ? 's' : ''} de bain
                  </span>
                  <span className="flex items-center gap-1">
                    <Star size={16} className="text-terracotta fill-terracotta" />
                    {property.rating} ({property.reviews} avis)
                  </span>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <h2 className="text-xl font-semibold text-charcoal mb-3">Description</h2>
                <div className="text-warm-gray leading-relaxed whitespace-pre-line">
                  {property.longDescription}
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <h2 className="text-xl font-semibold text-charcoal mb-4">Équipements</h2>
                <AmenityList amenities={property.amenities} />
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FadeIn>
              <div className="sticky top-24 bg-white rounded-2xl shadow-md p-6 space-y-5">
                <div className="text-center">
                  <span className="text-3xl font-bold text-charcoal">{property.pricePerNight}€</span>
                  <span className="text-warm-gray"> / nuit</span>
                </div>

                <div className="border-t border-cream-dark pt-4 space-y-2 text-sm text-warm-gray">
                  <div className="flex justify-between">
                    <span>Capacité</span>
                    <span className="font-medium text-charcoal">{property.capacity} personnes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chambres</span>
                    <span className="font-medium text-charcoal">{property.bedrooms}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Salles de bain</span>
                    <span className="font-medium text-charcoal">{property.bathrooms}</span>
                  </div>
                </div>

                <a
                  href={property.airbnbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-terracotta hover:bg-terracotta-dark text-white font-medium py-3 rounded-lg transition-colors"
                >
                  <ExternalLink size={16} />
                  Voir sur Airbnb
                </a>

                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-white font-medium py-3 rounded-lg transition-colors"
                >
                  <MessageCircle size={16} />
                  Nous contacter
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
