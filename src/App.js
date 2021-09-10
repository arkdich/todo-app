import './App.css';
import CurrentDate from './components/header/CurrentDate';
import TaskCount from './components/header/TaskCount';
import TaskForm from './components/header/TaskForm';

export default function App() {
  return (
    <div className="app">
      <div className="header">
        <CurrentDate />
        <TaskCount />
        <TaskForm />
      </div>
    </div>
  );
}
