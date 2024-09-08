import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // Check if the user is already authenticated
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, []);

    const collectData = async () => {
        console.warn(email, password);

        // Send request to the backend to log in
        let result = await fetch("http://localhost:5000/login", {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        result = await result.json();
        console.warn(result);

        if (result.auth) {
            // Save user data to localStorage if login is successful
            localStorage.setItem("user", JSON.stringify(result.user));
            navigate('/');
        } else {
            alert("Login failed. Check your email and password.");
        }
    }

    return (
        <div className="login">
            <h1>Sign In</h1>
            
            <input
                className="inputBox"
                type="text"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            
            <input
                className="inputBox"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            
            <button onClick={collectData} className="appButton" type="button">Sign In</button>
        </div>
    );
}

export default SignIn;
