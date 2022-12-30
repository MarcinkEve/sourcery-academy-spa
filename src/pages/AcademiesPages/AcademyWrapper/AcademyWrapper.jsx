import React from 'react';
import { array, object } from 'prop-types';

import ApplicationProcessSection from '~/pages/AcademiesPages/AcademyWrapper/ApplicationProcessSection';
import ApplyToAcademy from '~/pages/AcademiesPages/AcademyWrapper/ApplyToAcademy';
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
  applicationText: array,
  applyToAcademyData: object.isRequired,
};
