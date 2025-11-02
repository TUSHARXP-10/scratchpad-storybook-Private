import type { Meta, StoryObj } from '@storybook/react';
import { KanbanColumn } from './KanbanColumn';
import { Task } from '@/types/kanban';

const meta = {
  title: 'Kanban/KanbanColumn',
  component: KanbanColumn,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    onDrop: { action: 'task dropped' },
    onDragStart: { action: 'drag started' },
    onDragEnd: { action: 'drag ended' },
  },
} satisfies Meta<typeof KanbanColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Design new landing page',
    description: 'Create mockups and wireframes for the new landing page redesign',
    priority: 'high',
    status: 'todo',
    assignee: 'Alice',
    dueDate: '2025-11-15',
    tags: ['Design', 'UI/UX'],
  },
  {
    id: '2',
    title: 'Research competitor features',
    description: 'Analyze competitor products and document key features',
    priority: 'medium',
    status: 'todo',
    assignee: 'Bob',
    tags: ['Research'],
  },
  {
    id: '3',
    title: 'Update documentation',
    priority: 'low',
    status: 'todo',
    assignee: 'Charlie',
    tags: ['Documentation'],
  },
];

export const TodoColumn: Story = {
  args: {
    id: 'todo',
    title: 'To Do',
    tasks: mockTasks,
    onDrop: () => {},
    onDragStart: () => {},
    onDragEnd: () => {},
  },
};

export const InProgressColumn: Story = {
  args: {
    id: 'progress',
    title: 'In Progress',
    tasks: [
      {
        id: '4',
        title: 'Implement user authentication',
        description: 'Build JWT-based authentication system',
        priority: 'high',
        status: 'progress',
        assignee: 'Diana',
        tags: ['Backend'],
      },
    ],
    onDrop: () => {},
    onDragStart: () => {},
    onDragEnd: () => {},
  },
};

export const DoneColumn: Story = {
  args: {
    id: 'done',
    title: 'Done',
    tasks: [
      {
        id: '6',
        title: 'Setup project repository',
        priority: 'high',
        status: 'done',
        assignee: 'Frank',
        tags: ['DevOps'],
      },
      {
        id: '7',
        title: 'Database schema design',
        priority: 'high',
        status: 'done',
        assignee: 'Grace',
        tags: ['Database'],
      },
    ],
    onDrop: () => {},
    onDragStart: () => {},
    onDragEnd: () => {},
  },
};

export const EmptyColumn: Story = {
  args: {
    id: 'todo',
    title: 'To Do',
    tasks: [],
    onDrop: () => {},
    onDragStart: () => {},
    onDragEnd: () => {},
  },
};
