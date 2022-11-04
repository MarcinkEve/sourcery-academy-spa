import React from 'react';
import { FiTwitter, FiFacebook } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';

import Icon from '../Icon';
import './footer.scss';

export const Footer = () => {
  const icons = [
    {
      id: 1,
      title: 'facebook',
      link: 'https://www.facebook.com/devbridge/',
      icon: <FiFacebook />,
    },
    {
      id: 2,
      title: 'twitter',
      link: 'https://twitter.com/devbridge',
      icon: <FiTwitter />,
    },
    {
      id: 3,
      title: 'instagram',
      link: 'https://www.instagram.com/devbridge',
      icon: <BsInstagram />,
    },
  ];
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__list">
          {icons.map((element, index) => (
            <li className="footer__list-item" key={index}>
              <Icon element={element} />
            </li>
          ))}
        </ul>
        <p className="footer__text">Copyright &copy; 2019 sourcery academy</p>
      </div>
    </footer>
  );
};
