import React from "react";
import "../styles.css";

export default function SearchBar({ searchTerm, handleSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search for a cryptocurrency..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
