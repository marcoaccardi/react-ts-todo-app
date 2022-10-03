import React from "react";
import Todos from "./components/Todos";
import { NewTodo } from "./components/NewTodo";
import { TodosContextProvider } from "./store/TodoContext";

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
