import React, { useState } from 'react';
import { string } from 'prop-types';

import './application-page.scss';
import IconSuccessImage from '~/assets/icons/icon-success-image.svg';
import Particles from '~/assets/particles/application-form-particles.svg';
import ApplicationForm from '~/components/ApplicationForm';
import { SuccessMessage } from '~/components/SuccessMessage/SuccessMessage';
import PageLayout from '~/layout/pageLayout';

import { data as applicationPageData } from './mockData';

export const ApplicationPage = ({ title, theme }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { section_1, section_2 } = applicationPageData;

  const defaultRadioTogglerValue = section_1.inputs[0].values[0];
  const defaultRadioValue = section_1.inputs[1].radioValues[0].value;

  const [formValues, setFormValues] = useState({
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
    input.getValue = (e) =>
      setFormValues({ ...formValues, [inputNeededName]: e });
  });

  //adding functions to get values form inputs
  section_2.inputs.forEach((input) => {
    input.getValue = (e) =>
      setFormValues({
        ...formValues,
        [input.name]: `${input.name === 'resume' ? e.name : e}`,
      });
  });

  const isBtnDisabled = Object.values(formValues).includes(null);

  const submitHandler = () => {
    setIsSubmitted(true);
    console.table(formValues); //eslint-disable-line
  };

  return (
    <PageLayout theme={theme}>
      <div className="form-layout">
        <h1 className="form-layout__container-header">{title}</h1>
        <div className="form-layout__content-container">
          <div className="form-layout__content">
            {isSubmitted ? (
              <SuccessMessage />
            ) : (
              <ApplicationForm
                data={applicationPageData}
                isBtnDisabled={isBtnDisabled}
                submitHandler={submitHandler}
              />
            )}
          </div>
          <div className="form-layout__image-section">
            <Particles className="form-layout__particles-icon" />
            <IconSuccessImage className="form-layout__image" />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

ApplicationPage.propTypes = {
  title: string,
  theme: string,
};

ApplicationPage.defaultProps = {
  title: 'Sourcery Academy Application',
};
