export type TaskPriority = 'low' | 'medium' | 'high';
export type TaskStatus = 'todo' | 'progress' | 'done';

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: TaskPriority;
  status: TaskStatus;
  assignee?: string;
  dueDate?: string;
  tags?: string[];
}

export interface Column {
  id: TaskStatus;
  title: string;
  tasks: Task[];
}

export interface KanbanBoardProps {
  columns: Column[];
  onTaskMove?: (taskId: string, fromColumn: TaskStatus, toColumn: TaskStatus) => void;
  onTaskUpdate?: (task: Task) => void;
  onTaskDelete?: (taskId: string) => void;
}
