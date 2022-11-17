import React, { useState } from 'react';
import { RadioButtonForToggler } from '../RadioButtonForToggler/RadioButtonForToggler';
import { func, string, array } from 'prop-types';

import './radioToggler.scss';

export const RadioToggler = ({ name, values, getValue }) => {
  const [radioValue, setRadioValue] = useState(values[0]);

  const handleChange = (event) => {
    setRadioValue(event.target.value);
    getValue(event.target.value);
  };

  return (
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
  );
};

RadioToggler.propTypes = {
  name: string.isRequired,
  values: array.isRequired,
  getValue: func.isRequired,
};

// DEFAULT PROPS PLACEHOLDER
RadioToggler.defaultProps = {
  name: 'academies',
  values: ['Full-stack', 'Testers', 'Front-End'],
  getValue: () => {},
};
