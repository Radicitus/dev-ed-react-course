import Link from "next/link";

export const metadata = {
  title: "About page",
  description: "What's it's all about?",
};

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await res.json();
};

export default async function About() {
  const todos = await fetchTodos();

  return (
    <main>
      <Link href={"/"}>Home Page</Link>
      <h1>About Page</h1>

      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </main>
  );
}
