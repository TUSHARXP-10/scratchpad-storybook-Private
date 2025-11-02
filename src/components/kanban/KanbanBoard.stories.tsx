import type { Meta, StoryObj } from '@storybook/react';
import { KanbanBoard } from './KanbanBoard';
import { Column } from '@/types/kanban';

const meta = {
  title: 'Kanban/KanbanBoard',
  component: KanbanBoard,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    onTaskMove: { action: 'task moved' },
  },
} satisfies Meta<typeof KanbanBoard>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockColumns: Column[] = [
  {
    id: 'todo',
    title: 'To Do',
    tasks: [
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
        description: 'Update API documentation with new endpoints',
        priority: 'low',
        status: 'todo',
        assignee: 'Charlie',
        dueDate: '2025-11-20',
        tags: ['Documentation'],
      },
    ],
  },
  {
    id: 'progress',
    title: 'In Progress',
    tasks: [
      {
        id: '4',
        title: 'Implement user authentication',
        description: 'Build JWT-based authentication system with refresh tokens',
        priority: 'high',
        status: 'progress',
        assignee: 'Diana',
        dueDate: '2025-11-10',
        tags: ['Backend', 'Security'],
      },
      {
        id: '5',
        title: 'Create dashboard components',
        description: 'Develop reusable React components for the admin dashboard',
        priority: 'medium',
        status: 'progress',
        assignee: 'Eve',
        tags: ['Frontend', 'React'],
      },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [
      {
        id: '6',
        title: 'Setup project repository',
        description: 'Initialize Git repository and configure CI/CD pipeline',
        priority: 'high',
        status: 'done',
        assignee: 'Frank',
        tags: ['DevOps'],
      },
      {
        id: '7',
        title: 'Database schema design',
        description: 'Design and implement PostgreSQL database schema',
        priority: 'high',
        status: 'done',
        assignee: 'Grace',
        tags: ['Database', 'Backend'],
      },
      {
        id: '8',
        title: 'Team kickoff meeting',
        priority: 'low',
        status: 'done',
        assignee: 'Henry',
        tags: ['Meeting'],
      },
    ],
  },
];

export const Default: Story = {
  args: {
    columns: mockColumns,
    onTaskMove: (taskId, from, to) => {
      console.log(`Task ${taskId} moved from ${from} to ${to}`);
    },
  },
};

export const EmptyBoard: Story = {
  args: {
    columns: [
      { id: 'todo', title: 'To Do', tasks: [] },
      { id: 'progress', title: 'In Progress', tasks: [] },
      { id: 'done', title: 'Done', tasks: [] },
    ],
    onTaskMove: () => {},
  },
};

export const SingleTask: Story = {
  args: {
    columns: [
      {
        id: 'todo',
        title: 'To Do',
        tasks: [
          {
            id: '1',
            title: 'First task',
            description: 'This is the first task in the board',
            priority: 'high',
            status: 'todo',
            assignee: 'User',
            tags: ['Starter'],
          },
        ],
      },
      { id: 'progress', title: 'In Progress', tasks: [] },
      { id: 'done', title: 'Done', tasks: [] },
    ],
    onTaskMove: () => {},
  },
};
