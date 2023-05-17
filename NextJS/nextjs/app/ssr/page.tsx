export const revalidate = 0;

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await res.json();
};

async function SSR() {
  const todos = await fetchTodos();

  return (
    <main>
      <h1>SSR</h1>

      {todos.map((todo: { title: string; id: number }) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </main>
  );
}

export default SSR;
