import './Header.scss';
import CurrentDate from './CurrentDate';
import DateInput from './DateInput';
import TasksCount from './TasksCount';

export default function Header(props) {
  const dateSelectionHandler = async (rawDate) => {
    const date = new Date(rawDate).toDateString();

    const selectedTasks = await props.taskStorage.getTasks(date);

    props.onSetDate(date);
    props.onSetTasksCount(selectedTasks.length);
    props.onSetSelectedTasks(selectedTasks);
  };

  return (
    <div className="header">
      <CurrentDate date={props.date} />
      <TasksCount tasksCount={props.tasksCount} />
      <DateInput date={props.date} onSelectDate={dateSelectionHandler} />
    </div>
  );
}
