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
      <h2>Upload Text to S3</h2>
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

/* Styling */
const containerStyle: React.CSSProperties = { textAlign: "center", maxWidth: "500px", margin: "0 auto", padding: "20px" };
const formStyle: React.CSSProperties = { display: "flex", flexDirection: "column", gap: "10px" };
const textareaStyle: React.CSSProperties = { width: "100%", height: "100px", padding: "10px", fontSize: "16px" };
const buttonStyle: React.CSSProperties = { padding: "10px", fontSize: "18px", cursor: "pointer", backgroundColor: "#6A5ACD", color: "white", border: "none", borderRadius: "5px" };

