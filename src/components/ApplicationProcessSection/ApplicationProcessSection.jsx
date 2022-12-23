import React from 'react';
import { array } from 'prop-types';

import { ApplicationProcess } from '~/components/ApplicationProcess/ApplicationProcess';
import IconLine from '~/assets/lines/application-process-line.svg';
import IconParticlesTop from '~/assets/particles/application-process-particles-top.svg';
import IconParticlesBottom from '~/assets/particles/application-process-particles-bottom.svg';

import { icons } from './data';
import './applicationProcessSection.scss';

export const ApplicationProcessSection = ({ applicationText }) => {
  return (
    <>
      {applicationText && (
        <section className="application-section">
          <IconParticlesTop className="application-section__particles--top" />
          <IconLine className="application-section__svg-line" />
          <ApplicationProcess textsArray={applicationText} iconsArray={icons} />
          <IconParticlesBottom className="application-section__particles--bottom" />
        </section>
      )}
    </>
  );
};

ApplicationProcessSection.propTypes = {
  applicationText: array.isRequired,
};
