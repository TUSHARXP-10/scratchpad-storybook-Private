import { useState } from 'react';
import { Column, Task, TaskStatus, KanbanBoardProps } from '@/types/kanban';
import { KanbanColumn } from './KanbanColumn';

export const KanbanBoard = ({ columns: initialColumns, onTaskMove }: KanbanBoardProps) => {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, task: Task) => {
    setDraggedTask(task);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    setDraggedTask(null);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetColumnId: TaskStatus) => {
    e.preventDefault();
    
    if (!draggedTask) return;

    const sourceColumnId = draggedTask.status;
    
    // Don't do anything if dropped in the same column
    if (sourceColumnId === targetColumnId) return;

    // Update columns state
    setColumns((prevColumns) => {
      const newColumns = prevColumns.map((column) => {
        // Remove task from source column
        if (column.id === sourceColumnId) {
          return {
            ...column,
            tasks: column.tasks.filter((task) => task.id !== draggedTask.id),
          };
        }
        
        // Add task to target column
        if (column.id === targetColumnId) {
          const updatedTask = { ...draggedTask, status: targetColumnId };
          return {
            ...column,
            tasks: [...column.tasks, updatedTask],
          };
        }
        
        return column;
      });

      return newColumns;
    });

    // Call callback if provided
    if (onTaskMove) {
      onTaskMove(draggedTask.id, sourceColumnId, targetColumnId);
    }

    setDraggedTask(null);
  };

  return (
    <div className="w-full h-full">
      <div className="flex gap-4 p-6 overflow-x-auto h-full">
        {columns.map((column) => (
          <KanbanColumn
            key={column.id}
            id={column.id}
            title={column.title}
            tasks={column.tasks}
            onDrop={handleDrop}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        ))}
      </div>
    </div>
  );
};
