import { GlanceIcon } from "./Icons";

export default function TodayAtGlance({ weather }) {
  const { main, wind, clouds, visibility } = weather;

  const rows = [
    {
      label: "Max/Min",
      value: `${Math.round(main.temp_max)}° / ${Math.round(main.temp_min)}°C`,
    },
    { label: "Humidity", value: `${main.humidity}%` },
    { label: "Wind Speed", value: `${Math.round(wind.speed * 3.6)} km/h` },
    {
      label: "Visibility",
      value: visibility ? `${(visibility / 1000).toFixed(1)} km` : "N/A",
    },
    { label: "Pressure", value: `${main.pressure} hPa` },
    { label: "Cloud Cover", value: `${clouds.all}%` },
  ];

  return (
    <div className="panel-card">
      <h3 className="panel-title">Today at a Glance</h3>
      <ul className="glance-list">
        {rows.map((row) => (
          <li key={row.label} className="glance-row">
            <span className="glance-icon">
              <GlanceIcon label={row.label} />
            </span>
            <span className="glance-label">{row.label}</span>
            <span className="glance-value">{row.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
