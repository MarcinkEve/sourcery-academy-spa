import React from 'react';
import styles from './header.module';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

export default function HeaderDropdown({ data }) {
  return (
    <div className={cn('dropdown')}>
      <div className={cn('dropdown__triangle')} />
      <ul className={cn('dropdown__content')}>
        {data.map((element, index) => (
          <li
            key={index.toString()}
            className={cn('dropdown__content-link')}
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
