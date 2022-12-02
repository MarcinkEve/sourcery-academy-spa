import React from 'react';
import { bool, oneOf, string } from 'prop-types';

import './intro-section.scss';
import IntroIcon from '../../assets/icons/icon-intro.svg';
import TextSection from '../TextSection';
import { ROUTES } from '../../constants/routes';

export const IntroSection = ({
  isRightAlligned,
  isHeadingSpacingLarge,
  headingContent,
  isParagraphTextBold,
  paragraphContent,
  buttonText,
  pageRoute,
}) => {
  return (
    <section className="intro-section">
      <div className="intro-section__paragraph">
        <TextSection
          isRightAlligned={isRightAlligned}
          isHeadingSpacingLarge={isHeadingSpacingLarge}
          headingContent={<h2>{headingContent}</h2>}
          isParagraphTextBold={isParagraphTextBold}
          paragraphContent={<p>{paragraphContent}</p>}
          buttonText={buttonText}
          pageRoute={pageRoute}
        />
      </div>
      <IntroIcon className="intro-section__image" />
    </section>
  );
};

IntroSection.propTypes = {
  isRightAlligned: bool,
  isHeadingSpacingLarge: bool,
  headingContent: string.isRequired,
  isParagraphTextBold: bool,
  paragraphContent: string.isRequired,
  buttonText: string,
  pageRoute: oneOf([...Object.values(ROUTES)]),
};
