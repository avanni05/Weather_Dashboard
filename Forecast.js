import React from 'react';

export default function Forecast({ forecast }) {
  if (!forecast || !forecast.list || forecast.list.length === 0) {
  return <p>Loading forecast...</p>;
}

  const daily = forecast.list.filter((reading, index) => index % 8 === 0);

  return (
    <div className="forecast">
      <h2>5-Day Forecast</h2>
      <div className="forecast-grid">
        {daily.map((day, idx) => (
          <div key={idx} className="forecast-day">
            <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
            <img
              src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt="icon"
            />
            <p>{day.main.temp}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
}
