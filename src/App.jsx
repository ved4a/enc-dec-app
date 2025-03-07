import "./App.css";
import WebAppName from "./components/WebAppName.jsx";
import ComponentTitles from "./components/ComponentTitles.jsx";

function Page() {
  return (
    <>
      <WebAppName />
      <ComponentTitles text={"Choose your Cipher"} />
    </>
  );
}

export default Page;
