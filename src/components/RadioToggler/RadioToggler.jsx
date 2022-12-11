import React, { useState } from 'react';
import { func, string, array } from 'prop-types';

import { RadioButtonForToggler } from '../RadioButtonForToggler/RadioButtonForToggler';
import './radio-toggler.scss';

export const RadioToggler = ({ name, values, onValueChange }) => {
  const [radioValue, setRadioValue] = useState(values[0]);

  const handleChange = (event) => {
    setRadioValue(event.target.value);
    onValueChange(event.target.value);
  };

  return (
    <>
      <span className="section-label">{name}</span>
      <div className="radio-toggler">
        {values.map(
          (itemValue, index) =>
            itemValue.trim() !== '' && (
              <RadioButtonForToggler
                key={itemValue + index}
                name={name}
                value={itemValue}
                handleChange={handleChange}
                radioValue={radioValue}
              />
            )
        )}
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
  name: 'Academy type',
  values: ['Full-stack', 'Testers', 'Front-End'],
  onValueChange: () => {},
};
