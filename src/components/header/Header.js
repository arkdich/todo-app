import './Header.scss';
import CurrentDate from './CurrentDate';
import DateInput from './DateInput';
import TasksCount from './TasksCount';
import { useDispatch, useSelector } from 'react-redux';
import { tasksActions } from '../../store/tasksSlice';

export default function Header() {
  const tasksCount = useSelector((state) => state.tasks.items.length);
  const isDisabled = tasksCount === 0;

  const classString = `toggle-deletion ${
    isDisabled ? 'toggle-deletion_disabled' : ''
  }`;

  const dispatch = useDispatch();

  const toggleEditingHandler = () => {
    dispatch(tasksActions.setIsEditing());
  };

  return (
    <div className="header">
      <CurrentDate />
      <TasksCount count={tasksCount} />
      <button
        type="button"
        className={classString}
        disabled={isDisabled}
        onClick={toggleEditingHandler}
      ></button>
      <DateInput />
    </div>
  );
}
