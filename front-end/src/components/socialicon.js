import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import '../App.css'

const SocialIcons = () => (
  <div className='social-icons'>
    <a  href="https://x.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter size={20} />
    </a>
    <a  href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebook size={20} />
    </a>
    <a  href="https://instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram size={20} />
    </a>
  </div>
);

export default SocialIcons;
