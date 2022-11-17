import React, { useState } from 'react';
import { func, string, array } from 'prop-types';

import { RadioButtonForToggler } from '../RadioButtonForToggler/RadioButtonForToggler';
import './radioToggler.scss';

export const RadioToggler = ({ name, values, onValueChange }) => {
  const [radioValue, setRadioValue] = useState(values[0]);

  const handleChange = (event) => {
    setRadioValue(event.target.value);
    onValueChange(event.target.value);
  };

  return (
    <>
      <span className="section-label">
        <span className="section-label__required">*</span>
        {name} type
      </span>
      <div className="radio-toggler">
        {values.map((itemValue, index) => (
          <RadioButtonForToggler
            key={index}
            name={name}
            value={itemValue}
            handleChange={handleChange}
            radioValue={radioValue}
          />
        ))}
      </div>
    </>
  );
};

RadioToggler.propTypes = {
  name: string.isRequired,
  values: array.isRequired,
  onValueChange: func.isRequired,
};

// DEFAULT PROPS PLACEHOLDER
RadioToggler.defaultProps = {
  name: 'Academy',
  values: ['Full-stack', 'Testers', 'Front-End'],
  onValueChange: () => {},
};
