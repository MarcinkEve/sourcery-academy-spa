import React, { useState } from 'react';
import { Toggler } from '../Toggler/Toggler';

import './radioToggler.scss';
// import variables from '../RadioToggler/radioToggler.module.scss';

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
  //   const [checkedStyle, setCheckedStyle] = useState('');
  //   const [isActive, setIsActive] = useState(false);

  const handleChange = (event) => {
    // setRadioValue({
    //   selectedOption: event.target.value,
    // });
    setRadioValue(event.target.value);
    // console.log('checked', radioValue);
    // console.log('event', event.target.value);
    // console.log('radio', radioButtonValues.value);
    // console.log('checkedStyle', checkedStyle);
    // if (event.target.value) {
    //   setCheckedStyle({ checkedStyle: 'white' });
    // }
  };
  //   const handleClick = () => {
  //     radioValue === ? setIsActive((current) => !current) : '';
  //   };

  return (
    <>
      <div className="radio-toggler">
        {radioButtonValues.map((radioButtonValue, index) => (
          <Toggler
            key={index}
            index={index}
            name={radioButtonValue.name}
            value={radioButtonValue.value}
            handleChange={handleChange}
            radioValue={radioValue}
          />
        ))}
        <div className="radio-toggler__indicator" />
      </div>
      <div>{radioValue}</div> {/*DELETE*/}
    </>
  );
};
