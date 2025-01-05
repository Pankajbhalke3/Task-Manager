import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete, onComplete, onEdit }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onDelete={() => onDelete(index)}
          onComplete={() => onComplete(index)}
          onEdit={() => onEdit(index)}
        />
      ))}
    </div>
  );
}

export default TaskList;