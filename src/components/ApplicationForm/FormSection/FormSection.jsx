import React from 'react';
import classNames from 'classnames';

import './form-section.scss';
import { sectionType } from '../types';
import RadioToggler from '../../RadioToggler';
import RadioButton from '../../RadioButton';
import InputField from '../../InputField';
import FileUpload from '../../FileUpload';
import Checkbox from '../../Checkbox';

const renderFormElement = (elementData) => {
  switch (elementData.type) {
    case 'radioToggler':
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
