import React, { useState, useEffect } from "react";

interface Message {
  sender: "user" | "chatbot";
  text: string;
}

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [chatbotReady, setChatbotReady] = useState<boolean>(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [s3Loaded, setS3Loaded] = useState<boolean>(false);

  const images = ["/robot0.PNG", "/robot2.png"];
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [isSwitching, setIsSwitching] = useState<boolean>(false);

  // ✅ Initial chatbot message (Triggers API call)
  useEffect(() => {
    setMessages([
      { sender: "chatbot", text: "Hello! I'm HeartLink. I'm gathering information from your memory bank. Please wait..." },
    ]);

    if (!s3Loaded) {
      fetchS3Files();
    }
  }, [s3Loaded]);

  // ✅ Step 1: Fetch all files from S3 and pass them to the chatbot
  const fetchS3Files = async () => {
    setLoading(true);

    try {
      console.log("🔍 Fetching S3 files...");
      const response = await fetch("/api/getS3Files", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: "Load all files for context." }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("✅ S3 Files Loaded:", data.response);

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "chatbot", text: "I've loaded all your important memories! What's your name?" },
      ]);

      setChatbotReady(true);
      setS3Loaded(true);
    } catch (error) {
      console.error("❌ Error fetching S3 files:", error);

      setMessages((prevMessages) => [
        { sender: "chatbot", text: "I couldn't retrieve the memory bank. Let's continue the conversation anyway!" },
      ]);

      setS3Loaded(true);
    }

    setLoading(false);
  };

  // ✅ Step 2: Handle user responses and guide conversation
  const sendMessage = async () => {
    if (userInput.trim() !== "") {
      const userMessage: Message = { sender: "user", text: userInput };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      if (!userName) {
        setUserName(userInput);
        setUserInput("");
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "chatbot", text: `Nice to meet you, ${userInput}! Let’s talk about some memories.` },
        ]);

        // Ask leading questions after name is set
        askLeadingQuestion(userInput);
        return;
      }

      setUserInput("");
      setLoading(true);

      try {
        const response = await fetch("/api/getS3Files", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt: userInput }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("✅ Chatbot Response:", data);

        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "chatbot", text: data.response },
        ]);

        // Continue guiding the conversation
        askLeadingQuestion(userName);
      } catch (error) {
        console.error("❌ Error communicating with Bedrock:", error);

        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "chatbot", text: "An error occurred. Please try again." },
        ]);
      }

      setLoading(false);
      startImageSwitching();
    }
  };

  // ✅ Step 3: Ask Leading Questions Based on Retrieved Files
  const askLeadingQuestion = (name: string) => {
    const questions = [
      `Tell me about a special moment with your family, ${name}.`,
      `Who are the most important people in your life?`,
      `Do you remember any fun events or celebrations?`,
      `What is a memory that makes you smile?`,
      `Tell me about a place that holds a special meaning for you.`,
    ];
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "chatbot", text: randomQuestion },
    ]);
  };

  const startImageSwitching = () => {
    setIsSwitching(true);
    let counter = 0;
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
      counter += 1;

      if (counter >= 6) {
        clearInterval(interval);
        setIsSwitching(false);
      }
    }, 500);
  };

  return (
    <div>
      <div style={imageContainer}>
        <img src={images[imageIndex]} alt="Dynamic Image" style={imageStyle} />
      </div>

      <div style={chatboxContainer}>
        <div style={messagesBox}>
          {messages.map((message, index) => (
            <div key={index} style={message.sender === "user" ? userMessage : chatbotMessage}>
              {message.text}
            </div>
          ))}
          {loading && <div style={chatbotMessage}>Typing...</div>}
        </div>

        <div style={inputBox}>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Type your response..."
            style={inputField}
            disabled={loading || !chatbotReady}
          />
          <button onClick={sendMessage} style={sendButton} disabled={loading || !chatbotReady}>
            {loading ? "..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

/* ✅ Preserved Original Styling */
const chatboxContainer: React.CSSProperties = {
  textAlign: "center",
  width: "80%",
  maxWidth: "600px",
  height: "50vh",
  border: "1px solid #ccc",
  padding: "10px",
  backgroundColor: "#f9f9f9",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  boxSizing: "border-box",
  margin: "0 auto",
};

const imageContainer: React.CSSProperties = { marginBottom: "15px", textAlign: "center" };
const imageStyle: React.CSSProperties = { width: "20%", height: "auto", objectFit: "cover", borderRadius: "10px" };
const messagesBox: React.CSSProperties = { flexGrow: 1, overflowY: "auto", marginBottom: "10px", padding: "10px", display: "flex", flexDirection: "column", gap: "10px" };
const userMessage: React.CSSProperties = { maxWidth: "70%", padding: "10px", borderRadius: "10px", backgroundColor: "#8A77D9", color: "white", alignSelf: "flex-end", textAlign: "right" };
const chatbotMessage: React.CSSProperties = { maxWidth: "70%", padding: "10px", borderRadius: "10px", backgroundColor: "#e5e5e5", color: "black", alignSelf: "flex-start", textAlign: "left" };
const inputBox: React.CSSProperties = { display: "flex", gap: "10px", width: "100%" };
const inputField: React.CSSProperties = { flexGrow: 1, padding: "8px", border: "1px solid #ccc", borderRadius: "5px" };
const sendButton: React.CSSProperties = { padding: "8px 16px", backgroundColor: "#8A77D9", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" };

export default ChatBox;