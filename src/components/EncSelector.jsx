import { useState } from "react";

function setEcryptions({ onSelect }) {
  const encryptions = ["Vigenere", "Playfair", "Caesar", "Affine"];
  return (
    <div>
      <h2>Choose your cipher</h2>
      <select onChange={(e) => onSelect(e.target.value)}>
        <option value="">-- Select --</option>
        {encryptions.map((enc) => (
          <option key={enc} value={enc}></option>
        ))}
      </select>
    </div>
  );
}
