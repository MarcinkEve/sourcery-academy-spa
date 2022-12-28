import React from 'react';
import { shape } from 'prop-types';

import LineDevelopersDescription from '~/assets/decorators/lines/developers-description-line.svg';
import ImageDevelopersDescriptionParticlesBottom from '~/assets/decorators/particles/developers-description-particles-bottom.svg';
import ImageDevelopersDescriptionParticlesTop from '~/assets/decorators/particles/developers-description-particles-top.svg';
import ImageDevelopersDescription from '~/assets/images/developers-description.svg';
import TextSection from '~/components/UI/TextSection';
import { textSectionType } from '~/components/UI/TextSection/types';

import './academy-developers-description.scss';

export const AcademyDevelopersDescription = ({ developersDescriptionData }) => {
  const {
    headingContent,
    paragraphContent,
    buttonText,
    pageRoute,
  } = developersDescriptionData;
  return (
    <section className="developers-description">
      <div className="developers-description__content">
        <ImageDevelopersDescriptionParticlesTop className="developers-description__top-particles" />
        <TextSection
          headingContent={<h3>{headingContent}</h3>}
          paragraphContent={<p>{paragraphContent}</p>}
          buttonText={buttonText}
          pageRoute={pageRoute}
        />
        <ImageDevelopersDescriptionParticlesBottom className="developers-description__bottom-particles" />
      </div>
      <div className="developers-description__icons">
        <ImageDevelopersDescription className="developers-description__icons-image" />
        <LineDevelopersDescription className="developers-description__icons-line" />
      </div>
    </section>
  );
};

AcademyDevelopersDescription.propTypes = {
  developersDescriptionData: shape(textSectionType).isRequired,
};
