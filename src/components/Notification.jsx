// Notification.js
import React, { useEffect } from 'react';

const Notification = ({ message, onClose }) => {
    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                onClose();
            }, 2000); // Notification visible for 2 seconds
            return () => clearTimeout(timer);
        }
    }, [message, onClose]);

    return (
        <div className={`fixed top-4 right-4 bg-violet-950 text-white px-4 py-2 rounded shadow-lg transition-opacity duration-300 ${message ? 'opacity-100' : 'opacity-0'}`}>
            {message}
        </div>
    );
};

export default Notification;

