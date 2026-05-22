export default function ForecastBar({ forecast }) {
  // Pick one entry per day (noon reading)
  const daily = {};
  forecast.list.forEach((item) => {
    const date = new Date(item.dt * 1000);
    const day = date.toLocaleDateString("en-IN", { weekday: "short" });
    const hour = date.getHours();
    if (!daily[day] || Math.abs(hour - 12) < Math.abs(new Date(daily[day].dt * 1000).getHours() - 12)) {
      daily[day] = item;
    }
  });

  const days = Object.entries(daily).slice(0, 6);

  const weatherIcon = (iconCode) =>
    `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="glass-card">
      <div className="forecast-title">6-Day Forecast</div>
      <div className="forecast-row">
        {days.map(([day, item]) => (
          <div className="forecast-item" key={day}>
            <div className="forecast-day">{day}</div>
            <img
              src={weatherIcon(item.weather[0].icon)}
              alt={item.weather[0].description}
              style={{ width: 44, height: 44 }}
            />
            <div className="forecast-high">{Math.round(item.main.temp_max)}°</div>
            <div className="forecast-low">{Math.round(item.main.temp_min)}°</div>
          </div>
        ))}
      </div>
    </div>
  );
}
