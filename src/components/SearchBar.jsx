import { useState } from "react";

const QUICK_CITIES = ["Delhi", "Mumbai", "London", "New York", "Tokyo", "Dubai", "Paris", "Sydney"];

export default function SearchBar({ onSearch, loading }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) onSearch(input.trim());
  };

  const handleChip = (city) => {
    setInput(city);
    onSearch(city);
  };

  return (
    <div className="search-wrapper">
      <form onSubmit={handleSubmit} className="search-row">
        <input
          className="search-input"
          type="text"
          placeholder="Search for a city..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
        />
        <button className="search-btn" type="submit" disabled={loading || !input.trim()}>
          {loading ? "Loading…" : "Check Weather"}
        </button>
      </form>

      <div className="quick-cities">
        {QUICK_CITIES.map((city) => (
          <button key={city} className="city-chip" onClick={() => handleChip(city)} type="button">
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}
