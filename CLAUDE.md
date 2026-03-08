# CLAUDE.md

Ce fichier fournit des instructions à Claude Code (claude.ai/code) pour travailler avec le code de ce dépôt.

## Aperçu du projet

Site web de location de vacances en français pour des propriétés à Lestiac-sur-Garonne (région bordelaise). Application monopage React 19 avec des données statiques (pas de backend ni de base de données). Tout le contenu est en français.

## Commandes

```bash
npm run dev          # Serveur de développement Vite avec HMR
npm run build        # Vérification TypeScript + build de production Vite
npm run lint         # ESLint sur les fichiers .ts/.tsx
npm run preview      # Prévisualisation du build de production
```

Aucun framework de test n'est configuré.

## Architecture

**Stack :** React 19 + TypeScript + Vite 7 + Tailwind CSS v4 + React Router v7

**Routage** (défini dans `src/App.tsx`) :
- `/` → Accueil (hero + propriétés mises en avant)
- `/logements` → Liste des propriétés
- `/logements/:slug` → Détail d'une propriété avec galerie photo
- `/contact` → Formulaire de contact

**Hiérarchie des composants :**
```
App (BrowserRouter)
└── Layout (Navbar + Outlet + Footer, scroll-to-top à la navigation)
    ├── Home
    ├── Properties (grille de PropertyCard)
    ├── PropertyDetail (PhotoGallery + AmenityList)
    └── Contact (ContactForm)
```

**Modèle de données :** Les données des propriétés sont codées en dur dans `src/data/properties.ts` — trois niveaux de location (chambre, dépendance, maison entière) avec photos hébergées sur le CDN Airbnb. Les propriétés renvoient vers Airbnb via `airbnbUrl`.

**Style :** Classes utilitaires Tailwind avec un thème de couleurs personnalisé défini en variables CSS dans `src/index.css` (cream, terracotta, olive, charcoal, warm-gray).

**Animation :** Le composant `FadeIn` utilise IntersectionObserver pour des animations de fondu au défilement.

## TypeScript

Mode strict activé avec `noUnusedLocals`, `noUnusedParameters` et `noFallthroughCasesInSwitch`. ESLint utilise le format de configuration flat (`eslint.config.js`).
