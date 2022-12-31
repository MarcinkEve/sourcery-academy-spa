import { object } from 'prop-types';
import React from 'react';

import Admission from '~/components/Admission';
import DatesContainer from '~/components/DatesContainer';
import Particles from '~/assets/particles/particles-admission-section.svg';
import Line from '~/assets/lines/line-admission-section.svg';
import Image from '~/assets/images/admission-section.svg';

import './admission-section';

export const AdmissionSection = ({ location, data }) => {
  const academyType = location.pathname.slice(1);

  return (
    <section className="admission-section">
      <Admission content={data[academyType].admission} />
      <Particles className="admission-section__particles" />
      <Line className="admission-section__line" />
      <Image className="admission-section__image" />
      <DatesContainer
        title="Dates"
        cardData={data[academyType].dates}
      ></DatesContainer>
    </section>
  );
};

AdmissionSection.propTypes = {
  location: object.isRequired,
  data: object.isRequired,
};
