import styles from './Form.module.css';
import { countries } from '../../data/countries';
import { ChangeEvent, useState } from 'react';
import type { SearchType } from '../../types';

export const Form = () => {
  const [search, setSearch] = useState<SearchType>({
    city: '',
    country: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearch({
      ...search,
      [e.target.name]: [e.target.value],
    });
  };

  return (
    <form className={styles.form}>
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
          <option value="" selected disabled>
            Select country 🌍
          </option>
          {countries.map((country) => (
            <option
              className={styles.option}
              id={country.code}
              value={country.code}
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
