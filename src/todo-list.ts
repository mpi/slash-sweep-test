// should load items from yaml file

type TodoItem = {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: Date;
  updatedAt?: Date;
};

function loadTodoItems(file: string): TodoItem[] {
  // TODO AI: load items from yaml file
  return undefined;
}
