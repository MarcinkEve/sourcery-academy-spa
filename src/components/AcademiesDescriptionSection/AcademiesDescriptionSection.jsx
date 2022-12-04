import React from 'react';

import './academies-description-section.scss';
import AcademyDevelopersDescription from '../AcademyDevelopersDescription';
import AcademyTestersDescription from '../AcademyTestersDescription';

export const AcademiesDescriptionSection = () => {
  return (
    <section
      className="academies-description-section"
      id="academies-decription-section"
    >
      <AcademyDevelopersDescription />
      <AcademyTestersDescription />
    </section>
  );
};
