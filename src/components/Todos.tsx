import React, { useContext } from "react";
import { TodoItem } from "./TodoItem";
import { Todo } from "../models/todo";
import { TodosContext } from "../store/TodoContext";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className='list-none my-2 mx-auto p-0 w-[40rem]'>
      {todosCtx.items.map((item: Todo) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
