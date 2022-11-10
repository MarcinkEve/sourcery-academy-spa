import React from 'react';
import styles from './header.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cn = classNames.bind(styles);

const HeaderDropdown = ({ data }) => {
  return (
    <div className={cn('dropdown')}>
      <div className={cn('dropdown__container')}>
        <div className={cn('dropdown__container-triangle')} />
      </div>
      <ul className={cn('dropdown__content')}>
        {data.map((element, index) => (
          <li key={index.toString()} className={cn('dropdown__content-link')}>
            <a onClick={element.event} tabIndex={0}>
              {element.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

HeaderDropdown.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      event: PropTypes.func.isRequired,
    })
  ),
};

export default HeaderDropdown;
