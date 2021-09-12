import { useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import './App.scss';
import Header from './components/header/Header';
import TaskForm from './components/taskForm/TaskForm';

export default function App(props) {
  const taskStorage = props.storage;

  const [selectedDate, setselectedDate] = useState(new Date().toDateString());
  const [selectedDateTasks, setSelectedDateTasks] = useState(props.tasks);
  const [tasksCount, setTasksCount] = useState(props.tasks.length);

  const addNewTaskHandler = (task) => {
    taskStorage.storeTask(task);

    setSelectedDateTasks((prev) => [...prev, task]);
    setTasksCount(tasksCount + 1);
  };

  console.log(selectedDateTasks);

  return (
    <Fragment>
      <Header
        taskStorage={taskStorage}
        tasks={selectedDateTasks}
        tasksCount={tasksCount}
        date={selectedDate}
        onSetDate={setselectedDate}
        onSetTasksCount={setTasksCount}
        onSetSelectedTasks={setSelectedDateTasks}
      />
      <TaskForm onFormSubmit={addNewTaskHandler} date={selectedDate} />
    </Fragment>
  );
}
