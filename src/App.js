import React, { useState, useEffect } from 'react';
import AddTask from './components/Addtask';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const completeTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (index) => {
    setEditIndex(index);
  };

  const updateTask = (task) => {
    setTasks(tasks.map((t, i) => (i === editIndex ? task : t)));
    setEditIndex(null);
  };

  return (
    <div className="container my-4">
      <h1 className="text-center">Task Manager</h1>
      <AddTask onAdd={addTask} />
      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onComplete={completeTask}
        onEdit={editTask}
      />
      {editIndex !== null && (
        <div>
          {/* EditTask component can be used here to edit */}
        </div>
      )}
    </div>
  );
}

export default App;