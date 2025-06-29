import React, { useEffect, useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import logo from './logo.svg';
import {
  getWeatherByCity,
  getForecastByCity,
  getWeatherByCoords,
} from './api';

function App() {
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState(null);

  const searchCity = async (city) => {
  const weather = await getWeatherByCity(city);
  const forecast = await getForecastByCity(city);
  console.log('Weather:', weather);
  console.log('Forecast:', forecast);
  setCurrent(weather);
  setForecast(forecast);
};

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const weather = await getWeatherByCoords(
        position.coords.latitude,
        position.coords.longitude
      );
      const city = weather.name;
      searchCity(city);
    });
  }, []);

  return (
    <div className="app">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={searchCity} />
      <CurrentWeather data={current} />
      <Forecast forecast={forecast} />
    </div>
  );
}

export default App;

