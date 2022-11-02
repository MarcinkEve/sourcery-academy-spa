import React from 'react';
import './footer-style.scss';
import { FiFacebook, FiTwitter } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <ul className="footer-container-list">
            <li className="footer-container-list--item">
              <a
                href="https://www.facebook.com/devbridge/"
                target="_blank"
                rel="noreferrer"
                aria-label="facebook social link"
                className="footer-container-list--item-link"
              >
                <FiFacebook />
              </a>
            </li>
            <li className="footer-container-list--item">
              <a
                href="https://twitter.com/devbridge"
                target="_blank"
                rel="noreferrer"
                aria-label="twitter social link"
                className="footer-container-list--item-link"
              >
                <FiTwitter />
              </a>
            </li>
            <li className="footer-container-list--item">
              <a
                href="https://www.instagram.com/devbridge"
                target="_blank"
                rel="noreferrer"
                aria-label="instagram social link"
                className="footer-container-list--item-link"
              >
                <BsInstagram />
              </a>
            </li>
          </ul>
          <p className="footer-container-text">
            Copyright &copy; 2019 sourcery academy
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
