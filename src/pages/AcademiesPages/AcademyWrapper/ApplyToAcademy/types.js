import { func, shape, string } from 'prop-types';

export const applyToAcademyType = shape({
  title: string.isRequired,
  text: string.isRequired,
  academyType: string.isRequired,
  Image: func,
  TopParticles: func,
});
