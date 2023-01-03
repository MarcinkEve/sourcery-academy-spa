import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import { ROUTES } from '~/constants/routes';
import { ACADEMY_TYPE } from '~/constants/academyType';
import BottomParticles from '~/assets/decorators/particles/apply-to-academy-bottom-particles.svg';
import TextSection from '~/components/UI/TextSection';

import { applyToAcademyType } from './types.js';
import './apply-to-academy';

export const ApplyToAcademy = ({ data }) => {
  const { title, text, academyType, image, particles } = data;
  const Image = image;
  const TopParticles = particles;
  const [
    isParticlePositionNonDefault,
    setIsParticlePositionNonDefault,
  ] = useState(false);

  useEffect(() => {
    if (academyType === ACADEMY_TYPE.FRONTEND)
      setIsParticlePositionNonDefault(true);
  }, []);

  return (
    data && (
      <section className="apply-to-academy">
        {TopParticles && (
          <TopParticles
            className={classNames('apply-to-academy__particles-top', {
              'apply-to-academy__particles-top--five': isParticlePositionNonDefault,
            })}
          />
        )}
        <div>
          <TextSection
            isHeadingSpacingLarge
            headingContent={<h2>{title}</h2>}
            isParagraphTextBold
            paragraphContent={<p>{text}</p>}
            buttonText="Apply now"
            pageRoute={ROUTES.APPLICATION}
          />
        </div>
        {Image && (
          <>
            <div className="apply-to-academy__image-wrapper">
              <Image className="apply-to-academy__image" />
            </div>
            <BottomParticles className="apply-to-academy__particles-bottom" />
          </>
        )}
      </section>
    )
  );
};

ApplyToAcademy.propTypes = {
  data: applyToAcademyType.isRequired,
};
