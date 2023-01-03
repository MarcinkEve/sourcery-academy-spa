import React from 'react';
import { number, arrayOf, shape, string, element } from 'prop-types';

import { applicationProcessType } from '~/pages/AcademiesPages/AcademyWrapper/ApplicationProcessSection/types';

import { ApplicationStep } from './ApplicationStep';
import './applicationProcess.scss';

export const ApplicationProcess = ({ textsArray, iconsArray }) => {
  return (
    <div className="application-process">
      {textsArray &&
        iconsArray &&
        textsArray.map(({ id, heading, paragraph }, index) => (
          <ApplicationStep
            key={id}
            heading={heading}
            paragraph={paragraph}
            indexFromParent={index}
            iconObject={iconsArray.find((item) => item.id === id)}
          />
        ))}
    </div>
  );
};

ApplicationProcess.propTypes = {
  textsArray: applicationProcessType.isRequired,
  iconsArray: arrayOf(shape({ id: number, icon: element })).isRequired,
};
