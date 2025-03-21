import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { caesarEncryption, vigenereEncryption, affineEncryption, playfairEncryption } from "../utils/encryptions";
import { caesarDecryption, vigenereDecryption, affineDecryption, playfairDecryption } from "../utils/decryptions";

function SetEncryption({ onSelect }) {
  const encryptions = ["Affine" , "Caesar", "Playfair", "Vigenere"];
  return (
    <div className="section">
      <p className="section-title">Choose your cipher</p>
      <select className="select-btn" onChange={(e) => onSelect(e.target.value)}>
        <option className="default-option" value="">
          -- Select --
        </option>
        {encryptions.map((enc) => (
          <option key={enc} value={enc}>
            {enc}
          </option>
        ))}
      </select>
    </div>
  );
}

function EncryptDecryptToggle({ mode, onToggle }) {
  return (
    <div className="toggle-container">
      <button
        className={mode === "encrypt" ? "active" : ""}
        onClick={() => onToggle("encrypt")}
      >
        ENCRYPT
      </button>
      <button
        className={mode === "decrypt" ? "active" : ""}
        onClick={() => onToggle("decrypt")}
      >
        DECRYPT
      </button>
    </div>
  );
}

function EncryptionInput({ encryption, mode }) {
  const [text, setText] = useState("");
  const [key, setKey] = useState(""); // For Vigenere & Playfair
  const [shift, setShift] = useState(""); // For Caesar
  const [a, setA] = useState(""); // Affine key 'a'
  const [b, setB] = useState(""); // Affine key 'b'

  if (!encryption) return null;

  return (
    <div className="section actual-encryption">
      <p className="section-title">
        {mode === "encrypt" ? "Enter plaintext" : "Enter ciphertext"}
      </p>
      <textarea
        className="plaintext-input"
        placeholder="Start typing here"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
        autoFocus
      />

      <p className="section-title">Enter key</p>
      {encryption === "Caesar" ? (
        <input
          className="key-input"
          type="number"
          min={1}
          max={26}
          placeholder="Enter shift here"
          value={shift}
          onChange={(e) => setShift(e.target.value)}
          required
        />
      ) : encryption === "Affine" ? (
        <div className="affine-keys">
          <input
            className="key-input"
            type="number"
            placeholder="Enter 'a' here"
            value={a}
            onChange={(e) => setA(e.target.value)}
            required
          />
          <input
            className="key-input"
            type="number"
            placeholder="Enter 'b' here"
            value={b}
            onChange={(e) => setB(e.target.value)}
            required
          />
        </div>
      ) : (
        <input
          className="key-input"
          type="text"
          placeholder="Enter key here"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          required
        />
      )}

      <button className={`enc-btn ${mode}`}>
        {mode === "encrypt" ? "Encrypt text" : "Decrypt text"}
        <img
          src="./src/assets/right-arrow.svg"
          alt="right-arrow"
          className="arrow"
        />
      </button>
    </div>
  );
}


export default function EncryptionApp() {
  const [selectedEncryption, setSelectedEncryption] = useState("");
  const [mode, setMode] = useState("encrypt");

  return (
    <div>
      <SetEncryption onSelect={setSelectedEncryption} />
      <EncryptDecryptToggle mode={mode} onToggle={setMode} />
      <EncryptionInput encryption={selectedEncryption} mode={mode} />
    </div>
  );
}
