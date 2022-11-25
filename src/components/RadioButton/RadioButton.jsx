import { arrayOf, func, number, shape, string } from 'prop-types';
import React from 'react';

import './radioButton.scss';

export const RadioButton = ({ radioValues, title, onValueChange }) => {
  return (
    <div className="radio">
      <span className="radio__title">{title}</span>

      {radioValues.map((radioValue, index) => (
        <label className="radio__label" key={radioValue.id}>
          <input
            className="radio__input"
            type="radio"
            name={title}
            value={radioValue.value}
            onChange={(e) => {
              onValueChange(e.target.value);
            }}
            defaultChecked={index <= 0 && true}
          />
          <span className="radio__input-label">{radioValue.name}</span>
        </label>
      ))}
    </div>
  );
};

RadioButton.propTypes = {
  onValueChange: func,
  title: string.isRequired,
  radioValues: arrayOf(
    shape({
      name: string,
      value: string,
      id: number,
    })
  ).isRequired,
};
