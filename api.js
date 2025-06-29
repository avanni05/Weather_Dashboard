const API_KEY = '0eafa5998cbcc1538c3ed883eccdef0e'; // Replace this with your actual API key

export async function getWeatherByCity(city) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  return await res.json();
}

export async function getForecastByCity(city) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );
  return await res.json();
}

export async function getWeatherByCoords(lat, lon) {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );
  return await res.json();
}
