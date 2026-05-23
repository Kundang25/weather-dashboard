const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE = "https://api.openweathermap.org/data/2.5";

function assertApiKey() {
  if (!API_KEY) {
    throw new Error(
      "Missing API key. Add VITE_WEATHER_API_KEY to your .env file."
    );
  }
}

async function parseResponse(res, fallbackMessage) {
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.message || fallbackMessage);
  }
  return res.json();
}

export const fetchWeather = async (city) => {
  assertApiKey();
  const res = await fetch(
    `${BASE}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
  );
  return parseResponse(res, "City not found");
};

export const fetchForecast = async (city) => {
  assertApiKey();
  const res = await fetch(
    `${BASE}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&cnt=40`
  );
  return parseResponse(res, "Forecast not found");
};

export const fetchWeatherByCoords = async (lat, lon) => {
  assertApiKey();
  const res = await fetch(
    `${BASE}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  return parseResponse(res, "Weather unavailable for this location");
};

export const fetchForecastByCoords = async (lat, lon) => {
  assertApiKey();
  const res = await fetch(
    `${BASE}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&cnt=40`
  );
  return parseResponse(res, "Forecast unavailable for this location");
};
