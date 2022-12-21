import React from 'react';

import './testimonial-error.scss';

export const TestimonialError = () => {
  return (
    <div className="error-card">
      <h2 className="error-card__title">Testimonials</h2>
      <div className="error-card__content">
        <p className="error-card__quote-message">
          Sorry, we could not find the testimonials. Check your connection and
          try to refresh the page.
        </p>
      </div>
    </div>
  );
};
