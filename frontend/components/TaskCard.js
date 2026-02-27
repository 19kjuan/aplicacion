'use client';

import { format } from 'date-fns';
import { Edit2, Trash2, Calendar, Flag } from 'lucide-react';

const TaskCard = ({ task, onEdit, onDelete }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-yellow-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-800 flex-1">
          {task.title}
        </h3>
        <div className="flex gap-2 ml-2">
          <button
            onClick={() => onEdit(task)}
            className="text-blue-600 hover:text-blue-800 p-1"
            title="Edit task"
          >
            <Edit2 size={16} />
          </button>
          <button
            onClick={() => onDelete(task)}
            className="text-red-600 hover:text-red-800 p-1"
            title="Delete task"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {task.description && (
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {task.description}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mb-3">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
          {task.status.replace('-', ' ')}
        </span>
        <span className={`flex items-center gap-1 text-xs font-medium ${getPriorityColor(task.priority)}`}>
          <Flag size={12} />
          {task.priority}
        </span>
      </div>

      {task.due_date && (
        <div className="flex items-center gap-1 text-xs text-gray-500">
          <Calendar size={12} />
          Due: {format(new Date(task.due_date), 'MMM dd, yyyy')}
        </div>
      )}

      <div className="text-xs text-gray-400 mt-2">
        Created: {format(new Date(task.created_at), 'MMM dd, yyyy')}
      </div>
    </div>
  );
};

export default TaskCard;
