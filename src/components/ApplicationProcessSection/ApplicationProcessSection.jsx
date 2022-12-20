import React from 'react';
import { array } from 'prop-types';

import { ApplicationProcess } from '~/components/ApplicationProcess/ApplicationProcess';
import IconLine from '~/assets/lines/application-process-line.svg';
import IconParticlesTop from '~/assets/particles/application-process-particles-top.svg';
import IconParticlesBottom from '~/assets/particles/application-process-particles-bottom.svg';

import { icons } from './data';
import './applicationProcessSection.scss';

export const ApplicationProcessSection = (text) => {
  return (
    <div className="application-section">
      <IconParticlesTop className="application-section__particles--top" />
      <IconLine className="application-section__svg-line" />
      <ApplicationProcess textsArray={text.text} iconsArray={icons} />
      <IconParticlesBottom className="application-section__particles--bottom" />
    </div>
  );
};

ApplicationProcessSection.propTypes = {
  text: array,
};
