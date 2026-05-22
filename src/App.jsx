import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherStats from "./components/WeatherStats";
import ForecastBar from "./components/ForecastBar";
import { fetchWeather, fetchForecast } from "./ api/weather";
import "./App.css";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city) => {
    setLoading(true);
    setError("");
    try {
      const [weatherData, forecastData] = await Promise.all([
        fetchWeather(city),
        fetchForecast(city),
      ]);
      setWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError("City not found. Please try again.");
      setWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="bg-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <div className="container">
        <header className="header">
          <div className="logo">
            <span className="logo-icon">☀️</span>
            <span className="logo-text">WeatherNest</span>
          </div>
          <p className="tagline">Live, local, and always accurate</p>
        </header>

        <SearchBar onSearch={handleSearch} loading={loading} />

        {error && (
          <div className="error-banner">
            <span>⚠️</span> {error}
          </div>
        )}

        {loading && (
          <div className="loader-wrapper">
            <div className="loader" />
            <p>Fetching weather data…</p>
          </div>
        )}

        {weather && !loading && (
          <div className="results">
            <WeatherCard weather={weather} />
            <WeatherStats weather={weather} />
            {forecast && <ForecastBar forecast={forecast} />}
          </div>
        )}

        {!weather && !loading && !error && (
          <div className="empty-state">
            <div className="empty-icon">🌍</div>
            <p>Search any city to see live weather</p>
          </div>
        )}
      </div>
    </div>
  );
}
