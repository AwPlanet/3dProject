import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const isValidName = (name) => {
        const nameRegex = /^[A-Za-z\s]+$/;
        return nameRegex.test(name);
    }

    const isValidPassword = (password) => {
        const passwordRegex = /^.{8,}$/; 
        return passwordRegex.test(password);
    }

    const collectData = async () => {
        if (!isValidName(name)) {
            alert("Name should only contain alphabetic characters.");
            return;
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if(!isValidPassword(password)){
            alert("Please make sure your password contains 8 min charachters")
            return;
        }

        console.log(name, email, password);

        let result = await fetch("http://localhost:5000/register", {
            method: 'post',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        result = await result.json();
        console.log(result);

        if (result.auth) {
            localStorage.setItem("user", JSON.stringify(result.user));
            navigate('/');
        } else {
            alert("Sign-up failed. Please check your input.");
        }
    }

    return (
        <div className="signup">
            <h1>Sign Up</h1>
            
            <input
                className="inputBox"
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            
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
            
            <button onClick={collectData} className="appButton" type="button">Sign Up</button>
        </div>
    );
}

export default SignUp;
