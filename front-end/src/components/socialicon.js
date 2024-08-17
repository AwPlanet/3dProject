import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import '../App.css'

const SocialIcons = () => {
    return (
        <div className="social-icons mb-2">
            <a href="https://facebook.com" className="text-white mx-2" aria-label="Facebook">
                <FaFacebook />
            </a>
            <a href="https://twitter.com" className="text-white mx-2" aria-label="Twitter">
                <FaTwitter />
            </a>
            <a href="https://instagram.com" className="text-white mx-2" aria-label="Instagram">
                <FaInstagram />
            </a>
        </div>
    );
};

export default SocialIcons;
