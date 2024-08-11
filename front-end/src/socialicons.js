// src/components/SocialIcons.js
import React from 'react';
import { FaInstagram, FaFacebookF, FaTiktok, FaX } from 'react-icons/fa'; // Import the icons from react-icons
import './SocialIcons.css'; // Import the CSS for styling

function SocialIcons() {
    return (
        <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="social-icon" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="social-icon" />
            </a>
            <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="social-icon" />
            </a>
            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
                <FaX className="social-icon" />
            </a>
        </div>
    );
}

export default SocialIcons;
