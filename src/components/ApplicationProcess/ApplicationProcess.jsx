import React from 'react';

import { number, arrayOf, shape, string } from 'prop-types';

import ApplicationStep from './ApplicationStep';
import { defaultSvgs } from './defaultData';

import './applicationProcess.scss';

export const ApplicationProcess = ({ stepsArray }) => {
  return (
    <div className="application-process">
      {stepsArray.map(({ id, heading, paragraph }, index) => (
        <ApplicationStep
          key={id}
          heading={heading}
          paragraph={paragraph}
          icon={defaultSvgs[index].icon}
          indexFromParent={index}
        />
      ))}
    </div>
  );
};

ApplicationProcess.propTypes = {
  stepsArray: arrayOf(shape({ id: number, heading: string, paragraph: string }))
    .isRequired,
};
