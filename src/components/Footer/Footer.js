import React from 'react';
import { FiTwitter, FiFacebook } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';

import SocialLink from '../SocialLink';
import './footer.scss';

export const Footer = () => {
  const icons = [
    {
      id: 1,
      title: 'facebook',
      link: 'https://www.facebook.com/devbridge/',
      icon: <FiFacebook className="social-link__icon" />,
    },
    {
      id: 2,
      title: 'twitter',
      link: 'https://twitter.com/devbridge',
      icon: <FiTwitter className="social-link__icon" />,
    },
    {
      id: 3,
      title: 'instagram',
      link: 'https://www.instagram.com/devbridge',
      icon: <BsInstagram className="social-link__icon" />,
    },
  ];
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__list">
          {icons.map((element, index) => (
            <li className="footer__list-item" key={index}>
              <SocialLink element={element} />
            </li>
          ))}
        </ul>
        <p className="footer__text">Copyright &copy; 2022 sourcery academy</p>
      </div>
    </footer>
  );
};
