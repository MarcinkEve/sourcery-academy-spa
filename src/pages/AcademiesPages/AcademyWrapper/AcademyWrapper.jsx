import React from 'react';
import { shape, string } from 'prop-types';

import ApplicationProcessSection from '~/pages/AcademiesPages/AcademyWrapper/ApplicationProcessSection';
import AcademyLandingSection from '~/pages/AcademiesPages/AcademyWrapper/AcademyLandingSection';
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
  landingSectionData,
  applyToAcademyData,
}) => {
  return (
    <>
      <AcademyLandingSection data={landingSectionData} />
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
  landingSectionData: shape({
    title: string.isRequired,
    text: string.isRequired,
    videoSrc: string.isRequired,
    image: shape({
      src: string.isRequired,
      alt: string.isRequired,
    }),
  }),
};
