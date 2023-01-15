import React, { useState, useEffect } from 'react';
import { func, string, array, bool } from 'prop-types';
import classNames from 'classnames';
import { useLocation } from 'react-router-dom';

import RadioButtonForToggler from '~/components/Form/RadioToggler/RadioButtonForToggler';
import { ROUTES } from '~/constants/routes';

import './radio-toggler.scss';

export const RadioToggler = ({
  name,
  values,
  onValueChange,
  isRequired = true,
}) => {
  const [radioValue, setRadioValue] = useState(values[0]);
  const routeParam = useLocation().state;
  const handleChange = (event) => {
    setRadioValue(event.target.value);
    onValueChange(event.target.value);
  };

  useEffect(() => {
    if (routeParam !== null) {
      if (routeParam.from === ROUTES.TESTERS) {
        setRadioValue(values[1]);
        onValueChange(values[1]);
      } else if (routeParam.from === ROUTES.FRONTEND) {
        setRadioValue(values[2]);
        onValueChange(values[2]);
      }
    }
  }, []);

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
