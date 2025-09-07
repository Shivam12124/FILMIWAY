"use client";
import { useRef, useEffect, useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  // Keyboard focus shortcut for '/'
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "/") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="header-searchbar-bar">
      <input
        ref={inputRef}
        type="search"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={e => e.key === "Enter" && onSearch?.(query)}
        placeholder="Search movies, shows, people... Press '/' to focus"
        aria-label="Search"
        className="header-searchbar-input"
      />
      <span className="header-searchbar-hint">/</span>
    </div>
  );
}
