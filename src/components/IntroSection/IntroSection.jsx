import React from 'react';
import { shape } from 'prop-types';

import './intro-section.scss';
import IntroIcon from '~/assets/images/intro.svg';
import TextSection from '~/components/TextSection';
import { textSectionType } from '~/components/TextSection/types';

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
    </section>
  );
};

IntroSection.propTypes = {
  introSectionData: shape(textSectionType).isRequired,
};
