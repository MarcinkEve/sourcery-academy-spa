import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import classNames from 'classnames';

import { ROUTES } from '~/constants/routes';
import { ACADEMY_TYPE } from '~/constants/academyType';
import BottomParticles from '~/assets/particles/apply-to-academy-bottom-particles.svg';
import TextSection from '~/components/TextSection';

import { artwork } from './applyToAcademyArtwork';
import './apply-to-academy';

export const ApplyToAcademy = ({ data }) => {
  const currentAcademyType = location.pathname.slice(1);
  const [
    isParticlePositionNonDefault,
    setIsParticlePositionNonDefault,
  ] = useState(false);

  let Image;
  let TopParticles;

  switch (currentAcademyType) {
    case ACADEMY_TYPE.DEVELOPERS:
      Image = artwork[ACADEMY_TYPE.DEVELOPERS].image;
      TopParticles = artwork[ACADEMY_TYPE.DEVELOPERS].particles;
      break;
    case ACADEMY_TYPE.FRONTEND:
      Image = artwork[ACADEMY_TYPE.FRONTEND].image;
      TopParticles = artwork[ACADEMY_TYPE.FRONTEND].particles;
      break;
    case ACADEMY_TYPE.TESTERS:
      Image = artwork[ACADEMY_TYPE.TESTERS].image;
      TopParticles = artwork[ACADEMY_TYPE.TESTERS].particles;
      break;
  }

  useEffect(() => {
    if (currentAcademyType === ACADEMY_TYPE.FRONTEND)
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
            headingContent={<h2>{data.title}</h2>}
            isParagraphTextBold
            paragraphContent={<p>{data.text}</p>}
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
  data: object.isRequired,
};
