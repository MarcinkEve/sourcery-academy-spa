import React from 'react';

import { ROUTES } from '~/constants/routes';
import TextSection from '~/components/UI/TextSection';
import Image from '~/assets/images/testers-description.svg';

import './page-not-found-content.scss';

export const PageNotFoundContent = () => {
  return (
    <div className="page-not-found">
      <TextSection
        headingContent={<h1>{'404 - Page Not Found'}</h1>}
        isHeadingSpacingLarge
        paragraphContent={
          <p>{'Junior developers are still building this page!'}</p>
        }
        buttonText={'Back to Homepage'}
        pageRoute={ROUTES.HOME}
      />
      <Image className="page-not-found__image" />
    </div>
  );
};
