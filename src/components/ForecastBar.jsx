export default function ForecastBar({ forecast }) {
  const daily = {};
  const cityTimezone = forecast?.city?.timezone ?? 0;

  forecast.list.forEach((item) => {
    const date = new Date(item.dt * 1000);
    const dayKey = date.toDateString();
    const hour = date.getHours();

    if (
      !daily[dayKey] ||
      Math.abs(hour - 12) <
        Math.abs(new Date(daily[dayKey].dt * 1000).getHours() - 12)
    ) {
      daily[dayKey] = item;
    }
  });

  const days = Object.values(daily).slice(0, 5);

  return (
    <div className="panel-card">
      <h3 className="panel-title">5-Day Forecast</h3>
      <ul className="forecast-list">
        {days.map((item) => {
          const date = new Date((item.dt + cityTimezone) * 1000);
          const day = date.toLocaleDateString("en-IN", {
            weekday: "short",
            timeZone: "UTC",
          });
          const dateLabel = date.toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            timeZone: "UTC",
          });

          return (
            <li key={item.dt} className="forecast-row-item">
              <div className="forecast-day-col">
                <span className="forecast-day">{day}</span>
                <span className="forecast-date">{dateLabel}</span>
              </div>
              <img
                className="forecast-weather-icon"
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                alt={item.weather[0].description}
              />
              <span className="forecast-temps">
                {Math.round(item.main.temp_max)}° / {Math.round(item.main.temp_min)}°C
              </span>
            </li>
          );
        })}
      </ul>
      <button type="button" className="forecast-link">
        View full forecast →
      </button>
    </div>
  );
}
