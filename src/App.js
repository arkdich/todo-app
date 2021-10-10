import { Fragment, useEffect } from 'react';
import Header from './components/header/Header';
import TaskForm from './components/taskForm/TaskForm';
import TaskWrapper from './components/tasks/TaskWrapper';
import Footer from './components/footer/Footer';
import { useDispatch } from 'react-redux';
import { tasksThunk } from './store/tasksSlice';
import ReactDOM from 'react-dom';
import './App.scss';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tasksThunk.fetchTasks());
  }, [dispatch]);

  return (
    <Fragment>
      <Header />
      <TaskForm />
      <TaskWrapper />
      {ReactDOM.createPortal(<Footer />, document.querySelector('.footer'))}
    </Fragment>
  );
}
