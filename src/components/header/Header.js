import './Header.scss';
import CurrentDate from './CurrentDate';
import DateInput from './DateInput';
import TasksCount from './TasksCount';

export default function Header(props) {
  const dateSelectionHandler = async (rawDate) => {
    const date = new Date(rawDate).toDateString();
    const selectedTasks = await props.taskStorage.getTasks(date);

    props.onSelectDate(date, selectedTasks);
  };

  return (
    <div className="header">
      <CurrentDate date={props.date} />
      <TasksCount tasksCount={props.tasksCount} />
      {props.tasksCount !== 0 && (
        <button
          type="button"
          className="toggle-deletion"
          onClick={() => props.onEdit()}
        ></button>
      )}
      <DateInput date={props.date} onSelectDate={dateSelectionHandler} />
    </div>
  );
}
