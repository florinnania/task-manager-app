import React, { useEffect, useState } from 'react';
 
interface Task {
  id: number;
  title: string;
  completed: boolean;
}
 
const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
 
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('/api/tasks');
      const data = await response.json();
      setTasks(data);
      setLoading(false);
    };
    fetchTasks();
  }, []);
 
  const markTaskComplete = async (id: number) => {
    await fetch(`/api/tasks/${id}/complete`, { method: 'PUT' });
    tasks.map(task =>
      task.id === id ? { ...task, completed: true } : task
    );
  };
 
  if (loading) {
    return <div>Loading...</div>;
  }
 
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title}
          </span>
          {!task.completed && <button onClick={() => markTaskComplete(task.id)}>Complete</button>}
        </li>
      ))}
    </ul>
  );
};
 
export default TaskList;
