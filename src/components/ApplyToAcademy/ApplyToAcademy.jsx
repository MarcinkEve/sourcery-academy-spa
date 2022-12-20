import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import classNames from 'classnames';

import { ROUTES } from '~/constants/routes';
import BottomParticles from '~/assets/particles/apply-to-academy-bottom-particles.svg';
import TextSection from '~/components/TextSection';
import DevelopersImage from '~/assets/images/apply-to-academy-developers.svg';
import FrontendImage from '~/assets/images/apply-to-academy-frontend.svg';
import TestersImage from '~/assets/images/apply-to-academy-testers.svg';
import TopThreeParticles from '~/assets/particles/apply-to-academy-three-top-particles.svg';
import TopFiveParticles from '~/assets/particles/apply-to-academy-five-top-particles.svg';

import './apply-to-academy';

export const ApplyToAcademy = ({ location, data }) => {
  const academyType = location.pathname.slice(1);
  const artwork = {
    images: {
      developers: DevelopersImage,
      frontend: FrontendImage,
      testers: TestersImage,
    },
    particles: {
      developers: TopThreeParticles,
      frontend: TopFiveParticles,
      testers: TopThreeParticles,
    },
  };
  const Image = artwork.images[academyType];
  const TopParticles = artwork.particles[academyType];

  const [
    isParticlePositionNonDefault,
    setIsParticlePositionNonDefault,
  ] = useState(false);

  useEffect(() => {
    if (academyType === 'frontend')
      return setIsParticlePositionNonDefault(true);
  }, []);

  return (
    <section className="apply-to-academy">
      {TopParticles && (
        <TopParticles
          className={classNames('apply-to-academy__particles-top', {
            'apply-to-academy__particles-top--five': isParticlePositionNonDefault,
          })}
        />
      )}
      <TextSection
        isHeadingSpacingLarge
        headingContent={<h2>{data[academyType].title}</h2>}
        isParagraphTextBold
        paragraphContent={<p>{data[academyType].text}</p>}
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
  );
};

ApplyToAcademy.propTypes = {
  location: object.isRequired,
  data: object.isRequired,
};
