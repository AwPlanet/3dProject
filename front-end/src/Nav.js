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
    const parsedname = JSON.parse(auth);



    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

        <img src="/LOGO.png" alt="Logo" style={{height:'3rem', mixBlendMode:'color-dodge'}}/>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">

                        <Link className="nav-link" to="/">Product</Link>
                    </li>
                    {auth ? 
                    <li className="nav-item">
                        <Link className="nav-link" to="/userdata">{parsedname.name} User</Link>
                    </li> : ''}
                    <li className="nav-item" id='logout'>
                        {auth ? 
                            <span className="nav-link" onClick={logout} style={{ cursor: 'pointer' }}>Sign Out</span> : 
                            <Link className="nav-link" to="/signup">Sign Up</Link>

                        }
                    </li>
                </ul>
            </div>
        </nav>
        </header>
    );
};

export default Nav;