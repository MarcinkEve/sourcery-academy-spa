import React, { useState } from 'react';
import { func, string, array, bool } from 'prop-types';
import classNames from 'classnames';

import RadioButtonForToggler from '~/components/RadioButtonForToggler';
import './radio-toggler.scss';

export const RadioToggler = ({
  name,
  values,
  onValueChange,
  isRequired = true,
}) => {
  const [radioValue, setRadioValue] = useState(values[0]);

  const handleChange = (event) => {
    setRadioValue(event.target.value);
    onValueChange(event.target.value);
  };

  return (
    <>
      <span
        className={classNames('section-label', {
          'section-label--required': isRequired,
        })}
      >
        {name}
      </span>
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
  isRequired: bool,
};
