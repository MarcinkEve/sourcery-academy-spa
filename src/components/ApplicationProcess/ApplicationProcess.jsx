import React from 'react';

import { number, arrayOf, shape, string } from 'prop-types';

import ApplicationStep from './ApplicationStep';

import './applicationProcess.scss';

export const ApplicationProcess = ({ stepsTextArray }) => {
  return (
    <div className="application-process">
      {stepsTextArray &&
        stepsTextArray.map(({ id, heading, paragraph }, index) => (
          <ApplicationStep
            key={id}
            heading={heading}
            paragraph={paragraph}
            indexFromParent={index}
          />
        ))}
    </div>
  );
};

ApplicationProcess.propTypes = {
  stepsTextArray: arrayOf(
    shape({ id: number, heading: string, paragraph: string })
  ).isRequired,
};
