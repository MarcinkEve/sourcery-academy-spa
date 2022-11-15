import React from 'react';
import PropTypes from 'prop-types';
import './TestimonialCard.scss';

export const TestimonialCard = ({ data, alt = 'Graduate profile photo' }) => {
  const { photo, message, name, academy } = data;
  return (
    <div className="card">
      {photo && <img className="card__photo" src={photo} alt={alt} />}
      <div className="card__quote">
        <p className="card__quote-mark">“</p>
        <p className="card__quote-message">{message}</p>
        <p className="card__quote-mark card__quote-mark--lower">“</p>
      </div>
      {name && <p className="card__name">{name}</p>}
      {academy && <p className="card__academy">{academy}</p>}
    </div>
  );
};

TestimonialCard.propTypes = {
  data: PropTypes.shape({
    photo: PropTypes.string,
    message: PropTypes.string.isRequired,
    name: PropTypes.string,
    academy: PropTypes.string,
  }).isRequired,
  alt: PropTypes.string,
};
