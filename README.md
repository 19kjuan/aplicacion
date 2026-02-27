# Task Management CRUD App

A full-stack task management application with Next.js frontend and Flask backend.

## Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Backend**: Flask, SQLAlchemy
- **Database**: SQLite (development), PostgreSQL (production)
- **Deployment**: Render

## Features

- Create, Read, Update, Delete tasks
- Task status management (pending, in-progress, completed)
- Priority levels (low, medium, high)
- Due date tracking
- Responsive design

## Project Structure

```
aplicacion/
├── backend/          # Flask API
├── frontend/         # Next.js app
├── README.md
└── .gitignore
```

## Getting Started

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
flask run
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## API Endpoints

- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create task
- `GET /api/tasks/<id>` - Get single task
- `PUT /api/tasks/<id>` - Update task
- `DELETE /api/tasks/<id>` - Delete task
