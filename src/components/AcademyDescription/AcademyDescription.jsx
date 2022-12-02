import React from 'react';
// import { array, bool, oneOf, string } from 'prop-types';

import './academy-description.scss';
// import { ROUTES } from '../../../constants/routes';
// import IconDevelopersDescriptionLine from '../../assets/icons/icon-developers-description-line.svg';
import IconDevelopersDescriptionParticlesBottom from '../../assets/icons/icon-developers-description-particles-bottom.svg';
// import IconDevelopersDescriptionParticlesTop from '../../assets/icons/icon-developers-description-particles-top.svg';

export const AcademyDescription = () =>
  // isRightAlligned,
  // isHeadingSpacingLarge,
  // headingContent,
  // isParagraphTextBold,
  // paragraphContent,
  // buttonText,
  // pageRoute,
  // svgImage,
  {
    return (
      <section className="academy-description">
        {/* <div className="intro-section__paragraph">
        <TextSection
          isRightAlligned={isRightAlligned}
          isHeadingSpacingLarge={isHeadingSpacingLarge}
          headingContent={<h2>{headingContent}</h2>}
          isParagraphTextBold={isParagraphTextBold}
          paragraphContent={<p>{paragraphContent}</p>}
          buttonText={buttonText}
          pageRoute={pageRoute}
        />
      </div> */}
        {/*{svgImage} */}
        {/* <IconDevelopersDescriptionLine/> */}
        <IconDevelopersDescriptionParticlesBottom />
      </section>
    );
  };

// AcademyDescription.propTypes = {
//   theme: PropTypes.string,
//   theme: string,
//   isRightAlligned: bool,
//   isHeadingSpacingLarge: bool,
//   headingContent: string.isRequired,
//   isParagraphTextBold: bool,
//   paragraphContent: string.isRequired,
//   buttonText: string,
//   pageRoute: oneOf([...Object.values(ROUTES)]),
//   svgImage: array.isRequired,
// };
