import React, { useState, createContext } from 'react';
import { string } from 'prop-types';

import IconSuccessImage from '~/assets/icons/icon-success-image.svg';
import Particles from '~/assets/particles/application-form-particles.svg';
import ApplicationForm from '~/components/ApplicationForm';
import { SuccessMessage } from '~/components/SuccessMessage/SuccessMessage';
import PageLayout from '~/layout/pageLayout';

import './application-page.scss';
import { data as applicationPageData } from './mockData';

export const FormValuesContext = createContext();

export const ApplicationPage = ({ title, theme }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { section_1 } = applicationPageData;

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

  const inputValuesHandlers = {
    setTypeValue: (e) => setFormValues({ ...formValues, type: e }),
    setCityValue: (e) => setFormValues({ ...formValues, city: e }),
    setFirstNameValue: (e) => setFormValues({ ...formValues, firstName: e }),
    setLastNameValue: (e) => setFormValues({ ...formValues, lastName: e }),
    setEmailValue: (e) => setFormValues({ ...formValues, email: e }),
    setResumeValue: (e) => setFormValues({ ...formValues, resume: e.name }),
    setCheckboxValue: (e) => setFormValues({ ...formValues, checkbox: e }),
  };

  const isButtonDisabled = Object.values(formValues).some((value) =>
    [null, undefined].includes(value)
  );

  const submitHandler = () => {
    setIsSubmitted(true);
    console.table(formValues); //eslint-disable-line
  };

  return (
    <PageLayout theme={theme}>
      <FormValuesContext.Provider value={inputValuesHandlers}>
        <div className="form-layout">
          <h1 className="form-layout__container-header">{title}</h1>
          <div className="form-layout__content-container">
            <div className="form-layout__content">
              {isSubmitted ? (
                <SuccessMessage />
              ) : (
                <ApplicationForm
                  data={applicationPageData}
                  isButtonDisabled={isButtonDisabled}
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
      </FormValuesContext.Provider>
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
