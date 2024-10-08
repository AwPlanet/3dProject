import React, { useEffect, useState } from "react";

const UserMessages = () => {
    const [messages, setMessages] = useState([]);
    const auth = JSON.parse(localStorage.getItem('user'));
    const userEmail = auth?.email;
    const isAdmin = auth?.admin === true;

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const url = isAdmin
                    ? `http://localhost:5000/messages?admin=true` 
                    : `http://localhost:5000/messages?email=${userEmail}`;  

                const response = await fetch(url);
                const data = await response.json();
                console.log("Fetched messages:", data); 
                setMessages(data);
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };

        fetchMessages();
    }, [userEmail, isAdmin]);

    // Function to handle status update
    const updateStatus = async (id, newStatus) => {
        try {
            const response = await fetch(`http://localhost:5000/messages/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: newStatus }),
            });

            if (response.ok) {
                setMessages((prevMessages) =>
                    prevMessages.map((msg) =>
                        msg._id === id ? { ...msg, status: newStatus } : msg
                    )
                );
            } else {
                console.error('Error updating status');
            }
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const deleterequest = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/messages/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.ok) {
                setMessages((prevMessages) =>
                    prevMessages.filter((msg) => msg._id !== id) 
                );
            } else {
                console.error('Error deleting message');
            }
        } catch (error) {
            console.error('Error deleting message:', error);
        }
    };


    return (
        <div className="messages-container">
            <h2>{isAdmin ? 'כל ההודעות' : 'הודעות ממתינות לאישור'}</h2>
            <ul>
                {messages.length === 0 ? (
                    <p>אין בקשות פעילות</p>
                ) : (
                    messages.map((msg) => (
                        <div key={msg._id}>
                            <p>{msg.message} - סטטוס: {msg.status}</p>
                            {isAdmin && (
                                <div>
                                    <button onClick={() => updateStatus(msg._id, 'פנינו באימייל')}>פנינו באימייל</button>
                                    <button onClick={() => updateStatus(msg._id, 'אין במלאי')}>אין במלאי</button>
                                    <button onClick={() => updateStatus(msg._id, 'הזמנה סופקה')}>סיום תהליך הזמנה</button>
                                    <button onClick={() =>deleterequest(msg._id)}>מחק בקשה</button>
                                    <p>{msg.email}</p>
                                </div>
                            )}
                        </div>
                    ))
                )}
            </ul>
        </div>
    );
};

export default UserMessages;
