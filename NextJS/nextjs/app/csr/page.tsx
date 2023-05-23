"use client";

import { useState } from "react";

function CSR() {
  const [message, setMessage] = useState({});

  const fetchMessage = async () => {
    const res = await fetch("/api/todos");
    const message = await res.json();
    console.log(message);
    setMessage(message);
  };

  return (
    <main>
      <h1 onClick={fetchMessage}>CSR</h1>
    </main>
  );
}

export default CSR;
