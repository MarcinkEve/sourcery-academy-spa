import React from 'react';
import styles from './header.module';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

//need accessibility features from parent
//  drops down on enter
//  separate element - arrow down
//  delay 0.8s on mouse leave
export default function HeaderDropdown({ data }) {
  return (
    <div className={cn('container')}>
      <div className={cn('triangle')} />
      <ul className={cn('links')}>
        {data.map((element, index) => (
          <li
            key={index.toString()}
            className={cn('link')}
            tabIndex="0"
            onClick={element.event}
          >
            {element.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

HeaderDropdown.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      event: PropTypes.func.isRequired,
    })
  ),
};
