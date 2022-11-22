import { arrayOf, shape, string, func } from 'prop-types';
import React from 'react';

import './radioButton.scss';

export const RadioButton = ({ data, title, onValueChange }) => {
  return (
    <div className="radio">
      <span className="radio__title">{title}</span>

      {data.map((city, index) => (
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
  title: string,
  data: arrayOf(
    shape({
      name: string,
      value: string,
    })
  ).isRequired,
};
RadioButton.defaultProps = {
  data: [{ value: 'kaunas' }, { value: 'vilnius' }],
  title: 'Academy city',
};
