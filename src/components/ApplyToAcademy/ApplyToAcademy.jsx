import React from 'react';
import { string, oneOf, element, object, func } from 'prop-types';

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
}) => {
  return (
    <>
      <section className="apply-to-academy">
        <TopParticles
          className={`particles-top ${
            TopParticles.name === 'SvgApplyToAcademyFiveTopParticles'
              ? 'particles-top--five'
              : null
          }`}
        />
        <TextSection
          isRightAlligned={false}
          isHeadingSpacingLarge={true}
          headingContent={<h2>{headingText}</h2>}
          isParagraphTextBold={true}
          paragraphContent={<p>{mainText}</p>}
          buttonText="Apply now"
          pageRoute={route}
        />
        <div className="apply-to-academy__image-wrapper">
          <Image className="apply-to-academy__image" />
        </div>
      </section>
      <BottomParticles className="particles-bottom" />
    </>
  );
};

ApplyToAcademy.propTypes = {
  headingText: string,
  mainText: string,
  Image: func,
  TopParticles: func,
  route: oneOf([...Object.values(ROUTES)]),
};
