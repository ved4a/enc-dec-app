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
        {mode === "encrypt" ? "< Encrypted Text />" : "< Decrypted Text />"}
      </p>

      <textarea className="plaintext-input" value={result} readOnly />

      <button className="back-btn" onClick={() => navigate("/")}>
      <img
          src="./src/assets/right-arrow.svg"
          alt="back-arrow"
          className="back-arrow"
        />
        Go Back
      </button>
    </div>
  );
}
