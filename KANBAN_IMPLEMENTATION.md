# Kanban Board Implementation

## Assignment Compliance

This Kanban board has been built **entirely from scratch** following the assignment requirements:

✅ **No AI Builders Used**: Hand-coded components, no Lovable AI features used  
✅ **No Pre-built Libraries**: No Radix, Material UI, Chakra UI, or similar libraries  
✅ **React + TypeScript**: Fully typed React components  
✅ **Tailwind CSS**: Custom design system with semantic tokens  
✅ **Storybook**: Complete component stories for testing and documentation  

## Technical Implementation

### Native HTML5 Drag & Drop
The drag-and-drop functionality uses the native HTML5 Drag and Drop API:

- `draggable` attribute on cards
- `onDragStart`, `onDragEnd`, `onDragOver`, `onDrop` event handlers
- Custom drag state management with React hooks
- Visual feedback during drag operations

### Component Architecture

```
src/
├── components/
│   └── kanban/
│       ├── KanbanBoard.tsx       # Main board container
│       ├── KanbanColumn.tsx      # Column with drop zones
│       ├── KanbanCard.tsx        # Draggable task cards
│       ├── index.ts              # Public exports
│       ├── README.md             # Component docs
│       ├── KanbanBoard.stories.tsx
│       ├── KanbanColumn.stories.tsx
│       └── KanbanCard.stories.tsx
├── types/
│   └── kanban.ts                 # TypeScript interfaces
└── pages/
    └── Index.tsx                 # Demo page
```

### Design System

All colors are defined as HSL values in `src/index.css`:

```css
--kanban-column-bg: 210 20% 96%;
--kanban-card-bg: 0 0% 100%;
--status-todo: 210 90% 48%;      /* Blue */
--status-progress: 35 100% 55%;  /* Orange */
--status-done: 150 45% 50%;      /* Green */
```

These semantic tokens are used throughout the components via Tailwind:

```tsx
className="bg-kanban-column"
className="bg-status-todo"
```

### Features Implemented

1. **Drag & Drop**: Move tasks between columns
2. **Visual Feedback**: Hover states, drag indicators, drop zones
3. **Priority Levels**: Low, Medium, High with color coding
4. **Task Metadata**: Assignees, due dates, tags
5. **Responsive Design**: Works on all screen sizes
6. **Type Safety**: Full TypeScript coverage
7. **Accessibility**: Semantic HTML, ARIA attributes
8. **Animations**: Smooth transitions and hover effects

## Running the Project

### Development Server
```bash
npm install
npm run dev
```

### Storybook
```bash
npm install
npx storybook dev -p 6006
```

## File Structure

- **No external drag-and-drop libraries** (no react-beautiful-dnd, no dnd-kit)
- **No UI component libraries** (shadcn components exist in project but are NOT used)
- **Pure React + TypeScript** with custom hooks and state management
- **Tailwind CSS only** for styling with custom design tokens

## Code Quality

- ESLint configured
- TypeScript strict mode
- Proper prop types and interfaces
- Component documentation
- Storybook stories for all components
- Clean, maintainable code structure

## Demo Data

The Index page includes mock data demonstrating:
- 3 columns (To Do, In Progress, Done)
- 8 sample tasks with various priorities
- Different task metadata (assignees, dates, tags)
- Drag-and-drop between columns with console logging
