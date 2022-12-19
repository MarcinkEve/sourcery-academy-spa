import React from 'react';
import classNames from 'classnames';

import './form-section.scss';
import { sectionType } from '~/components/ApplicationForm/types';
import RadioToggler from '~/components/RadioToggler';
import RadioButton from '~/components/RadioButton';
import InputField from '~/components/InputField';
import FileUpload from '~/components/FileUpload';
import Checkbox from '~/components/Checkbox';

const renderFormElement = (elementData) => {
  const {
    type,
    name,
    values,
    getValue,
    radioValues,
    label,
    placeholder,
    checkboxText,
    errorMessage,
  } = elementData;

  switch (type) {
    case 'radioToggler':
      return (
        <RadioToggler name={name} values={values} onValueChange={getValue} />
      );
    case 'radio':
      return (
        <RadioButton
          name={name}
          radioValues={radioValues}
          onValueChange={getValue}
        />
      );
    case 'text':
    case 'email':
      return (
        <InputField
          name={name}
          label={label}
          type={type}
          placeholder={placeholder}
          getValue={getValue}
        />
      );
    case 'file':
      return (
        <FileUpload
          name={name}
          label={label}
          placeholder={placeholder}
          getValue={getValue}
        />
      );
    case 'checkbox':
      return (
        <Checkbox
          name={name}
          checkboxText={checkboxText}
          type="checkbox"
          getCheckboxValue={getValue}
          errorMessage={errorMessage}
        />
      );
  }
};

const isFormElementSpaced = (type) => {
  return type === 'radio' || type === 'radioToggler' || type === 'checkbox';
};

export const FormSection = ({ sectionData }) => (
  <section className="form-section">
    <h3 className="form-section__title">{sectionData.title}</h3>
    {sectionData.inputs.map((input, index) => (
      <div
        className={classNames('form-section__input', {
          'form-section__input--spaced': isFormElementSpaced(input.type),
        })}
        key={index}
      >
        {renderFormElement(input)}
      </div>
    ))}
  </section>
);

FormSection.propTypes = {
  sectionData: sectionType,
};
