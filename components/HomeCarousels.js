import React, { useRef, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Star, Flame, Shield, ArrowRight } from 'lucide-react';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

// ⚡ PURE CSS CARD - Optimized Next/Image for LCP
export const CollectionCard = memo(({ collection, index, href, isPrioritySection }) => {
  const shouldPrioritize = false;

  return (
    <Link
      href={href}
      className="group cursor-pointer select-none relative transition-transform duration-300 hover:-translate-y-2 block shrink-0"
      style={{ 
         width: 'clamp(140px, 35vw, 220px)', 
         height: 'clamp(210px, 52.5vw, 330px)' 
      }}
    >
      <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden bg-gray-900 border border-white/10 group-hover:border-yellow-400/50 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.8)]">
        <div className="relative w-full h-full">
          <Image
            src={collection.poster_path ? `${IMAGE_BASE_URL}/w342${collection.poster_path}` : "https://via.placeholder.com/342x513/111827/4b5563?text=No+Image"}
            alt={collection.title}
            width={342}
            height={513}
            priority={shouldPrioritize}
            quality={40} 
            sizes="(max-width: 640px) 120px, 250px"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            draggable={false}
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/10 to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-500 z-10 pointer-events-none" />

        <div className="absolute top-2 left-2 right-2 sm:top-3 sm:left-3 sm:right-3 z-20 flex justify-between items-start pointer-events-none">
          <div className="bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] sm:text-xs font-bold text-white border border-white/10 flex items-center gap-1 shadow-lg">
            <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 fill-current" />
            {collection.vote_average}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-20 pointer-events-none transform translate-y-1 sm:translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-white font-semibold sm:font-bold text-sm sm:text-base leading-tight mb-1 line-clamp-3 group-hover:text-yellow-400 transition-colors duration-300 drop-shadow-md">
            {collection.title}
          </h3>
        </div>
      </div>
    </Link>
  );
});
CollectionCard.displayName = 'CollectionCard';

// ⚡ TOP 10 MOVIE CARD (NETFLIX STYLE)
export const Top10MovieCard = memo(({ movie, index }) => {
  const rank = index + 1;
  const isDoubleDigit = rank >= 10;
  const posterUrl = movie.posterUrl || "https://via.placeholder.com/342x513/111827/4b5563?text=No+Image";
  const shouldPrioritize = false; 
  
  const movieSlug = movie.slug || (movie.Title || movie.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

  return (
    <Link
      href={`/movie/${movieSlug}`}
      className="group relative flex items-end shrink-0 transition-transform duration-300 hover:-translate-y-2 pl-4 sm:pl-6"
      style={{ 
         width: 'clamp(215px, 53.8vw, 338px)', 
         height: 'clamp(210px, 52.5vw, 330px)' 
      }}
    >
      <div 
         className={`absolute ${isDoubleDigit ? 'left-[-45px] sm:left-[-75px]' : 'left-[-10px] sm:left-[-20px]'} bottom-[-15px] sm:bottom-[-20px] z-0 leading-none text-transparent select-none pointer-events-none drop-shadow-2xl`}
         style={{
           fontSize: 'clamp(170px, 35vw, 280px)',
           fontWeight: '900',
           WebkitTextStroke: '3px #d4d4d8', 
           letterSpacing: isDoubleDigit ? '-0.12em' : '-0.05em',
           fontFamily: '"Arial Black", "Impact", sans-serif'
         }}
      >
        {rank}
      </div>
      <div className="absolute right-0 w-[65%] h-full z-10 rounded-lg overflow-hidden border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.8)] group-hover:border-yellow-400/50 transition-all duration-300 bg-gray-900">
        <Image src={posterUrl} alt={movie.Title} width={342} height={513} priority={shouldPrioritize} quality={40} sizes="(max-width: 640px) 120px, 250px" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </Link>
  );
});
Top10MovieCard.displayName = 'Top10MovieCard';

// ⚡ TOP 10 CAROUSEL
export const Top10Carousel = memo(({ movies }) => {
  const scrollContainerRef = useRef(null);
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth + 50 : clientWidth - 50;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  if (!movies || movies.length === 0) return null;
  return (
    <div className="relative group/carousel mt-4 sm:mt-8 mb-4">
      <button onClick={() => scroll('left')} className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/90 backdrop-blur-xl rounded-full border border-white/10 items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:border-white/30 hover:scale-110 shadow-2xl" aria-label="Scroll left"><ChevronLeft className="w-5 h-5 text-white" /></button>
      <button onClick={() => scroll('right')} className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/90 backdrop-blur-xl rounded-full border border-white/10 items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:border-white/30 hover:scale-110 shadow-2xl" aria-label="Scroll right"><ChevronRight className="w-5 h-5 text-white" /></button>
      <div ref={scrollContainerRef} className="flex overflow-x-auto gap-4 sm:gap-6 pb-12 pt-4 px-2 sm:px-4 snap-x snap-mandatory hide-scrollbar scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {movies.map((movie, index) => <div key={movie.imdbID} className="snap-start flex-shrink-0"><Top10MovieCard movie={movie} index={index} /></div>)}
      </div>
    </div>
  );
});
Top10Carousel.displayName = 'Top10Carousel';

// ⚡ NATIVE CAROUSEL
export const ProfessionalCarousel = memo(({ collections, sectionRef, isPrioritySection }) => {
  const scrollContainerRef = useRef(null);
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth + 50 : clientWidth - 50;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  const safeCollections = Array.isArray(collections) ? collections : [];
  if (safeCollections.length === 0) return null;
  return (
    <div ref={sectionRef} className="relative group/carousel">
      <button onClick={() => scroll('left')} className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/90 backdrop-blur-xl rounded-full border border-white/10 items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:border-white/30 hover:scale-110 shadow-2xl" aria-label="Scroll left"><ChevronLeft className="w-5 h-5 text-white" /></button>
      <button onClick={() => scroll('right')} className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-black/90 backdrop-blur-xl rounded-full border border-white/10 items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:border-white/30 hover:scale-110 shadow-2xl" aria-label="Scroll right"><ChevronRight className="w-5 h-5 text-white" /></button>
      <div ref={scrollContainerRef} className="flex overflow-x-auto gap-4 sm:gap-6 pb-6 pt-2 px-1 snap-x snap-mandatory hide-scrollbar scroll-smooth" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {safeCollections.map((collection, index) => <div key={collection.id} className="flex-shrink-0 snap-start"><CollectionCard collection={collection} index={index} href={`/collection/${collection.id}`} isPrioritySection={isPrioritySection} /></div>)}
      </div>
    </div>
  );
});
ProfessionalCarousel.displayName = 'ProfessionalCarousel';

// ⚡ MOVIE SECTION
export const MovieSection = memo(({ title, movies, description, sectionRef, viewAllLink, isPrioritySection }) => (
  <section className="mb-12 sm:mb-20 select-none" style={!isPrioritySection ? { contentVisibility: 'auto', containIntrinsicSize: '450px' } : {}}>
    <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-8 px-1">
      <div><h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight mb-1 sm:mb-2">{title}</h2><p className="text-sm sm:text-base text-gray-400 font-light max-w-2xl">{description}</p></div>
      <Link href={viewAllLink || "/collections"} className="inline-block mt-4 sm:mt-0 text-xs font-semibold text-yellow-500 hover:text-yellow-400 transition-colors uppercase tracking-widest" aria-label={`View all ${title} collections`}>Explore All</Link>
    </div>
    <ProfessionalCarousel collections={movies} sectionRef={sectionRef} isPrioritySection={isPrioritySection} />
  </section>
));
MovieSection.displayName = 'MovieSection';

// ⚡ TOP 10 SECTION
export const Top10Section = memo(({ title, movies, description }) => (
  <section className="mb-12 sm:mb-20 select-none" style={{ contentVisibility: 'auto', containIntrinsicSize: '450px' }}>
    <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 sm:mb-8 px-1">
      <div><h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight mb-1 sm:mb-2 flex items-center gap-3"><Flame className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />{title}</h2><p className="text-sm sm:text-base text-gray-400 font-light max-w-2xl">{description}</p></div>
    </div>
    <Top10Carousel movies={movies} />
  </section>
));
Top10Section.displayName = 'Top10Section';

// ⚡ QUICK LINKS SECTION
export const QuickLinksSection = memo(({ title, movies }) => {
  if (!movies || movies.length === 0) return null;
  return (
    <section className="mt-8 sm:mt-12 mb-4 sm:mb-8" style={{ contentVisibility: 'auto' }}>
      <div className="border-t border-white/5 pt-8 sm:pt-10">
        <div className="flex items-center gap-2.5 mb-5 px-1"><Shield className="w-5 h-5 text-yellow-500" /><h2 className="text-sm sm:text-base font-bold text-gray-200 tracking-wide">{title}</h2></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 px-1">
          {movies.slice(0, 10).map((movie) => {
            const movieSlug = movie.slug || (movie.Title || movie.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
            return (
              <Link key={movie.imdbID} href={`/movie/${movieSlug}`} className="group relative flex items-center justify-between p-3.5 sm:p-4 bg-[#0a0a0a] border border-white/5 hover:border-yellow-500/30 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-500/10 hover:to-transparent overflow-hidden shadow-sm hover:shadow-lg">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="flex flex-col min-w-0 pr-3"><span className="font-semibold text-sm sm:text-base text-gray-300 group-hover:text-yellow-400 transition-colors truncate">{movie.Title || movie.title}</span><span className="text-[10px] sm:text-xs text-gray-600 font-medium tracking-wider mt-1 uppercase">{movie.year || movie.Year} • Parents Guide</span></div>
              <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-yellow-400 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 shrink-0" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
});
QuickLinksSection.displayName = 'QuickLinksSection';