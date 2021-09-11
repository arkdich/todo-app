import { useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import './App.scss';
import Header from './components/header/Header';
import TaskForm from './components/header/TaskForm';

export default function App(props) {
  const taskStorage = props.storage;

  const [selectedDateTasks, setSelectedDateTasks] = useState(props.tasks);

  const formSubmissionHandler = (task) => {
    taskStorage.storeTask(task);

    setSelectedDateTasks((prev) => [...prev, task]);
  };

  console.log(selectedDateTasks);

  return (
    <Fragment>
      <Header tasks={selectedDateTasks} />
      <TaskForm onFormSubmit={formSubmissionHandler} />
    </Fragment>
  );
}
