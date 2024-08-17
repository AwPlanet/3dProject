import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import '../App.css'; // Ensure your custom styles come after Bootstrap
import SocialIcons from './socialicon.js';

const Footer = () => {
    return (
        <footer className="bg-primary text-white text-center py-3">
            <div className="container">
                <SocialIcons />
                <h3 className="mt-2">3DCraftZone</h3>
            </div>
        </footer>
    );
};

export default Footer;
