export interface Property {
  slug: string;
  title: string;
  type: string;
  description: string;
  longDescription: string;
  capacity: number;
  bedrooms: number;
  bathrooms: number;
  pricePerNight: number;
  rating: number;
  reviews: number;
  airbnbUrl: string;
  photos: string[];
  amenities: string[];
}

export const properties: Property[] = [
  {
    slug: 'chambre-privee',
    title: 'Chambre confortable et lumineuse',
    type: 'Chambre privée',
    description:
      'Chambre dans maison en pierre rénovée avec salle de bain privée, au cœur des vignobles bordelais.',
    longDescription: `Chambre confortable et lumineuse dans une maison en pierre rénovée. Salle de bain privée et attenante. Les toilettes se trouvent sur le palier.

Idéal pour visiter la région bordelaise et ses environs. Vous pourrez disposer de la cuisine pour prendre vos repas. Possibilité de réserver une deuxième chambre.

Située dans un village entouré de vignes et à 5 min à pied des bords de la Garonne. Vous pourrez profiter du jardin arboré et de la piscine ouverte en été. 25 km de la Gare Saint-Jean de Bordeaux.`,
    capacity: 2,
    bedrooms: 1,
    bathrooms: 1,
    pricePerNight: 35,
    rating: 4.86,
    reviews: 43,
    airbnbUrl: 'https://www.airbnb.fr/rooms/827463874858032914',
    photos: [
      '/images/chambre-privee/photo1.jpg',
      '/images/chambre-privee/photo2.jpg',
      '/images/chambre-privee/photo3.jpg',
      '/images/chambre-privee/photo4.jpg',
      '/images/chambre-privee/photo5.jpg',
      '/images/chambre-privee/photo6.jpg',
      '/images/chambre-privee/photo7.jpg',
      '/images/chambre-privee/photo8.jpg',
    ],
    amenities: [
      'Salle de bain privée',
      'Cuisine partagée',
      'Piscine',
      'Jardin arboré',
      'Wi-Fi',
      'Parking gratuit',
      'Draps et serviettes',
      'Fer à repasser',
    ],
  },
  {
    slug: 'dependance',
    title: 'Gite charmant indépendant au bord de la piscine',
    type: 'Dépendance',
    description:
      'Logement indépendant entièrement rénové avec accès direct à la piscine, dans un village viticole.',
    longDescription: `Gite charmant indépendant au bord de la piscine, dans un village typique de la région bordelaise, à environ 25 km de la ville.

Logement entièrement rénové, idéal pour les couples ou les petites familles à la recherche d'un week-end au calme à la campagne ou de vacances ressourçantes.

Situé près des bords de la Garonne et entouré de vignobles de l'Entre-deux-Mers. Vous profiterez d'une piscine et d'un grand jardin arboré.`,
    capacity: 5,
    bedrooms: 2,
    bathrooms: 1,
    pricePerNight: 65,
    rating: 4.9,
    reviews: 29,
    airbnbUrl: 'https://www.airbnb.fr/rooms/916431840455436518',
    photos: [
      '/images/dependance/photo1.png',
      '/images/dependance/photo2.jpeg',
      '/images/dependance/photo3.jpeg',
      '/images/dependance/photo4.jpeg',
      '/images/dependance/photo5.jpg',
      '/images/dependance/photo6.jpeg',
      '/images/dependance/photo7.jpeg',
      '/images/dependance/photo8.jpeg',
    ],
    amenities: [
      'Logement indépendant',
      'Piscine',
      'Jardin arboré',
      'Cuisine équipée',
      'Wi-Fi',
      'Parking gratuit',
      'Lave-linge',
      'Draps et serviettes',
    ],
  },
  {
    slug: 'maison-entiere',
    title: 'Maison chaleureuse avec piscine proche Bordeaux',
    type: 'Maison entière',
    description:
      'Grande maison spacieuse avec piscine privée, jardin et studio indépendant, idéale pour les grands groupes.',
    longDescription: `Détendez-vous, vous ne manquerez pas de place dans ce logement spacieux avec jardin et sa piscine privée.

La propriété se compose de deux parties :
- La maison principale (en premier plan côté route) : cuisine, salle à manger, salon, 4 chambres et 3 salles de bain aux étages supérieurs.
- Un studio attenant avec entrée séparée.

Idéale pour les grandes familles ou groupes d'amis souhaitant profiter du calme de la campagne bordelaise tout en restant à proximité de la ville.`,
    capacity: 12,
    bedrooms: 4,
    bathrooms: 3,
    pricePerNight: 350,
    rating: 5.0,
    reviews: 4,
    airbnbUrl: 'https://www.airbnb.fr/rooms/1272980632776111973',
    photos: [
      '/images/maison-entiere/photo1.jpeg',
      '/images/maison-entiere/photo2.jpeg',
      '/images/maison-entiere/photo3.jpeg',
      '/images/maison-entiere/photo4.jpeg',
      '/images/maison-entiere/photo5.jpeg',
      '/images/maison-entiere/photo6.png',
    ],
    amenities: [
      'Maison entière',
      'Piscine privée',
      'Grand jardin',
      'Cuisine équipée',
      'Studio indépendant',
      'Wi-Fi',
      'Parking gratuit',
      'Lave-linge',
      'Sèche-linge',
      'Barbecue',
    ],
  },
];
