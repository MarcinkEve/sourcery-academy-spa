import { bool, oneOf, shape, string } from 'prop-types';

import { ROUTES } from '~/constants/routes';

export const textSectionType = shape({
  isRightAligned: bool,
  isHeadingSpacingLarge: bool,
  headingContent: string.isRequired,
  isParagraphTextBold: bool,
  paragraphContent: string.isRequired,
  buttonText: string,
  pageRoute: oneOf([...Object.values(ROUTES)]),
});

export const articleTypes = shape({
  articleTitle: string.isRequired,
  articleContent: string.isRequired,
});
