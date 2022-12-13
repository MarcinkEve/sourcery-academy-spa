import React from 'react';
import {} from 'prop-types';
import { useLocation } from 'react-router-dom';
import { ApplyToAcademy } from '../../../ApplyToAcademy/ApplyToAcademy';
import { applyToAcademyData } from './mockDataAcademyWrapper';
import { ROUTES } from '~/constants/routes';

export const AcademyWrapper = () => {
  const location = useLocation();
  const academyType = location.pathname.slice(1);

  return (
    <ApplyToAcademy
      headingText={applyToAcademyData[academyType].title}
      mainText={applyToAcademyData[academyType].paragraphTxt}
      route={ROUTES.APPLICATION}
      Image={applyToAcademyData[academyType].image}
      TopParticles={applyToAcademyData[academyType].topParticles}
    />
  );
};

AcademyWrapper.propTypes = {};
