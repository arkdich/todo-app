import './Header.scss';
import CurrentDate from './CurrentDate';
import DateInput from './DateInput';
import TaskCount from './TaskCount';

export default function Header(props) {
  const dateSelectionHandler = async (rawDate) => {
    const date = new Date(rawDate).toDateString();

    const selectedTasks = await props.storage.getTasks(date);

    props.onSetDate(date);
    props.onSetTaskCount(selectedTasks.length);

    props.onAddNewTask(selectedTasks);
  };

  return (
    <div className="header">
      <CurrentDate date={props.date} />
      <TaskCount tasksCount={props.tasksCount} />
      <DateInput date={props.date} onSelectDate={dateSelectionHandler} />
    </div>
  );
}
