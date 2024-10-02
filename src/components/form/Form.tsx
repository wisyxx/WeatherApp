import styles from './Form.module.css';
import { countries } from '../../data/countries';
import { ChangeEvent, FormEvent, useState } from 'react';
import type { SearchType } from '../../types';
import { Alert } from '../alert/Alert';

type FormProps = {
  fetchWeather: () => void;
};

export const Form = ({ fetchWeather }: FormProps) => {
  const [search, setSearch] = useState<SearchType>({
    city: '',
    country: '',
  });
  const [alert, setAlert] = useState('');

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearch({
      ...search,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.values(search).includes('')) {
      setAlert('You must fill all fields');
      return;
    }

    // After passing validation...
    fetchWeather();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* Alert messages */}
      {alert && <Alert>{alert}</Alert>}

      <div className={styles.field}>
        <label htmlFor="city">City: </label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="City Name"
          value={search.city}
          onChange={handleChange}
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="Country">Country: </label>
        <select
          onChange={handleChange}
          value={search.country}
          name="country"
          id="country"
        >
          <option value="Select country">Select country 🌍</option>
          {countries.map((country) => (
            <option
              className={styles.option}
              id={country.code}
              value={country.code}
              key={country.code}
            >
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <input className={styles.submit} type="submit" value="Look up weather" />
    </form>
  );
};
