import { shape, string, arrayOf, number } from 'prop-types';

export const applicationProcessType = arrayOf(
  shape({
    id: number.isRequired,
    heading: string.isRequired,
    paragraph: string.isRequired,
  })
);
