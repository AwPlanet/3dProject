import React, { useState } from "react";

const ChatBox = ({ product, onClose }) => {
    const [message, setMessage] = useState(`אני מעוניין לרכוש ${product.header} בסיטונאות, מבחינת יחידות אני מעוניין ב:`);
    const auth = JSON.parse(localStorage.getItem('user'));
    const userEmail = auth?.email;
    console.log(userEmail)
        const sendMessage = async () => {
        const newMessage = {
            email: userEmail,
            message: message,
            status: "waiting"
        };

        try {
            const response = await fetch('http://localhost:5000/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newMessage),
            });

            if (response.ok) {
                console.log('Message sent successfully!');
                onClose();
            } else {
                console.error('Error sending message');
            }
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className="chat-box">
            <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="5"
            />
            <button onClick={sendMessage}>Send</button>
            <button onClick={onClose}>Close</button>
        </div>
    );
}

export default ChatBox;
