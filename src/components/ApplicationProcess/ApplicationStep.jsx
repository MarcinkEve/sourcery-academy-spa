import React from 'react';

import { string, bool, object } from 'prop-types';

import './applicationStep.scss';

const ApplicationStep = ({ odd, heading, paragraph, icon, theme }) => {
  return (
    <div className="application-step" theme={theme}>
      <div className={`application-step--${odd ? 'odd' : 'even'}-number`}>
        <div className="application-step__text-container">
          <h2 className="application-step__heading">{heading}</h2>
          <p className="application-step__paragraph">{paragraph}</p>
        </div>
        <div className="application-step__svg-container">{icon}</div>
      </div>
    </div>
  );
};

ApplicationStep.propTypes = {
  odd: bool,
  heading: string,
  paragraph: string,
  icon: object,
  theme: string,
};

export default ApplicationStep;
