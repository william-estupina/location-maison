import {
  Bath,
  UtensilsCrossed,
  Waves,
  TreePine,
  Wifi,
  Car,
  BedDouble,
  Home,
  WashingMachine,
  Wind,
  Flame,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  'Salle de bain privée': Bath,
  'Cuisine partagée': UtensilsCrossed,
  'Cuisine équipée': UtensilsCrossed,
  'Piscine': Waves,
  'Piscine privée': Waves,
  'Jardin arboré': TreePine,
  'Grand jardin': TreePine,
  'Wi-Fi': Wifi,
  'Parking gratuit': Car,
  'Draps et serviettes': BedDouble,
  'Logement indépendant': Home,
  'Maison entière': Home,
  'Studio indépendant': Home,
  'Lave-linge': WashingMachine,
  'Sèche-linge': Wind,
  'Fer à repasser': Wind,
  'Barbecue': Flame,
};

export default function AmenityList({ amenities }: { amenities: string[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {amenities.map((amenity) => {
        const Icon = iconMap[amenity] || Home;
        return (
          <div
            key={amenity}
            className="flex items-center gap-2 bg-cream-dark rounded-lg px-3 py-2.5 text-sm text-charcoal"
          >
            <Icon size={18} className="text-terracotta shrink-0" />
            <span>{amenity}</span>
          </div>
        );
      })}
    </div>
  );
}
