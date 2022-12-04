import React from 'react';

import AcademyDevelopersDescription from '../AcademyDevelopersDescription';
import AcademyTestersDescription from '../AcademyTestersDescription';
import AcademyFrontEndDescription from '../AcademyFrontEndDescription';
import AcademyKidsDescription from '../AcademyKidsDescription';

export const AcademiesDescriptionSection = () => {
  return (
    <section
      className="academies-description-section"
      id="academies-decription-section"
    >
      <AcademyDevelopersDescription />
      <AcademyTestersDescription />
      <AcademyFrontEndDescription />
      <AcademyKidsDescription />
      {/*@TODO: DELETE --> as a placeholder until "Testimonials" section is added: */}
      <h2 style={{ textAlign: 'right', opacity: '0.5' }}>Testimonials</h2>
    </section>
  );
};
