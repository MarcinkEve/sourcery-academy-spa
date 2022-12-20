import React, { useContext } from 'react';
import classNames from 'classnames';

import { sectionType } from '~/components/ApplicationForm/types';
import RadioToggler from '~/components/RadioToggler';
import RadioButton from '~/components/RadioButton';
import InputField from '~/components/InputField';
import FileUpload from '~/components/FileUpload';
import Checkbox from '~/components/Checkbox';
import { FormValuesContext } from '~/components/Pages/ApplicationPage/ApplicationPage';

import './form-section.scss';

const renderFormElement = (elementData) => {
  const {
    type,
    name,
    values,
    radioValues,
    label,
    placeholder,
    checkboxText,
    errorMessage,
  } = elementData;

  const {
    typeValueHandler,
    cityValueHandler,
    firstNameValueHandler,
    lastNameValueHandler,
    emailValueHandler,
    resumeValueHandler,
    checkboxValueHandler,
  } = useContext(FormValuesContext);

  switch (type) {
    case 'radioToggler':
      return (
        <RadioToggler
          name={name}
          values={values}
          onValueChange={typeValueHandler}
        />
      );
    case 'radio':
      return (
        <RadioButton
          name={name}
          radioValues={radioValues}
          onValueChange={cityValueHandler}
        />
      );
    case 'email':
      return (
        <InputField
          name={name}
          label={label}
          type={type}
          placeholder={placeholder}
          getValue={emailValueHandler}
        />
      );
    case 'text':
      return (
        <InputField
          name={name}
          label={label}
          type={type}
          placeholder={placeholder}
          getValue={
            `${name}` === 'firstName'
              ? firstNameValueHandler
              : lastNameValueHandler
          }
        />
      );
    case 'file':
      return (
        <FileUpload
          name={name}
          label={label}
          placeholder={placeholder}
          getValue={resumeValueHandler}
        />
      );
    case 'checkbox':
      return (
        <Checkbox
          name={name}
          checkboxText={checkboxText}
          type="checkbox"
          errorMessage={errorMessage}
          getCheckboxValue={checkboxValueHandler}
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
