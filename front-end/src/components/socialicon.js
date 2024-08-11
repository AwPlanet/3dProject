import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const SocialIcons = () => (
  <div>
    <a className="social-icons" href="https://x.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter size={20} />
    </a>
    <a className="social-icons" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebook size={20} />
    </a>
    <a className="social-icons" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={20} />
    </a>
  </div>
);

export default SocialIcons;
