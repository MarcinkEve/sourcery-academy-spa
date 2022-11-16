import React, { useState } from 'react';
import { RadioButtonForToggler } from '../RadioButtonForToggler/RadioButtonForToggler';

import './radioToggler.scss';

export const RadioToggler = () => {
  const radioButtonValues = [
    {
      value: 'Full-stack',
      name: 'academies',
    },
    {
      value: 'Testers',
      name: 'academies',
    },
    {
      value: 'Front-End',
      name: 'academies',
    },
  ];

  const [radioValue, setRadioValue] = useState(radioButtonValues[0].value);

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };

  return (
    <>
      <div className="radio-toggler">
        {radioButtonValues.map((radioButtonValue, index) => (
          <RadioButtonForToggler
            key={index}
            name={radioButtonValue.name}
            value={radioButtonValue.value}
            handleChange={handleChange}
            radioValue={radioValue}
          />
        ))}
      </div>
    </>
  );
};
