document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const citiesName = urlParams.get('name');

    const cities = weatherApp.dataStore.list().find(item => item.name === citiesName);
    document.getElementById('page-heading').textContent = cities.name;

    const main = document.querySelector('main');
    main.innerHTML = main.innerHTML + weatherApp.components.createCardsItem(cities);
    main.innerHTML = main.innerHTML + weatherApp.components.createCardsInfos (cities.cities);
});


 const weatherDescriptions = {
      0: "Clear sky",
      1: "Mainly clear",
      2: "Partly cloudy",
      3: "Overcast",
      51: "Light drizzle",
      61: "Rain showers",
      80: "Rainy",
      71: "Snow",
    };

    function getCityFromURL() {
      const params = new URLSearchParams(window.location.search);
      return params.get("city")?.toLowerCase();
    }

    function updateCurrentTime() {
      const now = dayjs();
      const formattedTime = now.format("HH:mm");
      document.getElementById("currentTime").textContent = Current Time: ${formattedTime};
      return now.hour(); // returns the current hours to use in the forecast
    }

    document.addEventListener("DOMContentLoaded", () => {
      const city = getCityFromURL();
      if (!city) {
        alert("No city provided in URL.");
        return;
      }

      document.getElementById("cityTitle").textContent = City Focus: ${city.charAt(0).toUpperCase() + city.slice(1)};

      const daily = weatherData[city + "_daily"].daily;
      const hourly = weatherData[city + "_hourly"].hourly;

      // Data of current day
      const weatherCode = daily.weather_code[0];
      const maxTemp = daily.temperature_2m_max[0];
      const maxWind = daily.wind_speed_10m_max[0];
      document.getElementById("weatherDesc").textContent = Weather: ${weatherDescriptions[weatherCode] || 'Unknown'};
      document.getElementById("maxTemp").textContent = Max Temperature: ${maxTemp}°C;
      document.getElementById("maxWind").textContent = Max Wind Speed: ${maxWind} km/h;

      // Current Hours
      const hourIndex = updateCurrentTime();
      const tempNow = hourly.temperature_2m[hourIndex];
      const windNow = hourly.wind_speed_10m[hourIndex];
      document.getElementById("hourTemp").textContent = Temperature Now: ${tempNow}°C;
      document.getElementById("hourWind").textContent = Wind Now: ${windNow} km/h;

      // 7 days
      const list = document.getElementById("sevenDaySummary");
      const now = dayjs();

      for (let i = 0; i < daily.weather_code.length; i++) {
        const item = document.createElement("li");
        const desc = weatherDescriptions[daily.weather_code[i]] || Code ${daily.weather_code[i]};

        const dayName = i === 0
          ? "Today"
          : i === 1
            ? "Tomorrow"
            : now.add(i, 'day').format("dddd"); // ex: Wednesday

        item.textContent = ${dayName}: ${desc};
        list.appendChild(item);
      }

    });