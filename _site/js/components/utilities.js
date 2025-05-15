//Variables

const celsius = " °C";

//Functions---------------------------------------------------------------------------------

weatherApp.utilities.getCityList=()=>{
  // Get keys
  const keys = Object.keys(dotify.weatherData);
  //Using Set to avoid duplicates
  const returnList = new Set(keys.map(key => {
    // Check if "_daily" or "__hourly" exists in the key, if yes remove it to get City name.
    if (key.indexOf("_daily") !== -1 || key.indexOf("_hourly") !== -1) {
      return key.split("_daily")[0].split("_hourly")[0];
    }
  }))
  console.log(returnList); 
  return returnList;
}

weatherApp.utilities.currentTimeInfo=()=>{
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
  const dayName = days[today.getDay()];
  const dayWeekNumber = today.getDay();// return a number  from 0 (Sunday) to 6 (Saturday)
  let hour = today.getHours();   
  let min = today.getMinutes();
  let ampm = hour >= 12 ? 'PM' : 'AM';


  const obj ={};
  obj.weekdays = days;
  obj.todayIndex = dayWeekNumber;
  obj.todayWeekday = dayName;
  obj.hour = hour;
  obj.min = min < 10 ? '0' + min : min;
  obj.hour12 = hour%12;
  obj.ampm= ampm;

  return obj;
}

weatherApp.utilities.imgByDayOrNight=()=>{
  const lSotrageChoice = localStorage.getItem("radioWeatherIMG");// if localStorage.getItem("radioWeatherIMG ") is undefined teh calue will be "ByHour".
  console.log("lSotrageChoice: "+lSotrageChoice);

  const today = weatherApp.utilities.currentTimeInfo();
  let hour = today.hour;

  const dayObj ={rain:dotify.weatherImg .rain, cloudy:dotify.weatherImg .cloudy, clean: dotify.weatherImg .sun};
  const nightObj = {rain:dotify.weatherImg .night_rain, cloudy:dotify.weatherImg .night_cloudy, clean: dotify.weatherImg .night};

  switch(lSotrageChoice){
    case "Day": 
      return dayObj;
      break;
    case "Night":
      return nightObj;
      break;
    case "ByHour":
      return (hour >= 7 && hour <= 19) ? dayObj : nightObj;
      break;
    default:
      return (hour >= 7 && hour <= 19) ? dayObj : nightObj;
    
  }

}

// Will return a imag of sun, rain or cloud depending on Weather_Code
dotify.utils.getImg = (dayIndex,dailyData) => {

  const weatherCode = dailyData.weather_code[dayIndex];

  const weatherObj =weatherApp.utilities.imgByDayOrNight();
  return weatherCode ==0? weatherObj.clean:
        (weatherCode >= 1 && weatherCode <= 3)?weatherObj.cloudy:weatherObj.rain;
  
};

// Will return a imag of sun, rain or cloud by random
dotify.utils.getRandomImg = () => {
  const weatherObj =dotify.utils.imgByDayOrNight();
  min = 1;
  max = 3;
  let value = Math.floor(Math.random() * (max - min + 1)) + min;

  return value ==1? weatherObj.rain:
  value ==2? weatherObj.cloudy:weatherObj.clean;
  
};

// ----------------------------
// Get weather data object for city
// ----------------------------
dotify.utils.getCityDailyObj = (cityName) => {
  const key = `${cityName}_daily`;
  console.log("Fetching weather data for:", key);
  return dotify.weatherData[key];
};

// ----------------------------
// Get weather hour object for city
// ----------------------------
dotify.utils.getHourObj = (cityName) => {
  const key = `${cityName}_hourly`;
  console.log("Fetching weather data for:", key);
  return dotify.weatherData[key];
};

// ----------------------------
// Get each word from teh array to replace "_" by space and the First letter to uppercase:
// replaceAll: will replace "_" by space
// split(space) to create an array if there is more than 1 word
// map.word
// ----------------------------
dotify.utils.formattedCities = (arrayCity) =>{
  const newArray = arrayCity.map(city => {
    // Split the city into words
    const words = city.split('_');

    // Capitalize each word
    const capitalizedWords = words.map(word => capitalizeFirstLetter(word));

    // Join the words back together
    return capitalizedWords.join(' ');
  });
  return newArray;
}
//reference: https://coreui.io/blog/how-to-capitalize-the-first-letter-in-javascript/#method-1-using-charat-touppercase-and-slice
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

// ----------------------------
// Like FormattedCities will will change the First Letter from each word to uppercase, but for  asingle variable.
// ----------------------------
dotify.utils.formatName=(currentName)=>{
  return currentName.split('_').map(word=>capitalizeFirstLetter(word)).join(' ');
}