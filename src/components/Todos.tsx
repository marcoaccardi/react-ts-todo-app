import { Todo } from "../models/todo";
import { TodoItem } from "./TodoItem";

const Todos: React.FC<{
  items: Todo[];
  onRemoveTodo: (todoId: string) => void;
}> = ({ items, onRemoveTodo }) => {
  return (
    <ul className='list-none my-2 mx-auto p-0 w-[40rem]'>
      {items.map((item: Todo) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
