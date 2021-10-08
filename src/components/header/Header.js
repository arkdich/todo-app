import './Header.scss';
import CurrentDate from './CurrentDate';
import DateInput from './DateInput';
import TasksCount from './TasksCount';
import { useSelector } from 'react-redux';

export default function Header(props) {
  const tasksCount = useSelector((state) => state.tasks.items.length);
  // const dateSelectionHandler = async (rawDate) => {
  //   const date = new Date(rawDate).toDateString();
  //   const selectedTasks = await props.taskStorage.getTasks(date);

  //   props.onSelectDate(date, selectedTasks);
  // };

  return (
    <div className="header">
      <CurrentDate />
      <TasksCount count={tasksCount} />
      {tasksCount !== 0 && (
        <button
          type="button"
          className="toggle-deletion"
          // onClick={() => props.onEdit()}
        ></button>
      )}
      <DateInput />
    </div>
  );
}
