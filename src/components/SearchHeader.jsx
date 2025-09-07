import React from "react";

export default function SearchHeader({
  query,
  suggestions,
  onSuggestionClick,
  activeTab,
  setActiveTab,
}) {
  return (
    <>
      <h1 className="text-5xl font-extrabold mb-8 text-yellow-500">
        Search results for <span className="italic text-white">{`"${query}"`}</span>
      </h1>

      {suggestions.length > 0 && (
        <div className="mb-12 flex flex-wrap gap-4 items-center text-yellow-400">
          <span>Did you mean</span>
          {suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => onSuggestionClick(s)}
              className="px-5 py-2 rounded-full bg-yellow-700 bg-opacity-20 hover:bg-yellow-600 transition-shadow duration-300"
            >
              {s}
            </button>
          ))}
          <span>?</span>
        </div>
      )}

      <nav role="tablist" className="flex gap-12 mb-12 border-b border-yellow-700">
        {["all", "movie", "tv", "person"].map((type) => (
          <button
            key={type}
            role="tab"
            tabIndex={activeTab === type ? 0 : -1}
            aria-selected={activeTab === type}
            onClick={() => setActiveTab(type)}
            className={`pb-3 text-lg font-semibold tracking-wide cursor-pointer ${
              activeTab === type
                ? "border-b-4 border-yellow-500 text-yellow-500"
                : "border-b-4 border-transparent text-yellow-600 hover:text-yellow-500"
            }`}
          >
            {type === "all"
              ? "All"
              : type === "tv"
              ? "TV Shows"
              : type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </nav>
    </>
  );
}
