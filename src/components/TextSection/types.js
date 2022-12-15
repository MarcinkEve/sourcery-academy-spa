import { bool, oneOf, string } from 'prop-types';

import { ROUTES } from '~/constants/routes';

export const textSectionType = {
  isRightAligned: bool,
  isHeadingSpacingLarge: bool,
  headingContent: string.isRequired,
  isParagraphTextBold: bool,
  paragraphContent: string.isRequired,
  buttonText: string,
  pageRoute: oneOf([...Object.values(ROUTES)]),
};
