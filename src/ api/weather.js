const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE = "https://api.openweathermap.org/data/2.5";

export const fetchWeather = async (city) => {
  const res = await fetch(
    `${BASE}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
  );
  if (!res.ok) throw new Error("City not found");
  return res.json();
};

export const fetchForecast = async (city) => {
  const res = await fetch(
    `${BASE}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&cnt=40`
  );
  if (!res.ok) throw new Error("Forecast not found");
  return res.json();
};
