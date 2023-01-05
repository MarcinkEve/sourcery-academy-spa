import React from 'react';
import { shape } from 'prop-types';

import { ROUTES } from '~/constants/routes';
import TextSection from '~/components/UI/TextSection';
import { textSectionType } from '~/components/UI/TextSection/types';
import Image from '~/assets/images/testers-description.svg';

import './page-404.scss';

export const Page404 = ({ data }) => {
  const { headingContent, paragraphContent, buttonText } = data;

  return (
    <div className="page404">
      <TextSection
        className="page404__text"
        headingContent={<h1>{headingContent}</h1>}
        isHeadingSpacingLarge
        paragraphContent={<p>{paragraphContent}</p>}
        buttonText={buttonText}
        pageRoute={ROUTES.HOME}
      />
      <Image className="page404__image" />
    </div>
  );
};

Page404.propTypes = {
  data: shape(textSectionType).isRequired,
};
