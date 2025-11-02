# Kanban Board - Project Management Tool

A beautiful, drag-and-drop Kanban board application built with React, TypeScript, and Tailwind CSS. This project demonstrates modern frontend development practices with a focus on user experience and clean code architecture.

## Features

- **Drag & Drop Interface**: Intuitive task management with drag-and-drop functionality
- **Multiple Boards**: Organize projects across different boards
- **Task Management**: Create, edit, and delete tasks with rich metadata
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI/UX**: Clean, professional interface built with shadcn/ui components
- **TypeScript**: Full type safety throughout the application
- **Storybook**: Component documentation and development

## Technologies Used

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **React Router** - Client-side routing
- **shadcn/ui** - Modern component library
- **Tailwind CSS** - Utility-first CSS framework
- **Storybook** - Component development environment
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd kanban-board

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run storybook` - Start Storybook development server

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── types/          # TypeScript type definitions
└── main.tsx        # Application entry point
```

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop your build folder or connect to Git
- **GitHub Pages**: Deploy directly from your repository

Build the project first:
```bash
npm run build
```

Then deploy the `dist` folder to your preferred hosting service.

## Contributing

This project was built as a demonstration of modern frontend development skills. Feel free to fork and modify for your own use.

## License

This project is open source and available under the MIT License.
