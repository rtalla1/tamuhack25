import React, { useState } from 'react';

// Message interface
interface Message {
  sender: 'user' | 'chatbot';
  text: string;
}

const ChatBox: React.FC = () => {
  // State to hold messages
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>('');

  // Function to send message and get a response
  const sendMessage = () => {
    if (userInput.trim() !== '') {
      // Add user message
      setMessages(prevMessages => [
        ...prevMessages,
        { sender: 'user', text: userInput },
      ]);

      // Clear input field
      setUserInput('');

      // Simulate chatbot response after 1 second
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          { sender: 'chatbot', text: `You said: ${userInput}` },
        ]);
      }, 1000);
    }
  };

  return (
    <div style={chatboxContainer}>
      {/* Messages box (scrollable container) */}
      <div style={messagesBox}>
        {messages.map((message, index) => (
          <div
            key={index}
            style={message.sender === 'user' ? userMessage : chatbotMessage}
          >
            {message.text}
          </div>
        ))}
      </div>

      {/* Input box */}
      <div style={inputBox}>
        <input
          type="text"
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          placeholder="Type a message..."
          style={inputField}
        />
        <button
          onClick={sendMessage}
          style={sendButton}
        >
          Send
        </button>
      </div>
    </div>
  );
};

// Styles as React.CSSProperties
const chatboxContainer: React.CSSProperties = {
    textAlign: 'center',
    alignContent: 'center',
    width: '80%',
    maxWidth: '100%',
    height: '500px',
    border: '1px solid #ccc',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column'
  };

  const messagesBox: React.CSSProperties = {
    flexGrow: 1,
    overflowY: 'auto',
    marginBottom: '10px',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  const userMessage: React.CSSProperties = {
    maxWidth: '70%',
    padding: '10px',
    borderRadius: '10px',
    backgroundColor: '#8A77D9',
    color: 'white',
    alignSelf: 'flex-end',
    textAlign: 'right',
  };

  const chatbotMessage: React.CSSProperties = {
    maxWidth: '70%',
    padding: '10px',
    borderRadius: '10px',
    backgroundColor: '#e5e5e5',
    color: 'black',
    alignSelf: 'flex-start',
    textAlign: 'left',
  };

  const inputBox: React.CSSProperties = {
    display: 'flex',
    gap: '10px',
    width: '80%'
  };

  const inputField: React.CSSProperties = {
    flexGrow: 1,
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const sendButton: React.CSSProperties = {
    padding: '8px 16px',
    backgroundColor: '#8A77D9',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const sendButtonHover: React.CSSProperties = {
    backgroundColor: '#7a68c6',
  };

export default ChatBox;
