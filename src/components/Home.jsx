// App.js or your main component
import React, { useState } from 'react';
import Notification from './Notification';

function App() {
    const [notificationMessage, setNotificationMessage] = useState('');

    const handleCopy = () => {
        setNotificationMessage('Content copied!');
    };

    const handleNotificationClose = () => {
        setNotificationMessage('');
    };

    return (
        <div onCopy={handleCopy}>
            <Notification message={notificationMessage} onClose={handleNotificationClose} />
            <p>Copy this text to see the notification.</p>
            <button onClick={() => navigator.clipboard.writeText('Sample text')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Copy Text
            </button>
        </div>
    );
}

export default App;
