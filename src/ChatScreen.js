import React, { useState } from 'react';
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";



function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: "MARK",
            image: "https://selloutyoursoul.com/wp-content/uploads/2015/09/sarah.jpg",
            message: "whats up?"
        },
        {
            name: "MARK",
            image: "https://selloutyoursoul.com/wp-content/uploads/2015/09/sarah.jpg",
            message: "hows it going?"
        },
        {
            message: "hey?"
        }
    ]);

    const handleSend = e => {
        e.preventDefault();

        setMessages([...messages, {message: input}]);
        setInput('');
    }

    return (
        <div className="chatScreen">
            <p className="chatScreen-timestamp">YOU MATCHED WITH MARK ON 10/08/20</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen-message">
                        <Avatar 
                        className="chatScreen-image" 
                        alt={message.name} 
                        src={message.image} 
                        />
                        <p className="chatScreen-text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen-message">
                        <p className="chatScreen-textUser">{message.message}</p>
                    </div>
                )
            ))}
            <div>
                <form className="chatScreen-input">
                    <input 
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="chatScreen-inputField"
                        type="text"
                        placeholder="Type a message..."
                    />
                    <button onClick={handleSend} type="submit" className="chatScreen-inputButton">SEND</button>
                </form>
            </div>
        </div>
    )
}

export default ChatScreen;
