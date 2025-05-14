window.weatherApp.components.displayCurrentweather = async () => {
  const getPosition = () =>
    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

  const position = await getPosition();
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const responseWeather = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
  );
  const dataWeather = await responseWeather.json();

  const responseCity = await fetch(
   ` https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
  );
  const dataCity = await responseCity.json();

  const city = dataCity.address.city || dataCity.address.town || dataCity.address.village;
  const weather = dataWeather.current_weather;

  return `
    <div>
      <h2>Tempo atual em ${city}</h2>
      <p>Temperatura: ${weather.temperature}°C</p>
      <p>Vento: ${weather.windspeed} km/h</p>
    </div>
  `;
};
