import { StatIcon } from "./Icons";

export default function WeatherStats({ weather }) {
  const { main, wind, clouds, visibility } = weather;

  const stats = [
    { label: "Humidity", value: `${main.humidity}%` },
    { label: "Wind Speed", value: `${Math.round(wind.speed * 3.6)} km/h` },
    {
      label: "Min / Max",
      value: `${Math.round(main.temp_min)}° / ${Math.round(main.temp_max)}°C`,
    },
    { label: "Pressure", value: `${main.pressure} hPa` },
    { label: "Cloud Cover", value: `${clouds.all}%` },
    {
      label: "Visibility",
      value: visibility ? `${(visibility / 1000).toFixed(1)} km` : "N/A",
    },
  ];

  return (
    <section className="details-section">
      <h3 className="section-title">Weather Details</h3>
      <div className="details-grid">
        {stats.map((s) => (
          <div className="detail-card" key={s.label}>
            <div className="detail-icon">
              <StatIcon label={s.label} />
            </div>
            <div className="detail-label">{s.label}</div>
            <div className="detail-value">{s.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
