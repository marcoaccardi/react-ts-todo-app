import { RiDeleteBack2Line } from "react-icons/ri";
import { TodoItemProps } from "../models/todo";

export const TodoItem: React.FC<TodoItemProps> = ({ text, onRemoveTodo }) => {
  return (
    <div className='flex justify-start items-center w-full'>
      <li className='my-4 mx-0 p-4 bg-[#f7f5ef] w-full'>{text}</li>
      <RiDeleteBack2Line
        onClick={onRemoveTodo}
        size={35}
        className='mx-2 hover:border-cyan-400'
      />
    </div>
  );
};
