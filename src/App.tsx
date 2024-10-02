import styles from './App.module.css';
import { Form } from './components/form/Form';
import { useWeather } from './hooks/useWeather';

export const App = () => {
  const fetchWeather = useWeather();

  return (
    <>
      <h1 className={styles.title}>Weather App</h1>

      <div className={styles.container}>
        <Form fetchWeather={fetchWeather}/>
      </div>
    </>
  );
};
