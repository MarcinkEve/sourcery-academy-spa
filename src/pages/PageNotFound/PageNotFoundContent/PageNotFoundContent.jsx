import React from 'react';

import { ROUTES } from '~/constants/routes';
import TextSection from '~/components/UI/TextSection';
import Image from '~/assets/images/testers-description.svg';

import './page-not-found-content.scss';

export const PageNotFoundContent = () => {
  return (
    <div className="page-not-found">
      <TextSection
        headingContent={
          <h1>
            <span className="page-not-found__heading-span">🕵️‍♂️</span>
            {'404 - Page Not Found'}
          </h1>
        }
        isHeadingSpacingLarge
        paragraphContent={<p>{'Junior developers are on it!'}</p>}
        buttonText={'Go to Homepage'}
        pageRoute={ROUTES.HOME}
      />
      <Image className="page-not-found__image" />
    </div>
  );
};
