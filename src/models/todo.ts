export interface Todo {
  id: number;
  description: string;
  isCompleted: boolean;
}

export interface Todos {
  list: string;
  listId: number;
  todos: Todo[];
}
