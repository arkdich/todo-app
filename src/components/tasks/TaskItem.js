import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { tasksThunk } from '../../store/tasksSlice';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

export default function TaskItem(props) {
  const [isChecked, setIsChecked] = useState(props.isDone);
  const [isShown, setIsShown] = useState(true);

  const nodeRef = useRef();

  const dispatch = useDispatch();

  const taskUpdateHandler = () => {
    setIsChecked((state) => !state);

    dispatch(tasksThunk.updateTask({ id: props.id, isDone: !isChecked }));
  };

  const taskDeleteHandler = () => {
    setIsShown(false);
  };

  return (
    <Transition
      nodeRef={nodeRef}
      in={isShown}
      timeout={300}
      onExited={() => dispatch(tasksThunk.deleteTask(props.id))}
    >
      {() => {
        const deleteStyle = !isShown ? ' task-wrapper__item_deleting' : '';

        return (
          <li ref={nodeRef} className={'task-wrapper__item' + deleteStyle}>
            <input
              type="checkbox"
              checked={isChecked}
              id={`task-item-${props.id}`}
              className="task-wrapper__check"
              onChange={taskUpdateHandler}
            ></input>
            <label
              htmlFor={`task-item-${props.id}`}
              className="task-wrapper__value"
            >
              {props.value}
            </label>
            <button
              className="task-wrapper__delete"
              onClick={taskDeleteHandler}
            ></button>
          </li>
        );
      }}
    </Transition>
  );
}

TaskItem.propTypes = {
  id: PropTypes.number,
  value: PropTypes.string,
  isDone: PropTypes.bool,
};
