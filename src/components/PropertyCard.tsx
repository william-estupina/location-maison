import { Link } from 'react-router';
import { Users, Star } from 'lucide-react';
import type { Property } from '../data/properties';
import FadeIn from './FadeIn';

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <FadeIn>
      <Link
        to={`/locations/${property.slug}`}
        className="group block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={property.photos[0]}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        <div className="p-5">
          <span className="text-xs font-medium text-terracotta uppercase tracking-wide">
            {property.type}
          </span>
          <h3 className="mt-1 text-lg font-semibold text-charcoal group-hover:text-terracotta transition-colors">
            {property.title}
          </h3>
          <p className="mt-2 text-sm text-warm-gray line-clamp-2">{property.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3 text-sm text-warm-gray">
              <span className="flex items-center gap-1">
                <Users size={14} />
                {property.capacity} pers.
              </span>
              <span className="flex items-center gap-1">
                <Star size={14} className="text-terracotta fill-terracotta" />
                {property.rating}
              </span>
            </div>
            <span className="text-lg font-semibold text-charcoal">
              {property.pricePerNight}€<span className="text-sm font-normal text-warm-gray">/nuit</span>
            </span>
          </div>
        </div>
      </Link>
    </FadeIn>
  );
}
