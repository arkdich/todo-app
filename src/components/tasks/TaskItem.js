import { useState } from 'react';

export default function TaskItem(props) {
  const [isChecked, setIsChecked] = useState(props.isDone);

  const taskUpdateHandler = () => {
    setIsChecked(!isChecked);
    props.onTaskUpdate(props.id, { isDone: !isChecked });
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
      <button className="task-wrapper__delete"></button>
    </li>
  );
}
