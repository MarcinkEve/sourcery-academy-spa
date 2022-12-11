import React from 'react';

import './intro-section.scss';
import IntroIcon from '~/assets/images/intro.svg';
import TextSection from '~/components/TextSection';
import { textSectionType } from '~/components/IntroSection/types';

export const IntroSection = ({ introSectionData }) => {
  const {
    headingContent,
    paragraphContent,
    buttonText,
    pageRoute,
  } = introSectionData;
  return (
    <section className="intro-section">
      <div className="intro-section__paragraph">
        <TextSection
          isRightAlligned={false}
          isHeadingSpacingLarge={false}
          headingContent={<h2>{headingContent}</h2>}
          isParagraphTextBold={false}
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
  introSectionData: textSectionType.isRequired,
};
