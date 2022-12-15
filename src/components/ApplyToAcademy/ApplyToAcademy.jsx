import React from 'react';
import { string, oneOf, func, bool } from 'prop-types';

import { ROUTES } from '~/constants/routes';
import TextSection from '~/components/TextSection';
import BottomParticles from '~/assets/particles/apply-to-academy-bottom-particles.svg';
import './apply-to-academy';

export const ApplyToAcademy = ({
  headingText,
  mainText,
  route,
  Image,
  TopParticles,
  isParticlePositionDefault,
}) => {
  return (
    <section className="apply-to-academy">
      {TopParticles && (
        <TopParticles
          className={`apply-to-academy__particles-top ${
            isParticlePositionDefault && 'apply-to-academy__particles-top--five'
          }`}
        />
      )}
      <TextSection
        isRightAlligned={false}
        isHeadingSpacingLarge={true}
        headingContent={<h2>{headingText}</h2>}
        isParagraphTextBold={true}
        paragraphContent={<p>{mainText}</p>}
        buttonText="Apply now"
        pageRoute={route}
      />
      {Image && (
        <div className="apply-to-academy__image-wrapper">
          <Image className="apply-to-academy__image" />
        </div>
      )}
      <BottomParticles className="apply-to-academy__particles-bottom" />
    </section>
  );
};

ApplyToAcademy.propTypes = {
  headingText: string.isRequired,
  mainText: string.isRequired,
  Image: func,
  TopParticles: func,
  route: oneOf([...Object.values(ROUTES)]),
  isParticlePositionDefault: bool,
};
