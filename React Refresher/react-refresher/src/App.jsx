import { useState } from "react";
import "./App.css";
import Counter from "./Counter.jsx";

function App() {
  const [message, setMessage] = useState("Not enough clicks...");

  return (
    <>
      <Counter message={message} setMessage={setMessage} />
    </>
  );
}

export default App;
