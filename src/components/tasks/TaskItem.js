import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasksThunk } from '../../store/tasksSlice';
import PropTypes from 'prop-types';

export default function TaskItem(props) {
  const [isChecked, setIsChecked] = useState(props.isDone);

  const dispatch = useDispatch();

  const taskUpdateHandler = () => {
    setIsChecked((state) => !state);

    dispatch(tasksThunk.updateTask({ id: props.id, isDone: !isChecked }));
  };

  const taskDeleteHandler = () => {
    dispatch(tasksThunk.deleteTask(props.id));
  };

  return (
    <li className="task-wrapper__item">
      <input
        type="checkbox"
        checked={isChecked}
        id={`task-item-${props.id}`}
        className="task-wrapper__check"
        onChange={taskUpdateHandler}
      ></input>
      <label htmlFor={`task-item-${props.id}`} className="task-wrapper__value">
        {props.value}
      </label>
      <button
        className="task-wrapper__delete"
        onClick={taskDeleteHandler}
      ></button>
    </li>
  );
}

TaskItem.propTypes = {
  id: PropTypes.number,
  value: PropTypes.string,
  isDone: PropTypes.bool,
};
