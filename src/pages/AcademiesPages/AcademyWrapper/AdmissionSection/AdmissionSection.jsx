import { object } from 'prop-types';
import React from 'react';

import Admission from '~/pages/AcademiesPages/AcademyWrapper/AdmissionSection/AdmissionComponent';
import DatesContainer from '~/pages/AcademiesPages/AcademyWrapper/AdmissionSection/DatesContainer';
import Particles from '~/assets/decorators/particles/particles-admission-section.svg';
import Line from '~/assets/decorators/lines/line-admission-section.svg';
import Image from '~/assets/images/admission-section.svg';

import './admission-section';

export const AdmissionSection = ({ data }) => {
  return (
    <section className="admission-section">
      <div className="admission-section__text-container">
        <Admission content={data.admission} />
      </div>
      <div className="admission-section__particles-container">
        <Particles className="admission-section__particles" />
      </div>
      <div className="admission-section__dates-container">
        <DatesContainer title="Dates" cardData={data.dates} />
        <Line className="admission-section__line" />
      </div>
      <div className="admission-section__image-container">
        <Image className="admission-section__image" />
      </div>
    </section>
  );
};

AdmissionSection.propTypes = {
  data: object.isRequired,
};
