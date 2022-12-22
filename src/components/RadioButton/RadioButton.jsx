import { arrayOf, bool, func, number, shape, string } from 'prop-types';
import React from 'react';

import './radioButton.scss';

export const RadioButton = ({ radioValues, name, onValueChange, isRequired = true }) => {
  return (
    <div className="radio">
      <span className="radio__title">{name}</span>
      <span
        className={`radio__title ${isRequired && 'radio__title--required'}`}
      >
        {name}
      </span>

      {radioValues.map((radioValue, index) => (
        <label className="radio__label" key={radioValue.id}>
          <input
            className="radio__input"
            type="radio"
            name={name}
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
  name: string.isRequired,
  radioValues: arrayOf(
    shape({
      name: string,
      value: string,
      id: number,
    })
  ).isRequired,
  isRequired: bool,
};
