import React from 'react';
import PropTypes from 'prop-types';

export const Toggleris = ({
  index,
  name,
  value,
  handleChange,
  radioValue,
  // handleClick,
}) => {
  return (
    <>
      <input
        type="radio"
        name={name}
        value={value}
        // name={radioButtonValue.name}
        // value={radioButtonValue.value}
        onChange={handleChange}
        className={`radio-toggleris__input ${value.toLowerCase()}`}
        // className={`radio-toggler__input ${radioButtonValue.value}`}
        checked={radioValue === value}
        // checked={radioButtonValue.value === radioValue}
        //   active={radioButtonValue.active}  //not used
        id={value}
        // onClick={handleClick}
        // id={radioButtonValue.value}
      />
      <label
        htmlFor={value}
        // htmlFor={radioButtonValue.value}
        className={
          value === radioValue
            ? 'radio-toggleris__label' + index
            : 'radio-toggleris__label'
        }
      >
        {value}
        {/* {radioButtonValue.value} */}
      </label>
    </>
  );
};

Toggleris.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  radioValue: PropTypes.string.isRequired,
};
