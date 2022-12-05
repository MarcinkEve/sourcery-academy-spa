import React from 'react';
import { arrayOf, string, shape, func } from 'prop-types';

import RadioToggler from '../RadioToggler';
import RadioButton from '../RadioButton';
import InputField from '../InputField';
import FileUpload from '../FileUpload';
import Checkbox from '../Checkbox';
import Button from '../Button';

import './application-form.scss';

const renderFormElement = (elementData) => {
  switch (elementData.type) {
    case 'ragioToggler':
      return (
        <RadioToggler
          name={elementData.name}
          values={elementData.values}
          onValueChange={() => {}}
        />
      );
    case 'radio':
      return (
        <RadioButton
          title={elementData.title}
          radioValues={elementData.radioValues}
          onValueChange={() => {}}
        />
      );
    case 'text':
    case 'email':
      return (
        <InputField
          name={elementData.name}
          label={elementData.label}
          type={elementData.type}
          placeholder={elementData.placeholder}
          getValue={() => {}}
        />
      );
    case 'file':
      return (
        <FileUpload
          name={elementData.name}
          label={elementData.label}
          placeholder={elementData.placeholder}
          onValueChange={() => {}}
        />
      );
    case 'checkbox':
      return (
        <Checkbox
          name={elementData.name}
          checkboxText={elementData.checkboxText}
          type="checkbox"
          getCheckboxValue={() => {}}
        />
      );
  }
};

const renderFormSection = (sectionData) => (
  <section className="application-form__section">
    <h3 className="application-form__section-title">{sectionData.title}</h3>
    {sectionData.inputs.map((input, index) => (
      <div
        className={`application-form__${
          input.type === 'text' ||
          input.type === 'email' ||
          input.type === 'file'
            ? 'simple'
            : 'spaced'
        }-input`}
        key={index}
      >
        {renderFormElement(input)}
      </div>
    ))}
  </section>
);

export const ApplicationForm = ({ data, setIsSubmitted }) => {
  return (
    <form className="application-form">
      {renderFormSection(data.section_1)}
      {renderFormSection(data.section_2)}
      <Button
        label={data.button.label}
        handleClick={(e) => setIsSubmitted(true)}
      />
    </form>
  );
};

ApplicationForm.propTypes = {
  data: shape({
    section_1: shape({
      title: string,
      inputs: arrayOf(shape),
    }),
    section_2: shape({
      title: string,
      inputs: arrayOf(shape),
    }),
    button: shape({
      label: string,
    }),
  }),
  setIsSubmitted: func,
};
