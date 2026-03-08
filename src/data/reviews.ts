export interface Review {
  author: string;
  date: string;
  text: string;
  rating: number;
  propertySlug: string;
  propertyType: string;
}

export const reviews: Review[] = [
  {
    author: 'Evancya',
    date: 'Février 2025',
    text: 'Nous avons passé un super week-end, un accueil au top du top alors que nous sommes arrivés entre 23h30 et 00h. Très calme, nous avons très bien dormi ! Encore merci à vous nous reviendrons !',
    rating: 5,
    propertySlug: 'chambre-privee',
    propertyType: 'Chambre privée',
  },
  {
    author: 'Aimée',
    date: 'Mai 2025',
    text: 'Endroit parfait pour se ressourcer. Le gîte est décoré avec goût, tout est neuf et fonctionnel. La piscine au bord du logement est un vrai plus. Nos enfants ont adoré le grand jardin. Hôtes très disponibles.',
    rating: 5,
    propertySlug: 'dependance',
    propertyType: 'Dépendance',
  },
  {
    author: 'Marie',
    date: 'Août 2025',
    text: 'Notre séjour s\'est très bien passé. L\'emplacement est paisible, le logement très propre. Nous étions véhiculés et avons pu profiter de Bordeaux et visiter St Émilion à proximité. Nous remercions Mélaine et William pour leur service.',
    rating: 5,
    propertySlug: 'maison-entiere',
    propertyType: 'Maison entière',
  },
  {
    author: 'Gaetan',
    date: 'Août 2023',
    text: 'Nous y sommes resté une semaine, accueil au top ! Le lieu est identique à la description. Magnifique maison dans un environnement très calme et reposant. Les hôtes sont super gentils et très réactif en cas de besoin. Nous recommandons à 100%',
    rating: 5,
    propertySlug: 'chambre-privee',
    propertyType: 'Chambre privée',
  },
  {
    author: 'Mathilde',
    date: 'Août 2024',
    text: 'Notre séjour s\'est très bien passé. Mélaine est une hôte très réactive et d\'une grande aide. Le gîte est très bien et confortable. La terrasse donne directement sur la piscine, un grand plus!',
    rating: 5,
    propertySlug: 'dependance',
    propertyType: 'Dépendance',
  },
  {
    author: 'Florian',
    date: 'Juin 2025',
    text: 'Nous avons passé un super week-end entre amis dans le logement de Mélaine grâce à ses nombreux équipements. La maison était très propre et les environs calmes. Tout était parfait ! Les échanges ont été très simples et Mélaine a été très arrangeante avec nous. Encore merci !',
    rating: 5,
    propertySlug: 'maison-entiere',
    propertyType: 'Maison entière',
  },
];
