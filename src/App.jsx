import "./App.css";
import { Routes, Route } from "react-router-dom";
import WebAppName from "./components/WebAppName.jsx";
import EncryptionApp from "./components/EncryptionInput.jsx";
import ResultsPage from "./components/Results.jsx";

function Page() {
  return (
    <>
      <WebAppName />
      <Routes>
        <Route path="/" element={<EncryptionApp />} />
        <Route path="/result" element={<ResultsPage />} />
      </Routes>
    </>
  );
}

export default Page;
