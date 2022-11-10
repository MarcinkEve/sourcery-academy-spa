import React from 'react';

import SocialLink from '../SocialLink';
import Facebook from '../../assets/icons/Icon_awesome-facebook-f.svg';
import Twitter from '../../assets/icons/Icon_feather-twitter.svg';
import Instagram from '../../assets/icons/Icon_feather-instagram.svg';
import './footer.scss';

export const Footer = () => {
  const socialLinks = [
    {
      title: 'Facebook',
      link: 'https://www.facebook.com/devbridge',
      icon: <Facebook className="social-link__icon" />,
    },
    {
      title: 'Twitter',
      link: 'https://twitter.com/devbridge',
      icon: <Twitter className="social-link__icon" />,
    },
    {
      title: 'Instagram',
      link: 'https://www.instagram.com/devbridge',
      icon: <Instagram className="social-link__icon" />,
    },
  ];
  return (
    <footer className="footer">
      <ul className="footer__list">
        {socialLinks.map((socialLink, index) => (
          <li className="footer__list-item" key={index}>
            <SocialLink
              link={socialLink.link}
              title={socialLink.title}
              icon={socialLink.icon}
            />
          </li>
        ))}
      </ul>
      <p className="footer__text">Copyright &copy; 2022 sourcery academy</p>
    </footer>
  );
};
