import React, { useState } from 'react';
import { string, shape, func } from 'prop-types';

import './application-form.scss';
import { sectionType } from './types';
import FormSection from './FormSection';
import Button from '~/components/Button';

export const ApplicationForm = ({ data, setIsSubmitted }) => {
  const { section_1, section_2, button } = data;

  const defaultRadioTogglerValue = section_1.inputs[0].values[0];
  const defaultRadioValue = section_1.inputs[1].radioValues[0].value;

  const [values, setValues] = useState({
    type: defaultRadioTogglerValue,
    city: defaultRadioValue,
    firstName: null,
    lastName: null,
    email: null,
    resume: null,
    checkbox: null,
  });

  //adding functions to get values of radio inputs
  section_1.inputs.forEach((input) => {
    const inputNeededName = input.name.split(' ')[1];
    input.getValue = (e) => setValues({ ...values, [inputNeededName]: e });
  });

  //adding functions to get values form inputs
  section_2.inputs.forEach((input) => {
    input.getValue = (e) =>
      setValues({
        ...values,
        [input.name]: `${input.name === 'resume' ? e.name : e}`,
      });
  });

  const isBtnDisabled = Object.values(values).includes(null);
  const returnObject = `Candidate = ${JSON.stringify(values)}`;

  const submitHandler = () => {
    setIsSubmitted(true);
    console.log(returnObject); //eslint-disable-line
  };

  return (
    <form className="application-form">
      <FormSection sectionData={section_1} />
      <FormSection sectionData={section_2} />
      <Button
        label={button.label}
        handleClick={submitHandler}
        disabled={isBtnDisabled}
      />
    </form>
  );
};

ApplicationForm.propTypes = {
  data: shape({
    section_1: sectionType,
    section_2: sectionType,
    button: shape({
      label: string,
    }),
  }),
  setIsSubmitted: func,
};
