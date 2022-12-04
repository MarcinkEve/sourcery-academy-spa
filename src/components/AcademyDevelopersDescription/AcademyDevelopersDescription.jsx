import React from 'react';
import { bool, oneOf, string } from 'prop-types';

import './academy-developers-description.scss';
import { ROUTES } from '../../constants/routes';
import TextSection from '../TextSection';
import IconDevelopersDescriptionParticlesTop from '../../assets/icons/icon-developers-description-particles-top.svg';
import IconDevelopersDescriptionParticlesBottom from '../../assets/icons/icon-developers-description-particles-bottom.svg';
import IconDevelopersDescription from '../../assets/icons/icon-developers-description.svg';

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
          <IconDevelopersDescriptionParticlesTop className="developers-description__top-particles" />
          <TextSection
            isRightAlligned={isRightAlligned}
            isHeadingSpacingLarge={isHeadingSpacingLarge}
            headingContent={<h3>{headingContent}</h3>}
            isParagraphTextBold={isParagraphTextBold}
            paragraphContent={<p>{paragraphContent}</p>}
            buttonText={buttonText}
            pageRoute={pageRoute}
            // className="developers-description__content-paragraph"
          />
          <IconDevelopersDescriptionParticlesBottom className="developers-description__bottom-particles" />
        </div>
        {/* <div className="developers-description__icons"> */}
        {/* <IconDevelopersDescriptionLine className="developers-description__icon-line" /> */}
        <IconDevelopersDescription className="developers-description__icon" />
        {/* </div> */}
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
