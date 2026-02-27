# Deployment Guide

## Database Setup (MySQL)

### Local Development

1. Install MySQL Server on your system
2. Create the database and user:
   ```bash
   cd backend
   python setup_database.py
   ```
   
   Or manually execute:
   ```sql
   CREATE DATABASE task_management CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   CREATE USER 'aplicacionsena'@'localhost' IDENTIFIED BY 'Juanjesus200619';
   GRANT ALL PRIVILEGES ON task_management.* TO 'aplicacionsena'@'localhost';
   FLUSH PRIVILEGES;
   ```

3. Install Python dependencies:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

4. Run the application:
   ```bash
   python app.py
   ```

## GitHub Setup

1. Create a new repository on GitHub
2. Add remote origin:
   ```bash
   git remote add origin https://github.com/yourusername/task-management-app.git
   git branch -M main
   git push -u origin main
   ```

## Render Deployment

### Backend Deployment

1. Go to [render.com](https://render.com) and create an account
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: task-management-backend
   - **Root Directory**: `backend`
   - **Runtime**: Python 3
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `python app.py`
   - **Instance Type**: Free

5. Add Environment Variables:
   - `DATABASE_URL`: MySQL connection string (Render will provide MySQL database)
   - `FLASK_ENV`: `production`

### Frontend Deployment

1. Click "New" → "Static Site"
2. Configure the service:
   - **Name**: task-management-frontend
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Publish Directory**: `out`
   - **Add Build Command**: Add `npm install` before build

3. Add Environment Variables:
   - `NEXT_PUBLIC_API_URL`: Your backend URL from Render

### Update Frontend API URL

After deploying the backend, update the API URL in `frontend/lib/api.js`:

```javascript
const API_BASE_URL = 'https://your-backend-url.onrender.com';
```

## Local Development

### Backend
```bash
cd backend
python -m venv venv
# Windows
venv\Scripts\activate
# Mac/Linux
source venv/bin/activate
pip install -r requirements.txt
# Setup database first
python setup_database.py
# Run the app
python app.py
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Features

- ✅ Full CRUD operations (Create, Read, Update, Delete)
- ✅ Task status management (pending, in-progress, completed)
- ✅ Priority levels (low, medium, high)
- ✅ Due date tracking
- ✅ Search and filtering
- ✅ Responsive design
- ✅ Modern UI with Tailwind CSS
- ✅ RESTful API with Flask
- ✅ MySQL database with SQLAlchemy

## API Endpoints

- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create task
- `GET /api/tasks/<id>` - Get single task
- `PUT /api/tasks/<id>` - Update task
- `DELETE /api/tasks/<id>` - Delete task
- `GET /api/health` - Health check

## Database Configuration

The application uses MySQL with the following credentials:
- **Database**: task_management
- **User**: aplicacionsena
- **Password**: Juanjesus200619
- **Host**: localhost (development) / Render MySQL (production)
