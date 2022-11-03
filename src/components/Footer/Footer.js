import React from 'react';
import Facebook from '../icons/Facebook';
import Instagram from '../icons/Instagram';
import Twitter from '../icons/Twitter';

import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__list">
          <li className="footer__list-item">
            <Facebook />
          </li>
          <li className="footer__list-item">
            <Twitter />
          </li>
          <li className="footer__list-item">
            <Instagram />
          </li>
        </ul>
        <p className="footer__text">Copyright &copy; 2019 sourcery academy</p>
      </div>
    </footer>
  );
};
