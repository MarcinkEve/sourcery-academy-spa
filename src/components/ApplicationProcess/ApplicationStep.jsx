import React from 'react';

import { string, bool, object } from 'prop-types';

import './applicationStep.scss';
import SvgLine from '../../assets/icons/icon-line.svg';

const ApplicationStep = ({ odd, heading, paragraph, icon }) => {
  return (
    <div className="application-step">
      <div className={`application-step--${odd ? 'odd' : 'even'}-number`}>
        <div className="application-step__text-container">
          <h2 className="application-step__heading">{heading}</h2>
          <div className="application-step__text-container--svg">
            <SvgLine />
          </div>
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
};

export default ApplicationStep;
