import { useState } from "react";

export default function FormUpload() {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await fetch("/api/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();
    setMessage(data.message);
    setIsLoading(false);
  };

  return (
    <div style={containerStyle}>
      <h2>Enter Information Here</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <textarea
          style={textareaStyle}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here..."
        />
        <button type="submit" style={buttonStyle} disabled={isLoading}>
          {isLoading ? "Uploading..." : "Done"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

/* Styling */
const containerStyle: React.CSSProperties = {
  textAlign: "center",
  maxWidth: "500px",
  margin: "0 auto",
  padding: "20px",
};

const formStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const textareaStyle: React.CSSProperties = {
  width: "100%",
  height: "100px",
  padding: "10px",
  fontSize: "16px",
};

const buttonStyle: React.CSSProperties = {
  padding: "10px",
  fontSize: "18px",
  cursor: "pointer",
  backgroundColor: "#6A5ACD",
  color: "white",
  border: "none",
  borderRadius: "5px",
};