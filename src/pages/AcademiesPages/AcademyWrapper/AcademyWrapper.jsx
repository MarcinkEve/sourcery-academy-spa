import React from 'react';
import { array } from 'prop-types';

import ApplicationProcessSection from '~/pages/AcademiesPages/AcademyWrapper/ApplicationProcessSection';
import ScheduleSection from '~/pages/AcademiesPages/AcademyWrapper/ScheduleSection';
import { scheduleType } from '~/pages/AcademiesPages/AcademyWrapper/ScheduleSection/ScheduleCardsWrapper/types';
import TestimonialSection from '~/pages/AcademiesPages/AcademyWrapper/TestimonialSection';
import { MediaSectionAcademies } from '~/pages/AcademiesPages/AcademyWrapper/MediaSection/MediaSectionAcademies';
import ExtraWrappingSection from '~/layouts/ExtraWrappingSection';

export const AcademyWrapper = ({ schedule, applicationText }) => {
  return (
    <>
      <ExtraWrappingSection>
        <ApplicationProcessSection applicationText={applicationText} />
        <ScheduleSection schedule={schedule} />
        <TestimonialSection />
        <MediaSectionAcademies />
      </ExtraWrappingSection>
    </>
  );
};

AcademyWrapper.propTypes = {
  schedule: scheduleType.isRequired,
  applicationText: array,
};
