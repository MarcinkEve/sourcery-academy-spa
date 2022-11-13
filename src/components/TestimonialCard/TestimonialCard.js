import React from 'react';
import PropTypes from 'prop-types';
import './TestimonialCard.scss';

export const TestimonialCard = ({ data, theme }) => {
  const {
    photo,
    message,
    name,
    academy,
    alt = 'Graduate profile photo',
  } = data;
  return (
    <div className="card" theme={theme}>
      {photo && <img className="card__photo" src={photo} alt={alt} />}
      <div className="card__quote">
        <p className="card__quote-mark">“</p>
        <p className="card__quote-message">{message}</p>
        <p className="card__quote-mark card__quote-mark--lower">“</p>
      </div>
      {name && <h3 className="card__name">{name}</h3>}
      {academy && <h4 className="card__academy">{academy}</h4>}
    </div>
  );
};

TestimonialCard.propTypes = {
  data: PropTypes.shape({
    photo: PropTypes.string,
    message: PropTypes.string.isRequired,
    name: PropTypes.string,
    academy: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
  theme: PropTypes.string,
};
