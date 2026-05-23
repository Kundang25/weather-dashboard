import { SearchIcon } from "./Icons";

const QUICK_CITIES = [
  "Delhi",
  "Mumbai",
  "Bengaluru",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
];

export default function SearchBar({
  onSearch,
  loading,
  value,
  onValueChange,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) onSearch(value.trim());
  };

  const handleChip = (city) => {
    onValueChange(city);
    onSearch(city);
  };

  return (
    <section className="search-section">
      <form onSubmit={handleSubmit} className="search-row">
        <div className="search-input-wrap">
          <span className="search-input-icon">
            <SearchIcon />
          </span>
          <input
            className="search-input"
            type="text"
            placeholder="Search city..."
            value={value}
            onChange={(e) => onValueChange(e.target.value)}
            disabled={loading}
          />
        </div>
        <button
          className="search-btn"
          type="submit"
          disabled={loading || !value.trim()}
        >
          {loading ? "Searching…" : "Search"}
        </button>
      </form>

      <div className="popular-cities">
        <span className="popular-label">Popular cities:</span>
        <div className="city-pills">
          {QUICK_CITIES.map((city) => (
            <button
              key={city}
              className="city-pill"
              onClick={() => handleChip(city)}
              type="button"
              disabled={loading}
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
