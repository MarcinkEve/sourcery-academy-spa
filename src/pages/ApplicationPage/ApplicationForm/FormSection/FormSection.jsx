import React, { useContext } from 'react';
import classNames from 'classnames';

import { sectionType } from '~/pages/ApplicationPage/ApplicationForm/types';
import RadioToggler from '~/components/Form/RadioToggler';
import RadioButton from '~/components/Form/RadioButton';
import InputField from '~/components/Form/InputField';
import FileUpload from '~/components/Form/FileUpload';
import Checkbox from '~/components/Form/Checkbox';
import { FormValuesContext } from '~/pages/ApplicationPage/ApplicationPage';

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
    setTypeValue,
    setCityValue,
    setFirstNameValue,
    setLastNameValue,
    setEmailValue,
    setResumeValue,
    setCheckboxValue,
  } = useContext(FormValuesContext);

  switch (type) {
    case 'radioToggler':
      return (
        <RadioToggler
          name={name}
          values={values}
          onValueChange={setTypeValue}
        />
      );
    case 'radio':
      return (
        <RadioButton
          name={name}
          radioValues={radioValues}
          onValueChange={setCityValue}
        />
      );
    case 'email':
      return (
        <InputField
          name={name}
          label={label}
          type={type}
          placeholder={placeholder}
          getValue={setEmailValue}
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
            `${name}` === 'firstName' ? setFirstNameValue : setLastNameValue
          }
        />
      );
    case 'file':
      return (
        <FileUpload
          name={name}
          label={label}
          placeholder={placeholder}
          getValue={setResumeValue}
        />
      );
    case 'checkbox':
      return (
        <Checkbox
          name={name}
          checkboxText={checkboxText}
          type="checkbox"
          errorMessage={errorMessage}
          getCheckboxValue={setCheckboxValue}
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
