export default function WeatherStats({ weather }) {
  const { main, wind, clouds, visibility } = weather;

  const stats = [
    {
      icon: "💧",
      label: "Humidity",
      value: main.humidity,
      unit: "%",
    },
    {
      icon: "🌬️",
      label: "Wind Speed",
      value: Math.round(wind.speed * 3.6),
      unit: "km/h",
    },
    {
      icon: "🌡️",
      label: "Min / Max",
      value: `${Math.round(main.temp_min)}° / ${Math.round(main.temp_max)}°`,
      unit: "C",
    },
    {
      icon: "🔵",
      label: "Pressure",
      value: main.pressure,
      unit: "hPa",
    },
    {
      icon: "☁️",
      label: "Cloud Cover",
      value: clouds.all,
      unit: "%",
    },
    {
      icon: "👁️",
      label: "Visibility",
      value: visibility ? (visibility / 1000).toFixed(1) : "N/A",
      unit: "km",
    },
  ];

  return (
    <div className="glass-card">
      <div className="stats-title">Today's Highlights</div>
      <div className="stats-grid">
        {stats.map((s) => (
          <div className="stat-item" key={s.label}>
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-label">{s.label}</div>
            <div className="stat-value">
              {s.value} <span className="stat-unit">{s.unit}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
