import styles from './App.module.css';
import { Alert } from './components/alert/Alert';
import { Form } from './components/form/Form';
import { Spinner } from './components/spiner/Spinner';
import { WeatherDetails } from './components/weatherDetails/WeatherDetails';
import { useWeather } from './hooks/useWeather';

export const App = () => {
  const { weather, hasWeatherData, fetchWeather, loading, notFound } =
    useWeather();

  return (
    <main>
      <h1 className={styles.title}>Weather App</h1>

      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />

        {notFound && (
          <Alert>
            <h1>City not found :(</h1>
          </Alert>
        )}
        {loading && <Spinner />}
        {hasWeatherData && <WeatherDetails weather={weather} />}
      </div>
    </main>
  );
};
