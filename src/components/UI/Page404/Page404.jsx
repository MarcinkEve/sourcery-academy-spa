import React from 'react';
import { shape } from 'prop-types';

import { ROUTES } from '~/constants/routes';
import TextSection from '~/components/UI/TextSection';
import { textSectionType } from '~/components/UI/TextSection/types';

import './page-404.scss';

export const Page404 = ({ data }) => {
  const { title, text, buttonText } = data;

  return (
    <div className="page404">
      <TextSection
        className="page404__text"
        headingContent={<h1>{title}</h1>}
        paragraphContent={<p>{text}</p>}
        buttonText={buttonText}
        pageRoute={ROUTES.HOME}
      />
    </div>
  );
};

Page404.propTypes = {
  data: shape(textSectionType).isRequired,
};
