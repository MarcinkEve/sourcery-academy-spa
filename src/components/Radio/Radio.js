import React, { useState } from 'react';
import { Toggleris } from '../Toggleris/Toggleris';

import './radio.scss';
// import variables from '../RadioToggler/radioToggler.module.scss';

export const Radio = () => {
  const radioButtonValues = [
    {
      value: 'Full-stackas',
      name: 'academies',
    },
    {
      value: 'Testeris',
      name: 'academies',
    },
    {
      value: 'Front-Endas',
      name: 'academies',
    },
  ];
  // const numb = ['1', '2', '3'];
  const [radioValue, setRadioValue] = useState('Full-stackas');
  //   const [checkedStyle, setCheckedStyle] = useState('');
  // const [isActive, setIsActive] = useState(false);
  // const [radio, setRadio] = useState('1');
  // const radioChange = (event) => {
  //   // console.log(event.target.value);
  //   setRadio(event.target.value);
  // };

  const handleChange = (event) => {
    // console.log(radioValue);
    setRadioValue(event.target.value);
  };
  // const handleClick = (event) => {
  //   radioValue ? setIsActive((current) => !current) : '';
  // };

  return (
    <>
      {/* {numb.map((el, i) => (
        <input
          key={i}
          type="radio"
          name="rad"
          value={el}
          onChange={radioChange}
          checked={radio === { el }}
        ></input>
      ))} */}
      {/* A1
      <input
        type="radio"
        name="rad"
        value="1"
        onChange={radioChange}
        checked={radio === '1'}
      ></input>
      A2
      <input
        type="radio"
        name="rad"
        value="2"
        onChange={radioChange}
        checked={radio === '2'}
      ></input>
      A3
      <input
        type="radio"
        name="rad"
        value="3"
        onChange={radioChange}
        checked={radio === '3'}
      ></input> */}
      <div className="radio-toggleris">
        {radioButtonValues.map((radioButtonValue, index) => (
          <Toggleris
            key={index}
            index={index}
            name={radioButtonValue.name}
            value={radioButtonValue.value}
            handleChange={handleChange}
            radioValue={radioValue}
            // handleClick={handleClick}
          />
        ))}
        <div className="radio-toggleris__indicator" />
      </div>
      <div>{radioValue}</div> {/*DELETE*/}
    </>
  );
};
