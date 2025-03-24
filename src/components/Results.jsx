import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { result, mode } = location.state;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="section">
      <p className="section-title">
        {mode === "encrypt" ? "Encrypted Text:" : "Decrypted Text:"}
      </p>

      <textarea className="plaintext-input" value={result} readOnly />
      <button className="copy-btn" onClick={handleCopy}>
        {copied ? "Copied!" : "Copy"}
      </button>

      <button className="back-btn" onClick={() => navigate("/")}>
        Encrypt (or Decrypt) More!
      </button>
    </div>
  );
}
