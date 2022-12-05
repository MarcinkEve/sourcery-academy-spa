import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { arrayOf, func, shape, string } from 'prop-types';

import './headerDropdown.scss';

export const HeaderDropdown = ({ data, onClickOutside }) => {
  const pinRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    if (!pinRef.current || !contentRef.current) {
      return;
    }

    const clickListener = ({ target }) => {
      if (
        onClickOutside &&
        !pinRef.current.contains(target) &&
        !contentRef.current.contains(target)
      ) {
        onClickOutside();
      }
    };
    document.addEventListener('mousedown', clickListener);

    return () => document.removeEventListener('mousedown', clickListener);
  }, [pinRef, contentRef]);
  return (
    <div className="dropdown">
      <div className="dropdown__pin">
        <div className="dropdown__pin-triangle" ref={pinRef} />
      </div>
      <ul className="dropdown__content" ref={contentRef}>
        {data.map((element, index) => (
          <li key={index} className="dropdown__content-item">
            <Link className="dropdown__content-link" to={element.route}>
              {element.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

HeaderDropdown.propTypes = {
  data: arrayOf(
    shape({
      text: string.isRequired,
      route: string.isRequired,
    })
  ),
  onClickOutside: func,
};
