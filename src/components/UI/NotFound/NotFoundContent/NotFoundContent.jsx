import React from 'react';
import { shape } from 'prop-types';

import { ROUTES } from '~/constants/routes';
import TextSection from '~/components/UI/TextSection';
import { textSectionType } from '~/components/UI/TextSection/types';
import Image from '~/assets/images/testers-description.svg';

import './not-found-content.scss';

export const NotFoundContent = ({ data }) => {
  const { headingContent, paragraphContent, buttonText } = data;

  return (
    <div className="not-found">
      <TextSection
        className="not-found__text"
        headingContent={<h1>{headingContent}</h1>}
        isHeadingSpacingLarge
        paragraphContent={<p>{paragraphContent}</p>}
        buttonText={buttonText}
        pageRoute={ROUTES.HOME}
      />
      <Image className="not-found__image" />
    </div>
  );
};

NotFoundContent.propTypes = {
  data: shape(textSectionType).isRequired,
};
