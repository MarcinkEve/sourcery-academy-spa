import React, { useState } from 'react';
import { Toggler } from '../Toggler/Toggler';

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

  const [radioValue, setRadioValue] = useState('Full-stack');

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };

  return (
    <>
      <div className="radio-toggler">
        {radioButtonValues.map((radioButtonValue, index) => (
          <Toggler
            key={index}
            name={radioButtonValue.name}
            value={radioButtonValue.value}
            handleChange={handleChange}
            radioValue={radioValue}
          />
        ))}
        <div className="radio-toggler__indicator" />
      </div>
    </>
  );
};
