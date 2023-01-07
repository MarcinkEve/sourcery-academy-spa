import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layouts/pageLayout';
import AcademyWrapper from '~/pages/AcademiesPages/AcademyWrapper';
import DevelopersCornerImage from '~/assets/images/developers-corner-photo.jpg';
import { ACADEMY_TYPE } from '~/constants/academyType';
import { applyToAcademyDecorators } from '~/pages/AcademiesPages/AcademyWrapper/ApplyToAcademy/applyToAcademyDecorators';

import applyToAcademyText from '../applyToAcademyData.json';
import admissionData from '../admissionData.json';
import applicationProcessData from '../applicationProcessData.json';
import scheduleData from '../scheduleData.json';
import academyLandingSectionData from '../academyLandingSectionData.json';

export const Developers = ({ theme }) => {
  const landingSectionData = {
    ...academyLandingSectionData.developers,
    image: {
      src: DevelopersCornerImage,
      alt: 'Developers academy graduators',
    },
  };

  const applyToAcademyData = {
    ...applyToAcademyText[ACADEMY_TYPE.DEVELOPERS],
    academyType: ACADEMY_TYPE.DEVELOPERS,
    image: applyToAcademyDecorators[ACADEMY_TYPE.DEVELOPERS].image,
    particles: applyToAcademyDecorators[ACADEMY_TYPE.DEVELOPERS].particles,
  };

  return (
    <PageLayout theme={theme}>
      <AcademyWrapper
        schedule={scheduleData[ACADEMY_TYPE.DEVELOPERS]}
        applicationText={applicationProcessData.developersText}
        landingSectionData={landingSectionData}
        applyToAcademyData={applyToAcademyData}
        admissionSectionData={admissionData[ACADEMY_TYPE.DEVELOPERS]}
      />
    </PageLayout>
  );
};

Developers.propTypes = {
  theme: string,
};
