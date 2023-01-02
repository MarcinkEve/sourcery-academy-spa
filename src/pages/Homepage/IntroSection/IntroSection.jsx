import React from 'react';
import { shape } from 'prop-types';

import IntroIcon from '~/assets/images/intro.svg';
import ColorSplash from '~/assets/decorators/intro-section-color-splash.svg';
import TextSection from '~/components/UI/TextSection';
import { textSectionType } from '~/components/UI/TextSection/types';

import './intro-section.scss';

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
          headingContent={<h2>{headingContent}</h2>}
          paragraphContent={<p>{paragraphContent}</p>}
          buttonText={buttonText}
          pageRoute={pageRoute}
        />
      </div>
      <IntroIcon className="intro-section__image" />
      <ColorSplash className="intro-section__background" />
    </section>
  );
};

IntroSection.propTypes = {
  introSectionData: shape(textSectionType).isRequired,
};
