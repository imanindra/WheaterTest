export const getWeather = async city => {

  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=844e09544db5132c84f33a7d31c070e4`
  );

  let { name, weather, main, wind } = await response.json();

  return {
    location: name,
    weather: weather[0],
    temperature: main.temp,
    wind: wind,
  };
};