import React from 'react';

import ApplicationProcessSection from '~/pages/AcademiesPages/AcademyWrapper/ApplicationProcessSection';
import { applicationProcessType } from '~/pages/AcademiesPages/AcademyWrapper/ApplicationProcessSection/types';
import ApplyToAcademy from '~/pages/AcademiesPages/AcademyWrapper/ApplyToAcademy';
import { applyToAcademyType } from '~/pages/AcademiesPages/AcademyWrapper/ApplyToAcademy/types';
import ScheduleSection from '~/pages/AcademiesPages/AcademyWrapper/ScheduleSection';
import { scheduleType } from '~/pages/AcademiesPages/AcademyWrapper/ScheduleSection/ScheduleCardsWrapper/types';
import TestimonialSection from '~/pages/AcademiesPages/AcademyWrapper/TestimonialSection';
import { MediaSectionAcademies } from '~/pages/AcademiesPages/AcademyWrapper/MediaSection/MediaSectionAcademies';
import ExtraWrappingSection from '~/layouts/ExtraWrappingSection';

export const AcademyWrapper = ({
  schedule,
  applicationText,
  applyToAcademyData,
}) => {
  return (
    <>
      <ExtraWrappingSection>
        <ApplicationProcessSection applicationText={applicationText} />
        <ScheduleSection schedule={schedule} />
        <TestimonialSection />
        <MediaSectionAcademies />
        <ApplyToAcademy data={applyToAcademyData} />
      </ExtraWrappingSection>
    </>
  );
};

AcademyWrapper.propTypes = {
  schedule: scheduleType.isRequired,
  applicationText: applicationProcessType.isRequired,
  applyToAcademyData: applyToAcademyType.isRequired,
};
