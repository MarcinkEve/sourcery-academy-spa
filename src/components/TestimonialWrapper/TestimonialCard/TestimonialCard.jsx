import React from 'react';
import { string, shape } from 'prop-types';
import './TestimonialCard.scss';

export const TestimonialCard = ({ data, alt = 'Graduate profile photo' }) => {
  const { photo, message, name, academy } = data;
  return (
      <div className="card">
        {photo && <img className="card__photo" src={photo} alt={alt} />}
        <div className="card__quote">
          <p className="card__quote-mark">“</p>
          <p className="card__quote-message">{message}</p>
          <p className="card__quote-mark card__quote-mark--lower">„</p>
        </div>
        {name && <p className="card__name">{name}</p>}
        {academy && <p className="card__academy">{academy}</p>}
      </div>
  );
};

TestimonialCard.propTypes = {
  data: shape({
    photo: string,
    message: string.isRequired,
    name: string,
    academy: string,
  }).isRequired,
  alt: string,
};

