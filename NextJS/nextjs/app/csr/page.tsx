"use client";

import { useState, useEffect } from "react";

function CSR() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  return (
    <main>
      <h1>CSR</h1>

      {todos.map((todo: { title: string; id: number }) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </main>
  );
}

export default CSR;
