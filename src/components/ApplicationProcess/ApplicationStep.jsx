import React from 'react';

import { string, number } from 'prop-types';

import './applicationStep.scss';

import { stepsSvgs } from './defaultData';

const ApplicationStep = ({ indexFromParent, heading, paragraph }) => {
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
        <div className="application-step__svg-container">
          {stepsSvgs[indexFromParent].icon}
        </div>
      </div>
    </div>
  );
};

ApplicationStep.propTypes = {
  indexFromParent: number,
  heading: string,
  paragraph: string,
};

export default ApplicationStep;
