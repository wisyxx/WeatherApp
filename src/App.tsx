import styles from './App.module.css';
import { Form } from './components/form/Form';

export const App = () => {
  return (
    <>
      <h1 className={styles.title}>Weather App</h1>

      <div className={styles.container}>
        <Form />
        <p>2</p>
      </div>
    </>
  );
};
