import React from 'react';
import { string } from 'prop-types';

import PageLayout from '~/layouts/pageLayout';
import AcademyWrapper from '~/pages/AcademiesPages/AcademyWrapper';
import { ACADEMY_TYPE } from '~/constants/academyType';
import { applyToAcademyDecorators } from '~/pages/AcademiesPages/AcademyWrapper/ApplyToAcademy/applyToAcademyDecorators';

import applyToAcademyText from '../applyToAcademyData.json';
import applicationProcessData from '../applicationProcessData.json';
import scheduleData from '../scheduleData.json';

export const Developers = ({ theme }) => {
  const applyToAcademyData = {
    ...applyToAcademyText[ACADEMY_TYPE.DEVELOPERS],
    academyType: ACADEMY_TYPE.DEVELOPERS,
    Image: applyToAcademyDecorators[ACADEMY_TYPE.DEVELOPERS].image,
    TopParticles: applyToAcademyDecorators[ACADEMY_TYPE.DEVELOPERS].particles,
  };

  return (
    <PageLayout theme={theme}>
      <AcademyWrapper
        schedule={scheduleData}
        applicationText={applicationProcessData.developersText}
        applyToAcademyData={applyToAcademyData}
      />
    </PageLayout>
  );
};

Developers.propTypes = {
  theme: string,
};
