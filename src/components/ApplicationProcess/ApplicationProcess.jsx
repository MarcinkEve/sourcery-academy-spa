import React from 'react';

import { arrayOf, element, shape, string } from 'prop-types';

import ApplicationStep from './ApplicationStep';
import { defaultData } from './defaultData';
import './applicationProcess.scss';

export const ApplicationProcess = ({ data }) => {
  return (
    <div className="application-process">
      {data.map(({ id, heading, paragraph, icon }, index) => (
        <ApplicationStep
          key={id}
          heading={heading}
          paragraph={paragraph}
          icon={icon}
          odd={index % 2 === 1 ? false : true}
        />
      ))}
    </div>
  );
};

ApplicationProcess.propTypes = {
  data: arrayOf(
    shape({ id: string, heading: string, paragraph: string, icon: element })
  ),
};

ApplicationProcess.defaultProps = {
  data: defaultData,
};
