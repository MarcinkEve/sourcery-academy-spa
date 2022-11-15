import { arrayOf, shape, string } from 'prop-types';
import React from 'react';

import './RadioBtnCities.scss';

export const RadioBtnCities = ({ cities }) => {
  return (
    <div className="radio-btn-city">
      <span className="radio-btn-city__section-label">Academy city</span>

      {cities &&
        cities.map((city, index) => (
          <label
            className="radio-btn-city__radio-label"
            key={index}
            htmlFor={city.value}
          >
            <input
              className="radio-btn-city__radio-input"
              type="radio"
              id={city.value}
              name="drone"
              value={city.value}
              defaultChecked={index <= 0 && true}
            />
            {city.name}
          </label>
        ))}
    </div>
  );
};

RadioBtnCities.propTypes = {
  cities: arrayOf(
    shape({
      name: string,
      value: string,
    })
  ).isRequired,
};
RadioBtnCities.defaultProps = {
  cities: [
    { name: 'Kaunas', value: 'kaunas' },
    { name: 'Vilnius', value: 'vilnius' },
  ],
};
