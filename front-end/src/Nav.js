import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css'; 
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('user');
        navigate('/signin');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">3DCraftZoneLOGO</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/add">Add Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/update">Update Product</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/profile">Profile</Link>
                    </li>
                    <li className="nav-item">
                        {auth ? 
                            <span className="nav-link" onClick={logout} style={{ cursor: 'pointer' }}>Logout</span> : 
                            <Link className="nav-link" to="/signup">Sign Up</Link>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
