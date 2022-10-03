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
