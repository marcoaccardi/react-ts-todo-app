import React, { useRef } from "react";
import { NewTodoProps } from "../models/todo";

export const NewTodo: React.FC<NewTodoProps> = ({ onAddTodo }) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // -current!value- it will never be "null" I'm certain that it will not be null
    // ?current optional property, it could be "null" try to get the value if null, store null
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      // throw an error if nothing was entered when we submit
      return;
    }
    onAddTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className='w-[40rem] my-8 mx-auto'>
      <label htmlFor='text' className='block font-bold mb-2'>
        Todo Text
      </label>
      <input
        type='text'
        id='text'
        ref={todoTextInputRef}
        className='block w-full text-2xl p-2 rounded-lg bg-[#f7f5ef] mb-2 border-b-2 '
      />
      <button className='hover:bg-[#ebc002] active:border-[#ebc002] border-cyan-300 border-2 p-2'>
        Add Todo
      </button>
    </form>
  );
};
