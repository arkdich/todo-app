import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import TaskStorage from './assets/js/classes/TasksDb';

const taskStorage = new TaskStorage();

taskStorage.getTasks(new Date().toDateString()).then((tasks) => {
  ReactDOM.render(
    <React.StrictMode>
      <App storage={taskStorage} tasks={tasks} />
    </React.StrictMode>,
    document.querySelector('.app')
  );
});
