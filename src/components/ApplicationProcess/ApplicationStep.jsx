import React from 'react';

import { string, number, object } from 'prop-types';

import './applicationStep.scss';

const ApplicationStep = ({ indexFromParent, heading, paragraph, icon }) => {
  const indexIsOdd = indexFromParent % 2 === 0 ? true : false;

  return (
    <div className="application-step">
      <div
        className={`application-step--${indexIsOdd ? 'odd' : 'even'}-number`}
      >
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
  indexFromParent: number,
  heading: string,
  paragraph: string,
  icon: object,
};

export default ApplicationStep;
