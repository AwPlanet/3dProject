import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import '../App.css'; // Ensure your custom styles come after Bootstrap
import SocialIcons from './socialicon.js';

const Footer = () => {
    return (
        <footer className="bg-primary text-white text-center py-3">
            <div className="container">
                <SocialIcons />
                <div style={{display:'flex', placeContent:'center'}}>
                <img src="/LOGO.png" alt="Logo" style={{width:'2rem', mixBlendMode:'color-dodge', marginRight:'2rem'}}/> <h3>logo</h3>
                </div>
                </div>
        </footer>
    );
};

export default Footer;
