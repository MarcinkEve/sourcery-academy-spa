import { string, oneOf, element } from 'prop-types';
import { ROUTES } from '~/constants/routes';
import TextSection from '~/components/TextSection';
import React from 'react';

export const ApplyToAcademy = ({ headingText, mainText, route, icon }) => {
  return (
    <div style={{ display: 'flex' }}>
      <TextSection
        isRightAlligned={false}
        isHeadingSpacingLarge={true}
        headingContent={<h2>{headingText}</h2>}
        isParagraphTextBold={true}
        paragraphContent={<p>{mainText}</p>}
        buttonText="Apply now"
        pageRoute={route}
      />
      {icon}
    </div>
  );
};

ApplyToAcademy.propTypes = {
  headingText: string,
  mainText: string,
  icon: element,
  route: oneOf([...Object.values(ROUTES)]),
};
