import React from 'react';

import FacebookIcon from '~/assets/icons/icon-facebook.svg';
import TwitterIcon from '~/assets/icons/icon-twitter.svg';
import InstagramIcon from '~/assets/icons/icon-instagram.svg';

import { SocialLink } from './SocialLink';

export default {
  title: 'SocialLink component',
  component: SocialLink,
};

const Template = (args) => <SocialLink {...args} />;

export const Facebook = Template.bind({});
Facebook.args = {
  title: 'Facebook',
  link: 'https://www.facebook.com/devbridge',
  icon: <FacebookIcon className="social-link__icon" />,
};

export const Twitter = Template.bind({});
Twitter.args = {
  title: 'Twitter',
  link: 'https://www.twitter.com/devbridge',
  icon: <TwitterIcon className="social-link__icon" />,
};

export const Instagram = Template.bind({});
Instagram.args = {
  title: 'Instagram',
  link: 'https://www.instagram.com/devbridge',
  icon: <InstagramIcon className="social-link__icon" />,
};
