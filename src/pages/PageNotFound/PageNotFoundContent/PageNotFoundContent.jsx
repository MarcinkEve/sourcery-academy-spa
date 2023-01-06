import React from 'react';
import { shape } from 'prop-types';

import { ROUTES } from '~/constants/routes';
import TextSection from '~/components/UI/TextSection';
import { textSectionType } from '~/components/UI/TextSection/types';
import Image from '~/assets/images/testers-description.svg';

import './page-not-found-content.scss';

export const PageNotFoundContent = ({ data }) => {
  const { headingContent, paragraphContent, buttonText } = data;

  return (
    <div className="page-not-found">
      <TextSection
        className="page-not-found__text"
        headingContent={<h1>{headingContent}</h1>}
        isHeadingSpacingLarge
        paragraphContent={<p>{paragraphContent}</p>}
        buttonText={buttonText}
        pageRoute={ROUTES.HOME}
      />
      <Image className="page-not-found__image" />
    </div>
  );
};

PageNotFoundContent.propTypes = {
  data: shape(textSectionType).isRequired,
};
