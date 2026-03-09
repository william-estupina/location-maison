import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import FadeIn from '../components/FadeIn';
import usePageMeta from '../hooks/usePageMeta';

export default function Properties() {
  usePageMeta({
    title: 'Nos locations — Lestiac sur Garonne',
    description: 'Chambre privée, gîte indépendant ou maison entière avec piscine à Lestiac-sur-Garonne, à 25 km de Bordeaux. Trouvez la location idéale pour votre séjour.',
  });

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-charcoal">Nos locations</h1>
            <p className="mt-3 text-warm-gray max-w-2xl mx-auto">
              Choisissez la location qui correspond à vos besoins. Chambre privée pour un séjour en toute simplicité,
              gîte indépendant pour plus d'intimité, ou maison entière pour les grands groupes.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
