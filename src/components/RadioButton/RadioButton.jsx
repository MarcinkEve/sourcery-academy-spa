import { arrayOf, shape, string, func } from 'prop-types';
import React from 'react';

import './radioButton.scss';

export const RadioButton = ({ cities, radioTitle, onValueChange }) => {
  return (
    <div className="radio">
      <span className="radio__section-label">{radioTitle}</span>

      {cities.map((city, index) => (
        <label className="radio__label" key={index} htmlFor={city.value}>
          <input
            className="radio__input"
            type="radio"
            id={city.value}
            name="radio"
            value={city.value}
            onChange={(e) => {
              onValueChange(e.target.value);
            }}
            defaultChecked={index <= 0 && true}
          />
          <span className="radio__value-label">{city.value}</span>
        </label>
      ))}
    </div>
  );
};

RadioButton.propTypes = {
  onValueChange: func,
  radioTitle: string,
  cities: arrayOf(
    shape({
      name: string,
      value: string,
    })
  ).isRequired,
};
RadioButton.defaultProps = {
  cities: [{ value: 'kaunas' }, { value: 'vilnius' }],
  radioTitle: 'Academy city',
};
