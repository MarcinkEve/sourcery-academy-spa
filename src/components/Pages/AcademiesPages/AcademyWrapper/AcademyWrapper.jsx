import React from 'react';
import { array } from 'prop-types';

import { ApplicationProcessSection } from '~/components/ApplicationProcessSection/ApplicationProcessSection';
import ScheduleSection from '~/components/ScheduleSection';
import { scheduleType } from '~/components/ScheduleCardsWrapper/types';
import TestimonialSection from '~/components/TestimonialSection/Academies';
import { MediaSectionAcademies } from '~/components/MediaSection/MediaSectionAcademies/MediaSectionAcademies';
import ExtraWrappingSection from '~/layout/ExtraWrappingSection';

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
