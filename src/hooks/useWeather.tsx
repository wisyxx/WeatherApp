import axios from 'axios';
import { SearchType } from '../types';

export const useWeather = () => {
  const fetchWeather = async (search: SearchType) => {
    const { city, country } = search;
    const apiKey = import.meta.env.VITE_API_KEY;

    try {
      // Coordinates
      const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&appid=${apiKey}`;
      const { data: cityData } = await axios(geoUrl);
      const lat = cityData[0].lat;
      const lon = cityData[0].lon;

      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      const { data: weatherData } = await axios(weatherUrl);
    } catch (error) {
      console.log(error);
    }
  };

  return fetchWeather;
};
