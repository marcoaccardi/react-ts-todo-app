import { Todo } from "../models/todo";
import { TodoItem } from "./TodoItem";

const Todos: React.FC<{ items: Todo[] }> = ({ items }) => {
  return (
    <ul className='list-none my-2 mx-auto p-0 w-[40rem]'>
      {items.map((item: Todo) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
