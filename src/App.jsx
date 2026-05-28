import { useState, useEffect, useCallback } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherStats from "./components/WeatherStats";
import TodayAtGlance from "./components/TodayAtGlance";
import ForecastBar from "./components/ForecastBar";
import {
  LogoIcon,
  SunToggleIcon,
  MoonToggleIcon,
  LocationIcon,
} from "./components/Icons";
import {
  fetchWeather,
  fetchForecast,
  fetchWeatherByCoords,
  fetchForecastByCoords,
} from "./ api/weather";
import "./App.css";

function geolocationErrorMessage(code) {
  switch (code) {
    case 1:
      return "Location access denied. Allow location in your browser settings, then try again.";
    case 2:
      return "Your location could not be determined. Try searching for a city instead.";
    case 3:
      return "Location request timed out. Please try again.";
    default:
      return "Could not get your location. Try searching for a city instead.";
  }
}

export default function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [locating, setLocating] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMyLocation, setIsMyLocation] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    const saved = window.localStorage.getItem("weather-theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("weather-theme", theme);
  }, [theme]);

  const applyWeather = useCallback((weatherData, forecastData, queryLabel) => {
    setWeather(weatherData);
    setForecast(forecastData);
    if (queryLabel) setSearchQuery(queryLabel);
  }, []);

  const loadWeatherByCity = useCallback(
    async (city, { fromLocation = false } = {}) => {
      setLoading(true);
      setError("");
      if (!fromLocation) setIsMyLocation(false);

      try {
        const [weatherData, forecastData] = await Promise.all([
          fetchWeather(city),
          fetchForecast(city),
        ]);
        applyWeather(weatherData, forecastData, city);
      } catch (err) {
        setError(
          err.message?.includes("API key")
            ? err.message
            : "City not found. Please try again."
        );
        setWeather(null);
        setForecast(null);
      } finally {
        setLoading(false);
      }
    },
    [applyWeather]
  );

  const loadWeatherByCoords = useCallback(
    async (lat, lon) => {
      setLoading(true);
      setError("");
      setIsMyLocation(true);

      try {
        const [weatherData, forecastData] = await Promise.all([
          fetchWeatherByCoords(lat, lon),
          fetchForecastByCoords(lat, lon),
        ]);
        applyWeather(weatherData, forecastData, weatherData.name);
      } catch (err) {
        setError(
          err.message?.includes("API key")
            ? err.message
            : "Could not fetch weather for your location. Please try again."
        );
        setWeather(null);
        setForecast(null);
        setIsMyLocation(false);
      } finally {
        setLoading(false);
      }
    },
    [applyWeather]
  );

  useEffect(() => {
    loadWeatherByCity("Delhi");
  }, [loadWeatherByCity]);

  const handleMyLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported in your browser.");
      return;
    }

    setLocating(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        loadWeatherByCoords(latitude, longitude).finally(() => {
          setLocating(false);
        });
      },
      (err) => {
        setError(geolocationErrorMessage(err.code));
        setLocating(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 300000,
      }
    );
  };

  const handleCitySearch = (city) => {
    setSearchQuery(city);
    loadWeatherByCity(city);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className="app">
      <div className="page">
        <header className="site-header">
          <div className="brand">
            <LogoIcon />
            <div>
              <h1 className="brand-name">WeatherNest</h1>
              <p className="brand-tagline">Live, Local, and Always Accurate</p>
            </div>
          </div>
          <div className="header-actions">
            <button
              type="button"
              className="icon-btn"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              onClick={toggleTheme}
            >
              {theme === "dark" ? <SunToggleIcon /> : <MoonToggleIcon />}
            </button>
            <button
              type="button"
              className={`location-btn${isMyLocation ? " location-btn--active" : ""}`}
              onClick={handleMyLocation}
              disabled={locating || loading}
              aria-pressed={isMyLocation}
            >
              <LocationIcon />
              {locating ? "Locating…" : "My Location"}
            </button>
          </div>
        </header>

        <SearchBar
          onSearch={handleCitySearch}
          loading={loading}
          value={searchQuery}
          onValueChange={(v) => {
            setSearchQuery(v);
            setIsMyLocation(false);
          }}
        />

        {isMyLocation && weather && !loading && !error && (
          <p className="location-hint">Showing weather for your current location</p>
        )}

        {error && (
          <div className="error-banner" role="alert">
            {error}
          </div>
        )}

        {loading && (
          <div className="loader-wrapper">
            <div className="loader" />
            <p>{locating ? "Getting your location…" : "Fetching weather data…"}</p>
          </div>
        )}

        {weather && !loading && (
          <div className="dashboard">
            <div className="main-column">
              <WeatherCard weather={weather} />
              <WeatherStats weather={weather} />
            </div>
            <aside className="sidebar">
              <TodayAtGlance weather={weather} />
              {forecast && <ForecastBar forecast={forecast} />}
            </aside>
          </div>
        )}

        <footer className="site-footer">
          © 2026 WeatherNest. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
