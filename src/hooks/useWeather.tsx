import axios from 'axios';
import { SearchType } from '../types';
import { object, string, number, InferOutput, parse } from 'valibot';
import { useState } from 'react';

// type guard using Valibot (https://valibot.dev/)
const WeatherSchema = object({
  name: string(),
  main: object({
    temp: number(),
    temp_max: number(),
    temp_min: number(),
  }),
});
type Weather = InferOutput<typeof WeatherSchema>;

export const useWeather = () => {
  const [weather, setWeather] = useState({
    name: '',
    main: {
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
  });

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
      const result = parse(WeatherSchema, weatherData); // if doesn't match the schema it throws and error automatically
      if (result) {
        setWeather(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { fetchWeather, weather };
};
