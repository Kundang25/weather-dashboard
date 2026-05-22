export default function WeatherCard({ weather }) {
  const { name, sys, weather: w, main } = weather;
  const icon = w[0].icon;
  const desc = w[0].description;

  const now = new Date();
  const dateStr = now.toLocaleDateString("en-IN", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });

  return (
    <div className="glass-card">
      <div className="weather-main">
        <div className="weather-left">
          <div className="city-name">{name}</div>
          <div className="country"> Updated just now</div>
          <div className="description">{desc}</div>
          <div className="date-time">{dateStr}</div>
        </div>

        <div className="weather-right">
          <img
            className="weather-icon-img"
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={desc}
          />
          <div className="temp-main">{Math.round(main.temp)}°C</div>
          <div className="temp-feels">Feels like temperature {Math.round(main.feels_like)}°C</div>
        </div>
      </div>
    </div>
  );
}
