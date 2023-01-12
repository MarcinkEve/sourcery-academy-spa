import React, { useEffect } from 'react';

import AdmissionSection from '~/pages/AcademiesPages/AcademyWrapper/AdmissionSection';
import { admissionSectionType } from '~/pages/AcademiesPages/AcademyWrapper/AdmissionSection/type';
import ApplicationProcessSection from '~/pages/AcademiesPages/AcademyWrapper/ApplicationProcessSection';
import AcademyLandingSection from '~/pages/AcademiesPages/AcademyWrapper/AcademyLandingSection';
import { landingSectionDataTypes } from '~/pages/AcademiesPages/AcademyWrapper/AcademyLandingSection/types.js';
import { applicationProcessType } from '~/pages/AcademiesPages/AcademyWrapper/ApplicationProcessSection/types';
import ApplyToAcademy from '~/pages/AcademiesPages/AcademyWrapper/ApplyToAcademy';
import { applyToAcademyType } from '~/pages/AcademiesPages/AcademyWrapper/ApplyToAcademy/types';
import ScheduleSection from '~/pages/AcademiesPages/AcademyWrapper/ScheduleSection';
import { scheduleType } from '~/pages/AcademiesPages/AcademyWrapper/ScheduleSection/ScheduleCardsWrapper/types';
import TestimonialSection from '~/pages/AcademiesPages/AcademyWrapper/TestimonialSection';
import { MediaSectionAcademies } from '~/pages/AcademiesPages/AcademyWrapper/MediaSection/MediaSectionAcademies';
import ExtraWrappingSection from '~/layouts/ExtraWrappingSection';
import { LoadingSpinner } from '~/components/UI/LoadingSpinner/LoadingSpinner';

import { getMedia } from './MediaSection/MediaProvider';

export const AcademyWrapper = ({
  schedule,
  applicationText,
  landingSectionData,
  applyToAcademyData,
  admissionSectionData,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isLoading } = getMedia();

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && (
        <>
          <AcademyLandingSection data={landingSectionData} />
          <ExtraWrappingSection>
            <ApplicationProcessSection applicationText={applicationText} />
            <AdmissionSection data={admissionSectionData} />
            <ScheduleSection schedule={schedule} />
            <TestimonialSection />
            <MediaSectionAcademies />
            <ApplyToAcademy data={applyToAcademyData} />
          </ExtraWrappingSection>
        </>
      )}
    </>
  );
};

AcademyWrapper.propTypes = {
  schedule: scheduleType.isRequired,
  applicationText: applicationProcessType.isRequired,
  applyToAcademyData: applyToAcademyType.isRequired,
  landingSectionData: landingSectionDataTypes.isRequired,
  admissionSectionData: admissionSectionType.isRequired,
};
