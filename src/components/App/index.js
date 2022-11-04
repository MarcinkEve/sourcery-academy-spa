import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './styles.module';
import Svg from '~/assets/svg/image.svg';
import HeaderDropdown from '~/components/Header/Dropdown/HeaderDropdown';

const cn = classNames.bind(styles);

export default function App({ prop }) {
  const charCount = prop.length;

  const sampleData = [
    {
      text: 'Text1',
      event: () => {},
    },
    {
      text: 'Text2',
      event: () => {},
    },
    {
      text: 'Text3',
      event: () => {},
    },
    {
      text: 'Text4',
      event: () => {},
    },
  ];

  return (
    <div className={cn('wrapper')}>
      <div className={cn('content')}>
        {/*<Svg className={cn('image')} />*/}
        {/*<pre className={cn('helloworld')} style={{ '--count': charCount }}>*/}
        {/*  {prop}*/}
        {/*</pre>*/}
        <HeaderDropdown data={sampleData} />
      </div>
    </div>
  );
}

App.propTypes = {
  prop: PropTypes.string,
};
