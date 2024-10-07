import React, { useEffect, useState } from "react";

const UserMessages = () => {
    const [messages, setMessages] = useState([]);
    const userEmail = localStorage.getItem('userEmail');

    useEffect(() => {
        fetch(`http://localhost:5000/messages?email=${userEmail}`)
            .then(response => response.json())
            .then(data => setMessages(data))
            .catch(error => console.error("Error fetching messages:", error));
    }, [userEmail]);

    return (
        <div className="messages-container">
            <h2>Your Messages</h2>
            <ul>
                {messages.map((msg) => (
                    <li key={msg._id}>
                        {msg.message} - Status: {msg.status}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserMessages;
