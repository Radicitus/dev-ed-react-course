import { useEffect, useState } from "react";
import "./App.css";
// import Counter from "./Counter.jsx";

function App() {
  // const [message, setMessage] = useState("Not enough clicks...");
  //
  // return (
  //   <>
  //     <Counter message={message} setMessage={setMessage} />
  //   </>
  // );

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
    <>
      <h1>Hello</h1>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </>
  );
}

export default App;
