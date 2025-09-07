import React from 'react';

function SearchResultCard({ item }) {
  return (
    <li
      tabIndex={0}
      role="link"
      aria-label={`Go to details about ${item.title || item.name}`}
      onClick={() => window.location.href = `/${item.media_type}/${item.id}`}
      className="cursor-pointer rounded-lg bg-[#111] shadow-md hover:shadow-yellow-500 transition-shadow duration-300 outline-none focus:ring-4 focus:ring-yellow-400"
    >
      {item.poster_path || item.profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w342${item.poster_path || item.profile_path}`}
          alt={item.title || item.name}
          loading="lazy"
          className="rounded-lg w-full h-[400px] object-cover mb-4"
        />
      ) : (
        <div className="w-full h-[400px] flex items-center justify-center rounded-lg bg-gray-700 text-yellow-600 font-black text-7xl mb-4">
          ?
        </div>
      )}
      <div className="px-4 pb-4">
        <h3 className="text-2xl font-bold truncate mb-1 text-white">{item.title || item.name}</h3>
        <p className="uppercase text-yellow-500 font-semibold mb-1 tracking-widest">{item.media_type === 'movie' ? 'MOVIE' : item.media_type === 'tv' ? 'TV SHOW' : 'PERSON'}</p>
        <p className="text-yellow-400 text-sm">{(item.release_date || item.first_air_date)?.slice(0,4) ?? 'Unknown'} {item.vote_average ? `· ⭐ ${item.vote_average.toFixed(1)}` : ''}</p>
      </div>
    </li>
  );
}

export default function Results({ results, activeTab }) {
  const filtered = activeTab === 'all' ? results : results.filter(r => r.media_type === activeTab);

  if (!filtered.length) {
    return <p className="text-yellow-600 text-xl py-20 text-center">No results for this category.</p>;
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
      {filtered.map(item => <SearchResultCard key={item.id + item.media_type} item={item} />)}
    </ul>
  );
}
