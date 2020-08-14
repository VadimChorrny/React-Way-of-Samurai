import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
  const todos = [
    { id: 1, complated: false, title: "Buy brod" },
    { id: 2, complated: false, title: "Buy milk" },
    { id: 3, complated: false, title: "Buy maslo" },
  ];

  return (
    <div className="wrapper">
      <h1>Список продуктов</h1>

      <TodoList todos={todos} />
    </div>
  );
}

export default App;
