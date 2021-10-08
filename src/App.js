import { useState, Fragment, useEffect } from 'react';
import Header from './components/header/Header';
import TaskForm from './components/taskForm/TaskForm';
import TaskWrapper from './components/tasks/TaskWrapper';
import Footer from './components/footer/Footer';
import { useDispatch } from 'react-redux';
import { tasksThunk } from './store/tasksSlice';

export default function App(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [isFetched, setIsFetched] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const selectedTasks = await dispatch(tasksThunk.fetchTasks());
      setIsFetched(true);
      console.log(selectedTasks);
    })();
  }, [dispatch]);

  // const [appState, setAppState] = useState({
  //   selectedDate: new Date().toDateString(),
  //   selectedDateTasks: props.tasks,
  //   tasksCount: props.tasks.length,
  // });

  // const addNewTaskHandler = async (task) => {
  //   const taskId = await taskStorage.storeTask(task);

  //   setAppState((old) => ({
  //     selectedDate: old.selectedDate,
  //     selectedDateTasks: [...old.selectedDateTasks, { ...task, id: taskId }],
  //     tasksCount: old.tasksCount + 1,
  //   }));
  // };

  // const deleteTaskHandler = (taskId) => {
  //   taskStorage.deleteTask(taskId);

  //   setAppState((old) => ({
  //     selectedDate: old.selectedDate,
  //     selectedDateTasks: appState.selectedDateTasks.filter(
  //       (task) => task.id !== taskId
  //     ),
  //     tasksCount: old.tasksCount - 1,
  //   }));

  //   if (appState.tasksCount - 1 === 0) setIsEditing(false);
  // };

  // const dateSelectionHandler = (date, selectedTasks) => {
  //   setAppState({
  //     selectedDate: date,
  //     selectedDateTasks: selectedTasks,
  //     tasksCount: selectedTasks.length,
  //   });
  // };

  const taskEditHandler = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Fragment>
      {/* <Header onEdit={taskEditHandler} />
      <TaskForm />
      {isFetched && <TaskWrapper isEditing={isEditing} />}
      <Footer /> */}
    </Fragment>
  );
}
