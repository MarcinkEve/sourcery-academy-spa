import React from 'react';

import { string, number, object } from 'prop-types';

import './applicationStep.scss';
import SvgLine from '../../assets/icons/icon-long-horizontal-line.svg';

const ApplicationStep = ({
  indexFromParent,
  heading,
  paragraph,
  iconObject,
}) => {
  const indexIsOdd = indexFromParent % 2 === 0 ? true : false;

  return (
    <div className="application-step">
      <div
        className={`application-step--${indexIsOdd ? 'odd' : 'even'}-number`}
      >
        <div className="application-step__text-container">
          <h2 className="application-step__heading">{heading}</h2>
          <div className="application-step__svg-line">
            <SvgLine />
          </div>
          <p className="application-step__paragraph">{paragraph}</p>
        </div>
        <div className="application-step__svg-container">
          {iconObject && iconObject.icon}
        </div>
      </div>
    </div>
  );
};

ApplicationStep.propTypes = {
  indexFromParent: number,
  heading: string,
  paragraph: string,
  iconObject: object,
};

export default ApplicationStep;
