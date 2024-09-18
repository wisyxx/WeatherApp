import styles from './Form.module.css';
import { countries } from '../../data/countries';

export const Form = () => {
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="city">City: </label>
        <input type="text" name="city" id="city" placeholder="City Name" />
      </div>
      <div className={styles.field}>
        <label htmlFor="Country">Country: </label>
        <select name="country" id="country">
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
