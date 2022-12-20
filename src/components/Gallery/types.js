import { arrayOf, shape, string, oneOf } from 'prop-types';

export const mediaListType = arrayOf(
  shape({
    academy: string.isRequired,
    type: oneOf(['image', 'video']).isRequired,
    thumbnail: string.isRequired,
    src: string.isRequired,
    alt: string,
  })
);
