import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { result, mode } = location.state || { result: "", mode: "encrypt" };
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="results-page">
      <h1>Results</h1>
      <p>{mode === "encrypt" ? "Encrypted Text:" : "Decrypted Text:"}</p>

      <div className="result-container">
        <textarea className="result-text" value={result} readOnly />
        <button className="copy-btn" onClick={handleCopy}>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>

      <button className="back-btn" onClick={() => navigate("/")}>
        Encrypt (or Decrypt) More!
      </button>
    </div>
  );
}
