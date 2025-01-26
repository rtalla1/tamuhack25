import React, { useState, useEffect } from 'react';

// Message interface
interface Message {
  sender: 'user' | 'chatbot';
  text: string;
}

const ChatBox: React.FC = () => {
  // State to hold messages, user input, image index, and switching status
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>('');
  const [imageIndex, setImageIndex] = useState<number>(0);  // State for dynamic image switching
  const [isSwitching, setIsSwitching] = useState<boolean>(false);  // Flag to indicate image switching

  // Array of image paths
  const images = [
    '/robot0.PNG',  // Image 1
    '/robot2.png',  // Image 2
  ];

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

      // Start image switching for 2 seconds
      startImageSwitching();
    }
  };

  // Function to start switching images
  const startImageSwitching = () => {
    setIsSwitching(true); // Set the flag to start switching
    let counter = 0;
    const interval = setInterval(() => {
      setImageIndex(prevIndex => (prevIndex === 0 ? 1 : 0));  // Toggle between 0 and 1
      counter += 1;

      // Stop switching after 2 seconds (4 toggles with 500ms interval)
      if (counter >= 4) {
        clearInterval(interval);
        setIsSwitching(false); // Reset flag after switching stops
      }
    }, 500); // Switch image every 500ms
  };

  return (
    <div>
      {/* Dynamic image above the chatbox */}
      <div style={imageContainer}>
        <img src={images[imageIndex]} alt="Dynamic Image" style={imageStyle} />
      </div>

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
    </div>
  );
};

// Styles as React.CSSProperties
const chatboxContainer: React.CSSProperties = {
  textAlign: 'center',
  width: '80%',
  maxWidth: '600px',         // Optional: max width for responsiveness
  height: '60vh',            // Reduced height for the chatbox
  border: '1px solid #ccc',
  padding: '10px',
  backgroundColor: '#f9f9f9',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between', // Space out messages and input box
  boxSizing: 'border-box',
  margin: '0 auto',
};

const imageContainer: React.CSSProperties = {
  marginBottom: '15px',  // Adds space between the image and the messages box
  textAlign: 'center'
};

const imageStyle: React.CSSProperties = {
  width: '150px',
  height: '150px',
  objectFit: 'cover',
  borderRadius: '10px',
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
  width: '100%',
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

export default ChatBox;
