import React from 'react';
import { string, number, shape, element } from 'prop-types';

import './applicationStep.scss';

export const ApplicationStep = ({
  indexFromParent,
  heading,
  paragraph,
  iconObject,
}) => {
  const isIndexOdd = indexFromParent % 2 === 0;

  return (
    <div className="application-step">
      <div
        className={`application-step__${isIndexOdd ? 'odd' : 'even'}-number`}
      >
        <div className="application-step__text-container">
          <h3 className="application-step__heading">{heading}</h3>
          <div className="application-step__line">
            <div className="application-step__svg-container">
              {iconObject && iconObject.icon}
            </div>
          </div>

          <p className="application-step__paragraph">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

ApplicationStep.propTypes = {
  indexFromParent: number,
  heading: string,
  paragraph: string,
  iconObject: shape({ id: number, icon: element }),
};
