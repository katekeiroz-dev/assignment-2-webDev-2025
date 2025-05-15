// Variables
const celsius = " °C";

// Functions ---------------------------------------------------------------------------------

weatherApp.utils.getCityList = () => {
  const keys = Object.keys(weatherApp.weatherData);
  const returnList = new Set(
    keys.map(key => {
      if (key.indexOf("_daily") !== -1 || key.indexOf("_hourly") !== -1) {
        return key.split("_daily")[0].split("_hourly")[0];
      }
    })
  );
  console.log(returnList);
  return returnList;
};

weatherApp.utils.currentTimeInfo = () => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  const dayName = days[today.getDay()];
  const dayWeekNumber = today.getDay();
  let hour = today.getHours();
  let min = today.getMinutes();
  let ampm = hour >= 12 ? 'PM' : 'AM';

  return {
    weekdays: days,
    todayIndex: dayWeekNumber,
    todayWeekday: dayName,
    hour: hour,
    min: min < 10 ? '0' + min : min,
    hour12: hour % 12,
    ampm: ampm
  };
};

weatherApp.utils.imgByDayOrNight = () => {
  const lSotrageChoice = localStorage.getItem("radioWeatherIMG");
  console.log("lSotrageChoice: " + lSotrageChoice);

  const today = weatherApp.utils.currentTimeInfo();
  let hour = today.hour;

  const dayObj = {
    rain: weatherApp.weatherImg.rain,
    cloudy: weatherApp.weatherImg.cloudy,
    clean: weatherApp.weatherImg.sun
  };
  const nightObj = {
    rain: weatherApp.weatherImg.night_rain,
    cloudy: weatherApp.weatherImg.night_cloudy,
    clean: weatherApp.weatherImg.night
  };

  switch (lSotrageChoice) {
    case "Day":
      return dayObj;
    case "Night":
      return nightObj;
    case "ByHour":
      return (hour >= 7 && hour <= 19) ? dayObj : nightObj;
    default:
      return (hour >= 7 && hour <= 19) ? dayObj : nightObj;
  }
};

// Will return an image of sun, rain or cloud depending on Weather_Code
weatherApp.utils.getImg = (dayIndex, dailyData) => {
  const weatherCode = dailyData.weather_code[dayIndex];
  const weatherObj = weatherApp.utils.imgByDayOrNight();

  return weatherCode === 0 ? weatherObj.clean :
         (weatherCode >= 1 && weatherCode <= 3) ? weatherObj.cloudy :
         weatherObj.rain;
};

// Will return an image of sun, rain or cloud by random
weatherApp.utils.getRandomImg = () => {
  const weatherObj = weatherApp.utils.imgByDayOrNight();
  const min = 1;
  const max = 3;
  let value = Math.floor(Math.random() * (max - min + 1)) + min;

  return value === 1 ? weatherObj.rain :
         value === 2 ? weatherObj.cloudy :
         weatherObj.clean;
};

// Get weather data object for city
weatherApp.utils.getCityDailyObj = (cityName) => {
  const key = `${cityName}_daily`;
  console.log("Fetching weather data for:", key);
  return weatherApp.weatherData[key];
};

// Get weather hour object for city
weatherApp.utils.getHourObj = (cityName) => {
  const key = `${cityName}_hourly`;
  console.log("Fetching weather data for:", key);
  return weatherApp.weatherData[key];
};

// Format city names (array)
weatherApp.utils.formattedCities = (arrayCity) => {
  return arrayCity.map(city => {
    const words = city.split('_');
    const capitalizedWords = words.map(word => capitalizeFirstLetter(word));
    return capitalizedWords.join(' ');
  });
};

// Format city name (single)
weatherApp.utils.formatName = (currentName) => {
  return currentName.split('_').map(word => capitalizeFirstLetter(word)).join(' ');
};

// Capitalize helper
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
