import React from 'react';

import { number, arrayOf, shape, string, element } from 'prop-types';

import ApplicationStep from './ApplicationStep';

import './applicationProcess.scss';

export const ApplicationProcess = ({ stepsDataArray }) => {
  return (
    <div className="application-process">
      {stepsDataArray &&
        stepsDataArray.map(({ id, heading, paragraph, icon }, index) => (
          <ApplicationStep
            key={id}
            heading={heading}
            paragraph={paragraph}
            indexFromParent={index}
            icon={icon}
          />
        ))}
    </div>
  );
};

ApplicationProcess.propTypes = {
  stepsDataArray: arrayOf(
    shape({ id: number, heading: string, paragraph: string, icon: element })
  ).isRequired,
};
