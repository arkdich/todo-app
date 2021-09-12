import { useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import './App.scss';
import Header from './components/header/Header';
import TaskForm from './components/header/TaskForm';

export default function App(props) {
  const taskStorage = props.storage;

  const [currentDate, setCurrentDate] = useState(new Date().toDateString());
  const [tasksCount, setTasksCount] = useState(props.tasks.length);
  const [selectedDateTasks, setSelectedDateTasks] = useState(props.tasks);

  const formSubmissionHandler = (task) => {
    taskStorage.storeTask(task);

    setSelectedDateTasks((prev) => [...prev, task]);
    setTasksCount(tasksCount + 1);
  };

  console.log(selectedDateTasks);

  return (
    <Fragment>
      <Header
        tasks={selectedDateTasks}
        onAddNewTask={setSelectedDateTasks}
        storage={taskStorage}
        date={currentDate}
        onSetDate={setCurrentDate}
        onSetTaskCount={setTasksCount}
        tasksCount={tasksCount}
      />
      <TaskForm onFormSubmit={formSubmissionHandler} date={currentDate} />
    </Fragment>
  );
}
