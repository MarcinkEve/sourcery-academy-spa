import React from 'react';
import { shape } from 'prop-types';

import { textSectionType } from '~/components/UI/TextSection/types';
import AcademyDevelopersDescription from '~/pages/Homepage/AcademiesDescriptionSection/AcademyDevelopersDescription';
import AcademyTestersDescription from '~/pages/Homepage/AcademiesDescriptionSection/AcademyTestersDescription';
import AcademyFrontEndDescription from '~/pages/Homepage/AcademiesDescriptionSection/AcademyFrontEndDescription';
import AcademyKidsDescription from '~/pages/Homepage/AcademiesDescriptionSection/AcademyKidsDescription';

import './academies-description-section';

export const AcademiesDescriptionSection = ({
  developersDescriptionData,
  testersDescriptionData,
  frontEndDescriptionData,
  kidsDescriptionData,
}) => {
  return (
    <section
      className="academies-description-section"
      id="academies-decription-section"
    >
      <AcademyDevelopersDescription
        developersDescriptionData={developersDescriptionData}
      />
      <AcademyTestersDescription
        testersDescriptionData={testersDescriptionData}
      />
      <AcademyFrontEndDescription
        frontEndDescriptionData={frontEndDescriptionData}
      />
      <AcademyKidsDescription kidsDescriptionData={kidsDescriptionData} />
    </section>
  );
};

AcademiesDescriptionSection.propTypes = {
  developersDescriptionData: shape(textSectionType).isRequired,
  testersDescriptionData: shape(textSectionType).isRequired,
  frontEndDescriptionData: shape(textSectionType).isRequired,
  kidsDescriptionData: shape(textSectionType).isRequired,
};
