import React from 'react';

import { arrayOf, element, shape, string } from 'prop-types';

import ApplicationStep from './ApplicationStep';
import { defaultData } from './defaultData';
import './applicationProcess.scss';

export const ApplicationProcess = ({ data }) => {
  return (
    <div className="application-process">
      {data.map((element, index) => (
        <ApplicationStep
          // index as key for now
          key={index}
          heading={element.heading}
          paragraph={element.paragraph}
          icon={element.icon}
          odd={index % 2 == 1 ? false : true}
        />
      ))}
    </div>
  );
};

ApplicationProcess.propTypes = {
  data: arrayOf(shape({ heading: string, paragraph: string, icon: element })),
};

ApplicationProcess.defaultProps = {
  data: defaultData,
};
