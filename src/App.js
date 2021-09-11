import { Fragment } from 'react/cjs/react.production.min';
import './App.scss';
import Header from './components/header/Header';
import TaskForm from './components/header/TaskForm';

export default function App() {
  return (
    <Fragment>
      <Header />
      <TaskForm />
    </Fragment>
  );
}
