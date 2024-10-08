import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/');
        }
    }, [navigate]);

    const collectData = async () => {
        console.warn(email, password);

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
            localStorage.setItem("user", JSON.stringify(result.user));
            navigate('/');
        } else {
            alert("Login failed. Check your email and password.");
        }
    }

    return (
        <div className="login">
            <h1>התחבר</h1>
            
            <input
                className="inputBox"
                type="text"
                placeholder="הכנס אימייל"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            
            <input
                className="inputBox"
                type="password"
                placeholder="הכנס סיסמה"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            
            <button onClick={collectData} className="appButton" type="button">התחבר</button>
        </div>
    );
}

export default SignIn;
