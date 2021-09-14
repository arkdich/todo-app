import { useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import './App.scss';
import Header from './components/header/Header';
import TaskForm from './components/taskForm/TaskForm';
import TaskWrapper from './components/tasks/TaskWrapper';

export default function App(props) {
  const [isEditing, setIsEditing] = useState(false);
  const taskStorage = props.storage;

  const [appState, setAppState] = useState({
    selectedDate: new Date().toDateString(),
    selectedDateTasks: props.tasks,
    tasksCount: props.tasks.length,
  });

  const addNewTaskHandler = async (task) => {
    const taskId = await taskStorage.storeTask(task);

    setAppState((old) => ({
      selectedDate: old.selectedDate,
      selectedDateTasks: [...old.selectedDateTasks, { ...task, id: taskId }],
      tasksCount: old.tasksCount + 1,
    }));
  };

  const deleteTaskHandler = (taskId) => {
    taskStorage.deleteTask(taskId);

    setAppState((old) => ({
      selectedDate: old.selectedDate,
      selectedDateTasks: appState.selectedDateTasks.filter(
        (task) => task.id !== taskId
      ),
      tasksCount: old.tasksCount - 1,
    }));

    if (appState.tasksCount - 1 === 0) setIsEditing(false);
  };

  const dateSelectionHandler = (date, selectedTasks) => {
    setAppState({
      selectedDate: date,
      selectedDateTasks: selectedTasks,
      tasksCount: selectedTasks.length,
    });
  };

  const taskEditHandler = () => {
    setIsEditing(!isEditing);
  };

  console.log(appState.selectedDateTasks);
  return (
    <Fragment>
      <Header
        taskStorage={taskStorage}
        tasks={appState.selectedDateTasks}
        tasksCount={appState.tasksCount}
        date={appState.selectedDate}
        onSelectDate={dateSelectionHandler}
        onEdit={taskEditHandler}
      />
      <TaskForm onFormSubmit={addNewTaskHandler} date={appState.selectedDate} />
      <TaskWrapper
        isEditing={isEditing}
        tasks={appState.selectedDateTasks}
        onItemUpdate={taskStorage.updateTask.bind(taskStorage)}
        onItemDelete={deleteTaskHandler}
      />
    </Fragment>
  );
}
