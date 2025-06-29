import React from 'react';

function CurrentWeather({ data }) {
  if (!data || !data.weather || !data.main) {
    return <p>Loading current weather...</p>;
  }

  return (
    <div className="current-weather">
      <div className="city-summary">
        {data.name} – {data.weather[0].description}
      </div>
      <p>{data.main.temp}°C</p>
    </div>
  );
}

export default CurrentWeather;


