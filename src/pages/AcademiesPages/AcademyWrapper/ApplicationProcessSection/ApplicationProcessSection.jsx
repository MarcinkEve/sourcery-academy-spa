import React from 'react';

import IconLine from '~/assets/decorators/lines/application-process-line.svg';
import IconParticlesBottom from '~/assets/decorators/particles/application-process-particles-bottom.svg';
import IconParticlesTop from '~/assets/decorators/particles/application-process-particles-top.svg';
import ApplicationProcess from '~/pages/AcademiesPages/AcademyWrapper/ApplicationProcessSection/ApplicationProcess';

import { icons } from './data';
import { applicationProcessType } from './types';
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
  applicationText: applicationProcessType.isRequired,
};
