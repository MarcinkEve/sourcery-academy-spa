import React from 'react';
import { string, shape, func, bool } from 'prop-types';

import Button from '~/components/Form/Button';

import FormSection from './FormSection';
import { sectionType } from './types';
import './application-form.scss';

export const ApplicationForm = ({ data, isButtonDisabled, submitHandler }) => {
  const { section_1, section_2, button } = data;

  return (
    <form className="application-form">
      <FormSection sectionData={section_1} />
      <FormSection sectionData={section_2} />
      <Button
        label={button.label}
        handleClick={submitHandler}
        disabled={isButtonDisabled}
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
  isButtonDisabled: bool,
  submitHandler: func,
};
