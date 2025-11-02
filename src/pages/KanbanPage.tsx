import { KanbanBoard } from '@/components/kanban';
import { Column } from '@/types/kanban';
import { toast } from 'sonner';

const mockData: Column[] = [
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

const KanbanPage = () => {
  const handleTaskMove = (taskId: string, fromColumn: string, toColumn: string) => {
    toast.success('Task moved successfully', {
      description: `Moved from ${fromColumn} to ${toColumn}`,
    });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Page header */}
      <div className="border-b bg-card px-6 py-4">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Kanban Board</h1>
        <p className="text-muted-foreground mt-1">
          Drag and drop tasks between columns to update their status
        </p>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 overflow-hidden">
        <KanbanBoard columns={mockData} onTaskMove={handleTaskMove} />
      </div>
    </div>
  );
};

export default KanbanPage;
