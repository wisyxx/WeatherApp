import styles from './Form.module.css';
import { countries } from '../../data/countries';

export const Form = () => {
  return (
    <form>
      <div>
        <label htmlFor="city">City: </label>
        <input type="text" name="city" id="city" placeholder="City Name" />
      </div>
      <div>
        <label htmlFor="Country">Country: </label>
        <select name="country" id="country">
          <option value="" selected disabled>
            Select country 🌍
          </option>
          {countries.map((country) => (
            <option id={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <input type="submit" value="Look up weather 🌤️" />
    </form>
  );
};
