import styles from './App.module.css';
import { Form } from './components/form/Form';
import { WeatherDetails } from './components/weatherDetails/WeatherDetails';
import { useWeather } from './hooks/useWeather';

export const App = () => {
  const { weather, hasWeatherData, fetchWeather } = useWeather();

  return (
    <main>
      <h1 className={styles.title}>Weather App</h1>

      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />

        {hasWeatherData && <WeatherDetails weather={weather} />}
      </div>
    </main>
  );
};
