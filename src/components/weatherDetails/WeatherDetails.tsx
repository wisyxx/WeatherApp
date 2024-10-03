import { Weather } from '../../hooks/useWeather';

type WeatherDetailsProps = {
  weather: Weather;
};

export const WeatherDetails = ({ weather }: WeatherDetailsProps) => {
  return (
    <aside>
      <div>
        <h2>Current weather in:</h2>
        <h2>{weather.name}</h2>
      </div>
      <div>
        <p>Temperature: {weather.main.temp}</p>
      </div>
    </aside>
  );
};
