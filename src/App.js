import { Fragment, useEffect } from 'react';
import Header from './components/header/Header';
import TaskForm from './components/taskForm/TaskForm';
import TaskWrapper from './components/tasks/TaskWrapper';
import Footer from './components/footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { tasksThunk } from './store/tasksSlice';
import './App.scss';

export default function App() {
  const isLoaded = useSelector((state) => state.tasks.isLoaded);
  const isEditing = useSelector((state) => state.tasks.isEditing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tasksThunk.fetchTasks());
  }, [dispatch]);

  const tasksContainer = isLoaded ? (
    <TaskWrapper isEditing={isEditing} />
  ) : (
    <div className="loading-gif"></div>
  );

  return (
    <Fragment>
      <Header />
      <TaskForm />
      {tasksContainer}
      <Footer />
    </Fragment>
  );
}
