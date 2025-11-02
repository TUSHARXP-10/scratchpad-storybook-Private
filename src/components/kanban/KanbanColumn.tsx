import { useState } from 'react';
import { Task, TaskStatus } from '@/types/kanban';
import { KanbanCard } from './KanbanCard';

interface KanbanColumnProps {
  id: TaskStatus;
  title: string;
  tasks: Task[];
  onDrop: (e: React.DragEvent<HTMLDivElement>, columnId: TaskStatus) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, task: Task) => void;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void;
}

const statusColors = {
  todo: 'border-status-todo',
  progress: 'border-status-progress',
  done: 'border-status-done',
};

export const KanbanColumn = ({
  id,
  title,
  tasks,
  onDrop,
  onDragStart,
  onDragEnd,
}: KanbanColumnProps) => {
  const [isDraggedOver, setIsDraggedOver] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggedOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggedOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggedOver(false);
    onDrop(e, id);
  };

  return (
    <div
      className={`
        flex flex-col rounded-xl bg-kanban-column p-4
        min-w-[320px] max-w-[380px] flex-1
        transition-all duration-200
        ${isDraggedOver ? 'ring-2 ring-drag-active bg-drag-over' : ''}
      `}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Column Header */}
      <div className={`flex items-center justify-between mb-4 pb-3 border-b-2 ${statusColors[id]}`}>
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-foreground text-lg">{title}</h2>
          <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
            {tasks.length}
          </span>
        </div>
      </div>

      {/* Cards Container */}
      <div className="flex-1 space-y-3 overflow-y-auto min-h-[200px]">
        {tasks.length === 0 ? (
          <div className="flex items-center justify-center h-32 text-muted-foreground text-sm">
            Drop tasks here
          </div>
        ) : (
          tasks.map((task) => (
            <KanbanCard
              key={task.id}
              task={task}
              onDragStart={onDragStart}
              onDragEnd={onDragEnd}
            />
          ))
        )}
      </div>
    </div>
  );
};
