import React, { useState, useEffect } from 'react';
import { string } from 'prop-types';

import { ROUTES } from '~/constants/routes';
import ExtraWrappingSection from '~/layout/ExtraWrappingSection';
import BottomParticles from '~/assets/particles/apply-to-academy-bottom-particles.svg';
import TextSection from '~/components/TextSection';
import { applyToAcademyData } from './applyToAcademyData';
import './apply-to-academy';

export const ApplyToAcademy = ({ location }) => {
  const academyType = location.pathname.slice(1);
  const Image = applyToAcademyData[academyType].image;
  const TopParticles = applyToAcademyData[academyType].topParticles;

  const [particlePositionNonDefault, setParticlePositionNonDefault] = useState(
    false
  );

  useEffect(() => {
    if (academyType === 'frontend') return setParticlePositionNonDefault(true);
  }, []);

  return (
    <ExtraWrappingSection>
      <section className="apply-to-academy">
        {TopParticles && (
          <TopParticles
            className={`apply-to-academy__particles-top ${
              particlePositionNonDefault &&
              'apply-to-academy__particles-top--five'
            }`}
          />
        )}
        <TextSection
          isRightAlligned={false}
          isHeadingSpacingLarge={true}
          headingContent={<h2>{applyToAcademyData[academyType].title}</h2>}
          isParagraphTextBold={true}
          paragraphContent={
            <p>{applyToAcademyData[academyType].paragraphTxt}</p>
          }
          buttonText="Apply now"
          pageRoute={ROUTES.APPLICATION}
        />
        {Image && (
          <div className="apply-to-academy__image-wrapper">
            <Image className="apply-to-academy__image" />
          </div>
        )}
        <BottomParticles className="apply-to-academy__particles-bottom" />
      </section>
    </ExtraWrappingSection>
  );
};

ApplyToAcademy.propTypes = {
  location: string.isRequired,
};
