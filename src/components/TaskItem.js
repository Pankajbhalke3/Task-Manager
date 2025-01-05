import React from 'react';

function TaskItem({ task, onDelete, onComplete, onEdit }) {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">
          {task.completed ? <s>{task.title}</s> : task.title}
        </h5>
        <p className="card-text">{task.description}</p>
        <p className="card-text">
          <small>Due: {task.dueDate}</small>
        </p>
        <button className="btn btn-success me-2" onClick={onComplete}>
          {task.completed ? 'Undo' : 'Mark as Completed'}
        </button>
        <button className="btn btn-warning me-2" onClick={onEdit}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskItem;