import React, { useState } from 'react';
import { Toggleris } from '../Toggleris/Toggleris';

import './radio.scss';

export const Radio = () => {
  const radioButtonValues = [
    {
      value: 'Full-stackas',
      name: 'academiess',
    },
    {
      value: 'Testeris',
      name: 'academiess',
    },
    {
      value: 'Front-Endas',
      name: 'academiess',
    },
  ];
  const [radioValue, setRadioValue] = useState('Full-stackas');

  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };

  return (
    <>
      <div className="radio-toggleris">
        {radioButtonValues.map((radioButtonValue, index) => (
          <Toggleris
            key={index}
            index={index}
            name={radioButtonValue.name}
            value={radioButtonValue.value}
            handleChange={handleChange}
            radioValue={radioValue}
          />
        ))}
        <div className="radio-toggleris__indicatorius" />
      </div>
    </>
  );
};
