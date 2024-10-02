import axios from 'axios';
import { SearchType } from '../types';

export const useWeather = () => {
  const fetchWeather = async (search: SearchType) => {
    const { city, country } = search;
    const apiKey = '0d5e986934e857f4699be603a33c4f6a';

    try {
      const geoUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;
      const data = await axios(geoUrl);

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return fetchWeather;
};
