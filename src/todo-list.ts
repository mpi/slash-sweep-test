import * as fs from 'fs';
import * as yaml from 'js-yaml';

// Type to encapsulate todo items loaded from YAML
interface TodoItem {
  id?: number;
  title: string;
  description?: string;
  completed?: boolean;
  priority?: 'low' | 'medium' | 'high';
  dueDate?: string;
}

interface TodoList {
  items: TodoItem[];
}

// Load items from yaml file
function loadTodoItems(file: string): TodoList {
  try {
    const fileContents = fs.readFileSync(file, 'utf8');
    const data = yaml.load(fileContents) as any;

    // Validate and structure the data
    if (!data || !Array.isArray(data.items)) {
      return { items: [] };
    }

    return {
      items: data.items.map((item: any) => ({
        id: item.id,
        title: item.title || '',
        description: item.description,
        completed: item.completed || false,
        priority: item.priority || 'medium',
        dueDate: item.dueDate
      }))
    };
  } catch (error) {
    console.error(`Error loading todo items from ${file}:`, error);
    return { items: [] };
  }
}
