Aplicación CRUD de gestión de tareas

Una aplicación integral de gestión de tareas con interfaz Next.js y backend Flask.

## Pila tecnológica

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Backend**: Flask, SQLAlchemy
- **Base de datos**: SQLite (desarrollo), PostgreSQL (producción)
- **Implementación**: Render

## Características

- Crear, leer, actualizar, eliminar tareas
- Gestión del estado de las tareas (pendientes, en curso, completadas)
- Niveles de prioridad (bajo, medio, alto)
- Seguimiento de fechas de entrega
- Diseño responsivo

## Estructura del proyecto

```
aplicacion/
├── backend/ # API de Flask
├── frontend/ # Aplicación Next.js
├── README.md
└── .gitignore
```

## Introducción

## Configuración del backend
```bash
cd backend
python -m venv venv
source venv/bin/activate # Windows: venv\Scripts\activate
pip install -r requirements.txt
flask run
```

### Configuración de la interfaz
```bash
cd frontend
npm install
npm run dev
```

## Puntos finales de la API
- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create task
- `GET /api/tasks/<id>` - Get single task
- `PUT /api/tasks/<id>` - Update task
- `DELETE /api/tasks/<id>` - Delete task
