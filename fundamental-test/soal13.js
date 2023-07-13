// using api from https://openweathermap.org/current

const apiKey = 'c4659adb208fb6f1cc07de3b2dbc6976';
const city = 'Jakarta';
const countryCode = "ID";

  async function getCurrentTemperature(city, countryCode, apiKey) {
    const urlCurrentConditions = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(urlCurrentConditions);
      const data = await response.json();
      const temperature = data.main.temp;
      console.log(`Current temperature in ${city}: ${temperature}°C`);
    } catch (error) {
      console.error(error);
    }
  }
  
  getCurrentTemperature(city, countryCode, apiKey);
  
