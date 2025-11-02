# Kanban Board Component

A beautiful, drag-and-drop Kanban board built from scratch with React, TypeScript, and Tailwind CSS.

## Features

- 🎯 **Native Drag & Drop**: Built with HTML5 Drag and Drop API (no external libraries)
- 🎨 **Beautiful Design**: Modern, clean interface with smooth animations
- 📱 **Responsive**: Works seamlessly across different screen sizes
- 🔒 **Type Safe**: Fully typed with TypeScript
- ♿ **Accessible**: Follows WCAG guidelines
- 📚 **Storybook**: Includes comprehensive component stories

## Components

### KanbanBoard
Main container component that manages the entire board state.

```tsx
import { KanbanBoard } from '@/components/kanban';

<KanbanBoard 
  columns={columns}
  onTaskMove={(taskId, from, to) => console.log('Task moved')}
/>
```

### KanbanColumn
Individual column component that displays tasks and handles drop events.

### KanbanCard
Draggable task card with priority indicators, assignees, and metadata.

## Data Structure

```typescript
interface Task {
  id: string;
  title: string;
  description?: string;
  priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'progress' | 'done';
  assignee?: string;
  dueDate?: string;
  tags?: string[];
}

interface Column {
  id: TaskStatus;
  title: string;
  tasks: Task[];
}
```

## Running Storybook

To view and interact with the components in Storybook:

```bash
# Install dependencies
npm install

# Run Storybook
npx storybook dev -p 6006
```

Then open http://localhost:6006 in your browser.

## Usage Example

```tsx
import { KanbanBoard } from '@/components/kanban';
import { Column } from '@/types/kanban';

const columns: Column[] = [
  {
    id: 'todo',
    title: 'To Do',
    tasks: [
      {
        id: '1',
        title: 'Design landing page',
        priority: 'high',
        status: 'todo',
        assignee: 'Alice',
      }
    ]
  },
  // ... more columns
];

function App() {
  const handleTaskMove = (taskId: string, from: string, to: string) => {
    console.log(`Task ${taskId} moved from ${from} to ${to}`);
    // Update your backend/state here
  };

  return (
    <KanbanBoard 
      columns={columns} 
      onTaskMove={handleTaskMove}
    />
  );
}
```

## Customization

The component uses Tailwind CSS with a custom design system. You can customize:

- **Colors**: Edit `src/index.css` (HSL color variables)
- **Styles**: Modify Tailwind classes in component files
- **Animations**: Adjust transition durations and effects

## Design System

The Kanban board uses semantic tokens from the design system:

- `kanban-column`: Column background color
- `kanban-card`: Card background color
- `status-todo`, `status-progress`, `status-done`: Status indicator colors
- `drag-over`, `drag-active`: Drag state colors

All colors are defined in HSL format for easy theming.
