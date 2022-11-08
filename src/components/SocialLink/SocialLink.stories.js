import React from 'react';
// import Facebook from '~/assets/svg/Icon_awesome-facebook-f.svg';

import { SocialLink } from './SocialLink';

export default {
  title: 'SocialLink component',
  component: SocialLink,
  argTypes: {
    backgroundColor: { control: 'color' },
    fill: { control: 'color' },
  },
};

const Template = (args) => (
  <div>
    <SocialLink {...args} />
  </div>
);

export const logo = () => (
  <img
    src="../../assets/svg/Icon_awesome-facebook-f.svg"
    alt="logo"
    className="social-link__icon"
  />
);

export const Arguments = Template.bind({});
Arguments.args = {
  height: '40px',
  color: '#3d3691',
  fill: '#3d3691',
  backgroundColor: '#ecebfb',
  outline: '#3d3691',
};

export const Facebook = Template.bind({});
Facebook.args = {
  ...Arguments.args,
  socialLink: {
    title: 'Facebook',
    link: 'https://www.facebook.com/devbridge',
    icon: logo,
    // icon: '<Facebook className="social-link__icon" />',
    // icon: '~/assets/svg/Icon_awesome-facebook-f.svg',
  },
  // icon: 'https://www.svgrepo.com/show/325175/facebook.svg',
};

export const Twitter = Template.bind({});
Twitter.args = {
  ...Arguments.args,
  socialLink: {
    title: 'Twitter',
    link: 'https://www.twitter.com/devbridge',
    icon: '../../assets/svg/Icon_feather-twitter.svg',
  },
};

export const Instagram = Template.bind({});
Instagram.args = {
  ...Arguments.args,
  socialLink: {
    title: 'Instagram',
    link: 'https://www.instagram.com/devbridge',
    icon: '../../assets/svg/instagram.svg',
  },
};
