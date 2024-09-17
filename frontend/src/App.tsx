import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskList />
    </div>
  );
};

export default App;

