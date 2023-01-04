import { shape, string } from 'prop-types';

export const landingSectionDataTypes = shape({
  title: string.isRequired,
  text: string.isRequired,
  videoSrc: string.isRequired,
  image: shape({
    src: string.isRequired,
    alt: string.isRequired,
  }),
});
