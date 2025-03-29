import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { result, mode } = location.state;
  const [copied, setCopied] = useState(false);

  return (
    <div className="section">
      <p className="section-title">
        {mode === "encrypt" ? "< Encrypted Text />" : "< Decrypted Text />"}
      </p>

      <textarea className="plaintext-input" value={result} readOnly />

      <button className="back-btn" onClick={() => navigate("/")}>
        Go Back
      </button>
    </div>
  );
}
