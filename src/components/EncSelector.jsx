import { useState } from "react";

function SetEcryption({ onSelect }) {
  const encryptions = ["Vigenere", "Playfair", "Caesar", "Affine"];
  return (
    <div className="section">
      <h2 className="section-title">Choose your cipher</h2>
      <select className="select-btn" onChange={(e) => onSelect(e.target.value)}>
        <option value="">-- Select --</option>
        {encryptions.map((enc) => (
          <option key={enc} value={enc}></option>
        ))}
      </select>
    </div>
  );
}

function EncryptionInput({ encryption }) {
  const [plaintext, setPlaintext] = useState("");
  const [key, setKey] = useState("");
  const [shift, setShift] = useState("");

  if (!encryption) return null;

  return (
    <div className="section">
      <h2 className="section-title">Enter plaintext</h2>
      <input
        className="plaintext-input"
        type="text"
        placeholder="Start typing here"
        value={plaintext}
        onChange={(e) => setPlaintext(e.target.value)}
      />
      {encryption === "Caesar" ? (
        <input
          className="key-input"
          type="number"
          placeholder="Enter shift here"
          value={shift}
          onChange={(e) => setShift(e.target.value)}
        />
      ) : (
        <input
          className="key-input"
          type="text"
          placeholder="Enter key here"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />
      )}
      <button className="enc-btn">Encrypt</button>
    </div>
  );
}

export default function EncryptionApp() {
  const [selectedEncryption, setSelectedEncryption] = useState("");

  return (
    <div>
      <SetEcryption onSelect={setSelectedEncryption} />
      <EncryptionInput encryption={selectedEncryption} />
    </div>
  );
}
