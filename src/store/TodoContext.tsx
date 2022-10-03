import React, { useState } from "react";
import {
  Todo,
  TodoContextProps,
  TodosContextProviderProps,
} from "../models/todo";

export const TodosContext = React.createContext<TodoContextProps>({
  items: [],
  addTodo: () => {},
  removeTodo: (itemId: string) => {},
});

export const TodosContextProvider: React.FC<TodosContextProviderProps> = ({
  children,
}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (enteredText: string) => {
    const newTodo = new Todo(enteredText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodoContextProps = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};
