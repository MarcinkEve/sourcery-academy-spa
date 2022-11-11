import React from 'react';
import PropTypes from 'prop-types';
import './TestimonialCard.scss';

export const TestimonialCard = ({ data }) => {
  const { photo, message, name, academy } = data;

  return (
    <div className="card">
      <img src={photo} alt="Graduate profile photo" />
      <p className="card__quote">“</p>
      <p className="card__testimonial">{message}</p>
      <p className="card__quote card__quote-lower">“</p>
      <h3 className="card__name">{name}</h3>
      <h4 className="card__academy">{academy}</h4>
    </div>
  );
};

TestimonialCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      photo: PropTypes.string,
      message: PropTypes.string,
      name: PropTypes.string,
      academy: PropTypes.string,
    })
  ),
};
