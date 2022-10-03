// type | interface

export class Todo {
  id: string;
  text: string;
  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export interface NewTodoProps {
  onAddTodo: (enteredText: string) => void;
}
export interface TodoItemProps {
  text: string;
  onRemoveTodo: () => void;
}
export interface TodoContextProps {
  items: Todo[];
  addTodo: (enteredText: string) => void;
  removeTodo: (itemID: string) => void;
}

export interface TodosContextProviderProps {
  children: React.ReactNode;
}
