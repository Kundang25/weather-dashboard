import { useEffect, useState } from "react";
import { HazeIcon, Skyline, SunWeatherIcon } from "./Icons";

function ConditionIcon({ description }) {
  const d = description?.toLowerCase() ?? "";
  if (d.includes("haze") || d.includes("mist") || d.includes("fog")) {
    return <HazeIcon />;
  }
  return <SunWeatherIcon size={28} />;
}

export default function WeatherCard({ weather }) {
  const { name, sys, weather: w, main, timezone } = weather;
  const desc = w[0].description;
  const iconCode = w[0].icon;
  const [currentMs, setCurrentMs] = useState(() => Date.now());
  const location = sys?.country
    ? `${name}, ${getCountryName(sys.country)}`
    : name;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentMs(Date.now());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const nowUtcMs = currentMs + new Date().getTimezoneOffset() * 60000;
  const localTime = new Date(nowUtcMs + (timezone ?? 0) * 1000);
  const dateStr = localTime.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
  return (
    <div className="hero-card">
      <div className="hero-content">
        <div className="hero-left">
          <h2 className="hero-city">{name}</h2>
          <p className="hero-location">{location}</p>
          <p className="hero-date">{dateStr}</p>
          <div className="hero-condition">
            <ConditionIcon description={desc} />
            <span className="hero-condition-text">{desc}</span>
          </div>
        </div>

        <div className="hero-right">
          {iconCode.endsWith("d") || iconCode.endsWith("n") ? (
            <img
              className="hero-weather-img"
              src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
              alt={desc}
            />
          ) : (
            <SunWeatherIcon size={72} />
          )}
          <div className="hero-temp">{Math.round(main.temp)}°C</div>
          <p className="hero-feels">Feels like {Math.round(main.feels_like)}°C</p>
        </div>
      </div>
      <Skyline />
    </div>
  );
}

function getCountryName(code) {
  try {
    const region = new Intl.DisplayNames(["en"], { type: "region" });
    return region.of(code) ?? code;
  } catch {
    return code;
  }
}
