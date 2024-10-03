import { formatTemperature } from '../../helpers';
import { Weather } from '../../hooks/useWeather';
import styles from './WeatherDetails.module.css';

type WeatherDetailsProps = {
  weather: Weather;
};

export const WeatherDetails = ({ weather }: WeatherDetailsProps) => {
  return (
    <aside className={styles.container}>
      <div>
        <h2 className={styles.weather_title}>
          <span>Current weather in:</span> {weather.name}
        </h2>
        <p className={styles.current_temperature}>
          {formatTemperature(weather.main.temp)} &deg;C
        </p>
      </div>
      <div className={styles.current_minmax}>
        <p>
          <span>Max: </span>
          {formatTemperature(weather.main.temp_max)} &deg;C
        </p>
        <p>
          <span>Min: </span>
          {formatTemperature(weather.main.temp_min)} &deg;C
        </p>
      </div>
    </aside>
  );
};
