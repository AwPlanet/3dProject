import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'; 

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="menu-icon" onClick={toggleMenu}>
                    <div className="menu-dot"></div>    
                    <div className="menu-dot"></div>
                    <div className="menu-dot"></div>
                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={() => setIsOpen(false)}>Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/add" className="nav-links" onClick={() => setIsOpen(false)}>Add Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/update" className="nav-links" onClick={() => setIsOpen(false)}>Update Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/logout" className="nav-links" onClick={() => setIsOpen(false)}>Logout</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/profile" className="nav-links" onClick={() => setIsOpen(false)}>Profile</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/signup" className="nav-links" onClick={() => setIsOpen(false)}>Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
