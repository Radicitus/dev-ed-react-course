"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// export const metadata = {
//   title: "About page",
//   description: "What's it's all about?",
// };

export default function About() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setData(data);
    };
    fetchTodos();
  }, []);

  return (
    <main>
      <Link href={"/"}>Home Page</Link>
      <h1>About Page</h1>

      {data.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </main>
  );
}
