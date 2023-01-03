import React from 'react';

import FacebookIcon from '~/assets/icons/icon-facebook.svg';
import TwitterIcon from '~/assets/icons/icon-twitter.svg';
import InstagramIcon from '~/assets/icons/icon-instagram.svg';

import { SocialLink } from './SocialLink';

export default {
  title: 'UI/SocialLinkComponent',
  component: SocialLink,
  args: {
    icons: 'Facebook',
  },
  argTypes: {
    icons: {
      options: ['Facebook', 'Twitter', 'Instagram'],
      control: 'radio',
      mapping: {
        Facebook: {
          icon: <FacebookIcon className="social-link__icon" />,
          title: 'Facebook',
          link: 'https://www.facebook.com/devbridge',
        },
        Twitter: {
          icon: <TwitterIcon className="social-link__icon" />,
          title: 'Twitter',
          link: 'https://www.twitter.com/devbridge',
        },
        Instagram: {
          icon: <InstagramIcon className="social-link__icon" />,
          title: 'Instagram',
          link: 'https://www.instagram.com/devbridge',
        },
      },
    },
    theme: {
      table: {
        disable: true,
      },
    },
    title: {
      table: {
        disable: true,
      },
    },
    link: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
  },
};

export const SocialLinkComponent = (args) => {
  const { icon, title, link } = args.icons;
  return <SocialLink icon={icon} title={title} link={link} />;
};
