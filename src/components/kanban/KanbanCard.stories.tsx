import type { Meta, StoryObj } from '@storybook/react';
import { KanbanCard } from './KanbanCard';
import { Task } from '@/types/kanban';

const meta = {
  title: 'Kanban/KanbanCard',
  component: KanbanCard,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    onDragStart: { action: 'drag started' },
    onDragEnd: { action: 'drag ended' },
  },
} satisfies Meta<typeof KanbanCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockTask: Task = {
  id: '1',
  title: 'Design new landing page',
  description: 'Create mockups and wireframes for the new landing page redesign',
  priority: 'high',
  status: 'todo',
  assignee: 'Alice Johnson',
  dueDate: '2025-11-15',
  tags: ['Design', 'UI/UX', 'Priority'],
};

export const HighPriority: Story = {
  args: {
    task: mockTask,
    onDragStart: () => {},
    onDragEnd: () => {},
  },
};

export const MediumPriority: Story = {
  args: {
    task: {
      ...mockTask,
      priority: 'medium',
      title: 'Implement user authentication',
      description: 'Build JWT-based authentication system with refresh tokens',
      tags: ['Backend', 'Security'],
    },
    onDragStart: () => {},
    onDragEnd: () => {},
  },
};

export const LowPriority: Story = {
  args: {
    task: {
      ...mockTask,
      priority: 'low',
      title: 'Update documentation',
      description: 'Update API documentation with new endpoints',
      tags: ['Documentation'],
    },
    onDragStart: () => {},
    onDragEnd: () => {},
  },
};

export const NoDescription: Story = {
  args: {
    task: {
      id: '2',
      title: 'Quick task without details',
      priority: 'medium',
      status: 'todo',
      assignee: 'Bob Smith',
      tags: ['Quick'],
    },
    onDragStart: () => {},
    onDragEnd: () => {},
  },
};

export const MinimalCard: Story = {
  args: {
    task: {
      id: '3',
      title: 'Team standup meeting',
      priority: 'low',
      status: 'todo',
    },
    onDragStart: () => {},
    onDragEnd: () => {},
  },
};

export const WithDueDate: Story = {
  args: {
    task: {
      id: '4',
      title: 'Urgent: Production hotfix',
      description: 'Fix critical bug affecting user authentication flow',
      priority: 'high',
      status: 'progress',
      assignee: 'Charlie Brown',
      dueDate: new Date().toISOString(),
      tags: ['Urgent', 'Hotfix', 'Production'],
    },
    onDragStart: () => {},
    onDragEnd: () => {},
  },
};
