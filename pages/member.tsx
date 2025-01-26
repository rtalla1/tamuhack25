import { useState } from "react";

export default function FormUpload() {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("Uploading...");

    // Upload only to S3
    try {
      const uploadResponse = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const uploadData = await uploadResponse.json();

      if (uploadResponse.ok) {
        setMessage("Upload completed successfully!");
      } else {
        setMessage("Upload failed.");
      }
    } catch (error) {
      console.error("Upload Error:", error);
      setMessage("An error occurred while uploading.");
    }

    setIsLoading(false);
  };

  return (
    <div style={containerStyle}>
      <h1 style={title}>For Family Members</h1>
            <h2 style={desc1}>Provide any information that may help your loved one recall important memories.</h2>
            <h3 style={desc2}>Please include as much context and detail as possible, including names and important timelines.</h3>
      <form onSubmit={handleSubmit} style={formStyle}>
        <textarea
          style={textareaStyle}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter your text here..."
        />
        <button type="submit" style={buttonStyle} disabled={isLoading}>
          {isLoading ? "Uploading..." : "Upload"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

const title: React.CSSProperties = {
  textAlign: 'center',
  color: "#8A77D9",
  marginTop: '0%',
  marginBottom: '8%'
}

const desc1: React.CSSProperties = {
  justifyContent: "center",
  textAlign: "center",
  marginTop: "3.5%",
  marginBottom: "5%"
}

const desc2: React.CSSProperties = {
  textAlign: "center",
  marginTop: "1%",
  marginBottom: "0%",
  color: "#8771BC" 
}

const containerStyle: React.CSSProperties = { textAlign: "center", maxWidth: "500px", margin: "0 auto", padding: "20px" };
const formStyle: React.CSSProperties = { textAlign: "center", display: "flex", flexDirection: "column", gap: "10px" };
const buttonStyle: React.CSSProperties = { padding: "10px", fontSize: "18px", cursor: "pointer", backgroundColor: "#6A5ACD", color: "white", border: "none", borderRadius: "5px" };
const textareaStyle: React.CSSProperties = {
  width: "80%", // Adjust width as necessary (use percentage to ensure it stays responsive)
  height: "100px",
  padding: "10px",
  margin: "10% auto", // 'auto' on left and right will center it
  fontSize: "16px",
  display: "block", // Ensures block display for margin auto to work
};

