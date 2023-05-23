"use client";

import { useState, useEffect } from "react";

function CSR() {
  const [message, setMessage] = useState({});

  useEffect(() => {
    const fetchMessage = async () => {
      const res = await fetch("/api/todos");
      const message = await res.json();
      console.log(message);
      setMessage(message);
    };
    fetchMessage();
  }, []);

  return (
    <main>
      <h1>CSR</h1>
    </main>
  );
}

export default CSR;
