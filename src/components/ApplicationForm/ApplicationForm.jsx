import React from 'react';
import { arrayOf, string, shape } from 'prop-types';

import RadioToggler from '../RadioToggler';
import RadioButton from '../RadioButton';
import InputField from '../InputField';
import FileUpload from '../FileUpload';
import Checkbox from '../Checkbox';
import Button from '../Button';

import './application-form.scss';

export const ApplicationForm = ({ data }) => {
  const { section_1, section_2, button } = data;

  return (
    <form className="application-form">
      <section className="application-form__section">
        <h3 className="application-form__section-title">{section_1.title}</h3>
        <div className="application-form__styled-input">
          <RadioToggler
            name={section_1.inputs[0].name}
            values={section_1.inputs[0].values}
            onValueChange={() => {}}
          />
        </div>
        <div className="application-form__styled-input">
          <RadioButton
            title={section_1.inputs[1].title}
            radioValues={section_1.inputs[1].radioValues}
            onValueChange={() => {}}
          />
        </div>
      </section>
      <section className="application-form__section">
        <h3 className="application-form__section-title">{section_2.title}</h3>
        {section_2.inputs.map((input, index) => {
          switch (input.type) {
            case 'text':
              return (
                <div className="application-form__simple-input" key={index}>
                  <InputField
                    name={input.name}
                    label={input.label}
                    type="text"
                    placeholder={input.placeholder}
                    errorMessage=""
                    getValue={() => {}}
                  />
                </div>
              );
            case 'file':
              return (
                <div className="application-form__simple-input" key={index}>
                  <FileUpload
                    name={input.name}
                    label={input.label}
                    placeholder={input.placeholder}
                    errorMessage=""
                    onValueChange={() => {}}
                  />
                </div>
              );
            case 'checkbox':
              return (
                <div className="application-form__styled-input" key={index}>
                  <Checkbox
                    name={input.name}
                    checkboxText={input.checkboxText}
                    type="checkbox"
                    errorMessage=""
                    getCheckboxValue={() => {}}
                  />
                </div>
              );
          }
        })}
      </section>
      <section className="application-form__section">
        <Button label={button.label} handleClick={() => {}} />
      </section>
    </form>
  );
};

ApplicationForm.propTypes = {
  data: {
    section_1: {
      title: string,
      inputs: arrayOf(shape),
    },
    section_2: {
      title: string,
      inputs: arrayOf(shape),
    },
    button: {
      label: string,
    },
  },
};
