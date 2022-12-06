import React from 'react';
import { string, shape, func } from 'prop-types';

import './application-form.scss';
import { sectionType } from './types';
import FormSection from './FormSection';
import Button from '../Button';

export const ApplicationForm = ({ data, setIsSubmitted }) => {
  return (
    <form className="application-form">
      <FormSection sectionData={data.section_1} />
      <FormSection sectionData={data.section_2} />
      {/* {renderFormSection(data.section_1)}
      {renderFormSection(data.section_2)} */}
      <Button
        label={data.button.label}
        handleClick={(e) => setIsSubmitted(true)}
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
