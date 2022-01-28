import React from 'react';
import Facebook from '../assets/facebook-alt.svg';
import Instagram from '../assets/instagram-alt.svg';
import Twitter from '../assets/twitter-alt.svg';
import GitHub from '../assets/github-alt.svg';
import config from '../lib/config';

export function SocialList({ style }) {
  const theme = style === 'dark' ? '#000' : '#fff';
  return (
    <span className="socials">
      <a
        title="Facebook"
        href={`https://facebook.com/${config.facebook_account}`}
        target="_blank"
        rel="noopener"
      >
        <Facebook width={24} height={24} fill={theme} />
      </a>
      <a
        title="Instagram"
        href={`https://instagram.com/${config.instagram_account}`}
        target="_blank"
        rel="noopener"
      >
        <Instagram width={24} height={24} fill={theme} />
      </a>
      <a
        title="Twitter"
        href={`https://twitter.com/${config.twitter_account}`}
        target="_blank"
        rel="noopener"
      >
        <Twitter width={24} height={24} fill={theme} />
      </a>
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <GitHub width={24} height={24} fill={theme} />
      </a>
    </span>
  );
}
