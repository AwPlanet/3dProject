import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import '../App.css'; // Ensure your custom styles come after Bootstrap
import SocialIcons from './socialicon.js';

const Footer = () => {
    return (
        <footer className="bg-primary text-white text-center py-3">
            <div className="container">
                <SocialIcons />
<<<<<<< HEAD
                <div style={{display:'flex', placeContent:'center'}}>
                <img src="/LOGO.png" alt="Logo" style={{width:'2rem', mixBlendMode:'color-dodge', marginRight:'2rem'}}/> <h3>logo</h3>
                </div>
                </div>
=======
                <h3 className="mt-2">(: הכל בסיטונאות :)</h3>
            </div>
>>>>>>> 163e031df1c58c25283dc9eba7d4238265948038
        </footer>
    );
};

export default Footer;
