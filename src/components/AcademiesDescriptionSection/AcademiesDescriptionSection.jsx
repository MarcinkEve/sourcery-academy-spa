import React from 'react';

import AcademyDevelopersDescription from '~/components/AcademiesDescriptionSection/AcademyDevelopersDescription';
import AcademyTestersDescription from '../AcademyTestersDescription';
import AcademyFrontEndDescription from '../AcademyFrontEndDescription';
import AcademyKidsDescription from '../AcademyKidsDescription';
import { textSectionType } from '~/components/Pages/Homepage/types';

export const AcademiesDescriptionSection = ({ developersDescriptionData }) => {
  return (
    <section
      className="academies-description-section"
      id="academies-decription-section"
    >
      <AcademyDevelopersDescription
        developersDescriptionData={developersDescriptionData}
      />
      {/* <AcademyTestersDescription /> */}
      {/* <AcademyFrontEndDescription /> */}
      {/* <AcademyKidsDescription /> */}
      {/*@TODO: DELETE --> as a placeholder until "Testimonials" section is added: */}
      {/* <h2 style={{ textAlign: 'right', opacity: '0.5' }}>Testimonials</h2> */}
    </section>
  );
};

AcademiesDescriptionSection.propTypes = {
  developersDescriptionData: textSectionType.isRequired,
};
