import React from 'react';

import TopParticles from '~/assets/decorators/particles/particles-testimonial-top.svg';
import BottomParticles from '~/assets/decorators/particles/particles-testimonial-academies-bottom.svg';
import { TestimonialWrapper } from '~/widgets/Testimonial/TestimonialWrapper';
import { getTestimonials } from '~/widgets/Testimonial/TestimonialProvider';
import Error from '~/components/UI/Error';

import './testimonial-section.scss';

export const TestimonialSection = () => {
  const { data, error } = getTestimonials();

  return (
    <section className="testimonial-academies-section">
      <TopParticles className="testimonial-academies-section__top-particles" />
      {error ? (
        <Error title="Testimonials" />
      ) : (
        <TestimonialWrapper data={data} title="Testimonials" />
      )}
      <BottomParticles className="testimonial-academies-section__bottom-particles" />
    </section>
  );
};
