import FrontendImage from '~/assets/images/apply-to-academy-frontend.svg';
import TestersImage from '~/assets/images/apply-to-academy-testers.svg';
import TopThreeParticles from '~/assets/decorators/particles/apply-to-academy-three-top-particles.svg';
import TopFiveParticles from '~/assets/decorators/particles/apply-to-academy-five-top-particles.svg';
import DevelopersImage from '~/assets/images/apply-to-academy-developers.svg';
import { ACADEMY_TYPE } from '~/constants/academyType';

export const artwork = {
  [ACADEMY_TYPE.DEVELOPERS]: {
    image: DevelopersImage,
    particles: TopThreeParticles,
  },
  [ACADEMY_TYPE.FRONTEND]: {
    image: FrontendImage,
    particles: TopFiveParticles,
  },
  [ACADEMY_TYPE.TESTERS]: {
    image: TestersImage,
    particles: TopThreeParticles,
  },
};
