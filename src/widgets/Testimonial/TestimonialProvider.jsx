import React, { createContext, useContext, useEffect, useState } from 'react';
import { func, node } from 'prop-types';
import { useLocation } from 'react-router-dom';

import { ROUTES, LINKS } from '~/constants';
import { useLoadingContext } from '~/context/LoadingContext';

export const getTestimonials = () => {
  const { pathname } = useLocation();
  const testimonialContext = useContext(TestimonialContext);
  const { handleLoadingStateTestimonial } = useLoadingContext();

  useEffect(() => {
    handleLoadingStateTestimonial(testimonialContext.loadingStateTestimonial);
  }, [testimonialContext.loadingStateTestimonial]);

  const filterTestimonialsForAcademy = (academy) =>
    testimonialContext.data.filter((testimonial) =>
      testimonial.academy.includes(academy)
    );

  const getTestimonialsForPage = (page) => {
    switch (page) {
      case ROUTES.DEVELOPERS:
        return filterTestimonialsForAcademy('Developers');
      case ROUTES.TESTERS:
        return filterTestimonialsForAcademy('Testers');
      case ROUTES.FRONTEND:
        return filterTestimonialsForAcademy('Front-End');
      default:
        return testimonialContext.data;
    }
  };

  return { ...testimonialContext, data: getTestimonialsForPage(pathname) };
};

const initialState = { data: [], error: false, loadingStateTestimonial: true };

export const TestimonialContext = createContext(initialState);

export const TestimonialProvider = ({ children }) => {
  const [testimonials, setTestimonials] = useState(initialState);

  useEffect(() => {
    fetch(LINKS.TESTIMONIALS)
      .then((response) => response.json())
      .then((response) =>
        setTestimonials({
          data: response,
          error: false,
          loadingStateTestimonial: false,
        })
      )
      .catch(() =>
        setTestimonials({
          data: [],
          error: true,
          loadingStateTestimonial: false,
        })
      );
  }, []);

  return (
    <TestimonialContext.Provider value={testimonials}>
      {children}
    </TestimonialContext.Provider>
  );
};

TestimonialContext.propTypes = {
  getTestimonialsForPage: func,
};

TestimonialProvider.propTypes = {
  children: node,
};
