import React from 'react';
import { bool, oneOf, string } from 'prop-types';

import './academy-developers-description.scss';
import { ROUTES } from '../../constants/routes';
import TextSection from '../TextSection';
import ImageDevelopersDescriptionParticlesTop from '../../assets/particles/developers-description-particles-top.svg';
import ImageDevelopersDescriptionParticlesBottom from '../../assets/particles/developers-description-particles-bottom.svg';
import ImageDevelopersDescription from '../../assets/images/developers-description.svg';
import LineDevelopersDescription from '../../assets/lines/developers-description-line.svg';

export const AcademyDevelopersDescription = ({
  isRightAlligned,
  isHeadingSpacingLarge,
  headingContent,
  isParagraphTextBold,
  paragraphContent,
  buttonText,
  pageRoute,
}) => {
  return (
    <>
      <section className="developers-description">
        <div className="developers-description__content">
          <ImageDevelopersDescriptionParticlesTop className="developers-description__top-particles" />
          <TextSection
            isRightAlligned={isRightAlligned}
            isHeadingSpacingLarge={isHeadingSpacingLarge}
            headingContent={<h3>{headingContent}</h3>}
            isParagraphTextBold={isParagraphTextBold}
            paragraphContent={<p>{paragraphContent}</p>}
            buttonText={buttonText}
            pageRoute={pageRoute}
          />
          <ImageDevelopersDescriptionParticlesBottom className="developers-description__bottom-particles" />
        </div>
        <ImageDevelopersDescription className="developers-description__icon" />
        <LineDevelopersDescription className="developers-description__line" />
      </section>
    </>
  );
};

AcademyDevelopersDescription.propTypes = {
  isRightAlligned: bool,
  isHeadingSpacingLarge: bool,
  headingContent: string.isRequired,
  isParagraphTextBold: bool,
  paragraphContent: string.isRequired,
  buttonText: string,
  pageRoute: oneOf([...Object.values(ROUTES)]),
};

//Leaving this for DEMO until data will be passed
AcademyDevelopersDescription.defaultProps = {
  isRightAlligned: false,
  isHeadingSpacingLarge: false,
  headingContent: 'Sourcery for Developers',
  isParagraphTextBold: false,
  paragraphContent:
    'A free of charge three-month cutting-edge technology course, available in the Spring and Fall of each year. Students are invited to the Devbridge in Kaunas and Vilnius offices to attend lectures and create custom projects with the help of software development professionals.',
  buttonText: 'Learn more',
  pageRoute: ROUTES.DEVELOPERS,
};
