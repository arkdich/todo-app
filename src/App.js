import { Fragment } from 'react/cjs/react.production.min';
import './App.scss';
import CurrentDate from './components/header/CurrentDate';
import TaskCount from './components/header/TaskCount';
import TaskForm from './components/header/TaskForm';

export default function App() {
  return (
    <Fragment>
      <div className="header">
        <CurrentDate />
        <TaskCount />
      </div>
      <TaskForm />
    </Fragment>
  );
}
