import React from 'react';
import { string, oneOf, element } from 'prop-types';

import { ROUTES } from '~/constants/routes';
import TextSection from '~/components/TextSection';
import './apply-to-academy';

export const ApplyToAcademy = ({ headingText, mainText, route, Image }) => {
  return (
    <section className="apply-to-academy">
      <TextSection
        isRightAlligned={false}
        isHeadingSpacingLarge={true}
        headingContent={<h2>{headingText}</h2>}
        isParagraphTextBold={true}
        paragraphContent={<p>{mainText}</p>}
        buttonText="Apply now"
        pageRoute={route}
      />
      <Image className="apply-to-academy__image" />
    </section>
  );
};

ApplyToAcademy.propTypes = {
  headingText: string,
  mainText: string,
  Image: element,
  route: oneOf([...Object.values(ROUTES)]),
};
