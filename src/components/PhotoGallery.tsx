import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function PhotoGallery({ photos, title }: { photos: string[]; title: string }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? photos.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === photos.length - 1 ? 0 : c + 1));

  return (
    <div className="relative">
      {/* Main image */}
      <div className="aspect-[16/9] md:aspect-[2/1] overflow-hidden rounded-2xl bg-cream-dark">
        <img
          src={photos[current]}
          alt={`${title} - Photo ${current + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-colors"
        aria-label="Photo précédente"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-colors"
        aria-label="Photo suivante"
      >
        <ChevronRight size={20} />
      </button>

      {/* Counter */}
      <div className="absolute bottom-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
        {current + 1} / {photos.length}
      </div>

      {/* Thumbnails */}
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {photos.map((photo, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-colors ${
              i === current ? 'border-terracotta' : 'border-transparent opacity-70 hover:opacity-100'
            }`}
            aria-label={`Voir photo ${i + 1}`}
          >
            <img src={photo} alt={`${title} - miniature ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  );
}
