# TaskMatrix

**Tagline:** *Plan, Collaborate, Deliver.*

# Project Status

**Current Phase:** Planning & System Design
**Status:** In Progress

# Product Overview

TaskMatrix is a full-stack web application designed to simplify project and task management for software development teams. The platform provides a centralized workspace where administrators, project managers, and developers can plan, organize, and collaborate throughout the software development lifecycle.

The application allows teams to create projects, assign tasks, monitor progress, manage deadlines, and track project activities through an  dashboard and Kanban board. Each user is provided with role-based access so they can only access the features relevant to their responsibilities.

TaskMatrix aims to improve team collaboration, task visibility, and overall productivity.

# Problem Statement

Many student teams and small software development teams rely on messaging applications, spreadsheets, or handwritten notes to manage projects. These methods make it difficult to:

- Track project progress
- Assign responsibilities clearly
- Monitor deadlines
- Manage multiple projects simultaneously
- Maintain a history of completed work

As projects become larger, communication becomes unorganized, resulting in missed deadlines, duplicate work, and reduced productivity.

TaskMatrix addresses these challenges by providing a  platform where teams can efficiently organize projects, assign tasks, monitor progress, and collaborate in real time.

# Project Objectives

The primary objectives of TaskMatrix are:

- Develop a modern project management platform using the MERN stack.
- Provide secure authentication and role-based access.
- Enable project managers to assign and monitor tasks efficiently.
- Allow developers to track and update their assigned work.
- Visualize project progress using a Kanban board.
- Create a responsive and user-friendly interface for both desktop and mobile devices.

# Project Scope

TaskMatrix is designed for software development teams, student project groups, and small organizations that need a centralized platform to manage projects and collaborate effectively.

The initial version of the application focuses on project management, task tracking, user authentication, and role-based access. Features such as real-time notifications, file sharing, and AI-assisted task suggestions are considered future enhancements and are outside the scope of the first release.

# Designated Track

**Track:** Full Stack Development

TaskMatrix will be developed as a full-stack web application using the MERN stack. The frontend will provide an interactive and responsive user interface, while the backend will manage authentication, business logic, database operations, and RESTful APIs.

# Technology Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| Frontend | React.js | Build an interactive and responsive user interface |
| Styling | Tailwind CSS | Design a clean, modern, and responsive interface |
| Routing | React Router | Handle navigation between application pages |
| State Management | Context API | Manage authentication and shared application state |
| Backend | Node.js | Execute server-side JavaScript |
| Framework | Express.js | Develop RESTful APIs and backend services |
| Database | MongoDB Atlas | Store users, projects, tasks, and application data |
| ODM | Mongoose | Connect and interact with MongoDB efficiently |
| Authentication | JWT & bcrypt | Secure user authentication and password encryption |
| API Testing | Postman | Test and verify backend APIs |
| Version Control | Git & GitHub | Track project changes and manage source code |
| Deployment | Vercel (Frontend), Render (Backend) | Deploy the application for public access |

# Development Methodology

The project will follow an Agile development approach where development is divided into multiple sprints. Each sprint will focus on a specific module such as authentication, project management, task management, dashboard development, and deployment.

This approach allows the application to be developed gradually, making it easier to test individual features, identify issues early, and maintain a well-organized development process.

# Core Features

The following features are planned for the initial version of TaskMatrix. Development will be carried out based on feature priority.

## High Priority (Phase 1)

- User Registration and Login
- JWT-based Authentication
- Role-Based Access Control (Administrator, Project Manager, Developer)
- Dashboard with project and task summary
- Project Creation and Management
- Task Creation and Assignment
- Task Status Management

## Medium Priority (Phase 2)

- Kanban Board for task management
- Search and Filter Projects
- Task Priority Management
- Due Date Tracking
- User Profile Management
- Activity Log

## Low Priority (Phase 3)

- Dashboard Analytics
- Dark Mode
- Email Notifications
- Project Archive
- File Attachments
- Team Performance Reports

# User Roles

TaskMatrix supports three different user roles.

### Administrator

- Manage users
- View all projects
- Remove inactive users
- Monitor overall system activity

### Project Manager

- Create and manage projects
- Assign tasks to developers
- Set task priorities and deadlines
- Monitor project progress

### Developer

- View assigned projects
- Update task status
- View deadlines
- Track completed work

# Proposed Folder Structure

TaskMatrix
│
├── client
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── context
│   │   └── utils
│
├── server
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   └── utils
├── docs
├── README.md
└── Prompts.md


# Database Design

The application will use MongoDB Atlas as the primary database.

The following collections will be created:

- Users
- Projects
- Tasks
- ActivityLogs

Each project can contain multiple tasks, and each task will be assigned to a registered user. Activity logs will store important actions performed by users within the system.

# Planned API Endpoints

## Authentication

- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/profile

## Projects

- GET /api/projects
- POST /api/projects
- PUT /api/projects/:id
- DELETE /api/projects/:id

## Tasks

- GET /api/tasks
- POST /api/tasks
- PUT /api/tasks/:id
- DELETE /api/tasks/:id

## Users

- GET /api/users
- PUT /api/users/:id

# UI/UX Wireframes

The user interface has been designed in Figma before the implementation phase.

The wireframes include:

- Login Page
- Dashboard
- Kanban Board

##Figma Link:
https://www.figma.com/design/7PPcqYcGa6IbiuGg3BJVa3/TaskMatrix---UI-Design?node-id=1-1046&t=NKplVYD84EyXZ9TR-0

# System Architecture

The database architecture is represented using an Entity Relationship Diagram, illustrating the relationship between Users, Projects, Tasks, and Activity Logs.

## Entity Relationship Diagram:
 docs/ER DIAGRAM.png

# Future Enhancements

The following features are planned for future versions of TaskMatrix:

- Real-time notifications
- Team chat
- Calendar integration
- File sharing
- Email reminders
- AI-based task suggestions
- Mobile application support

# Author

**Gajja Gouni Deepthi**

BCA Student

Full Stack Development Track

ProDesk Internship – Capstone Project 2026