import React from 'react';

import AcademyDevelopersDescription from '~/components/AcademiesDescriptionSection/AcademyDevelopersDescription';
import AcademyTestersDescription from '~/components/AcademiesDescriptionSection/AcademyTestersDescription';
import AcademyFrontEndDescription from '~/components/AcademiesDescriptionSection/AcademyFrontEndDescription';
import AcademyKidsDescription from '~/components/AcademiesDescriptionSection/AcademyKidsDescription';
import { textSectionType } from '~/components/AcademiesDescriptionSection/types';

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
  developersDescriptionData: textSectionType.isRequired,
  testersDescriptionData: textSectionType.isRequired,
  frontEndDescriptionData: textSectionType.isRequired,
  kidsDescriptionData: textSectionType.isRequired,
};
