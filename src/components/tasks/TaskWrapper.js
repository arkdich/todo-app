import TaskItem from './TaskItem';
import PropTypes from 'prop-types';
import './TaskWrapper.scss';
import { useSelector } from 'react-redux';

export default function TaskWrapper(props) {
  const tasks = useSelector((state) => state.tasks.items);

  const classString = `task-wrapper ${
    props.isEditing ? 'task-wrapper_editing' : ''
  }`;

  return (
    <ul className={classString}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          value={task.value}
          isDone={task.isDone}
          isEditing={props.isEditing}
          // onTaskUpdate={props.onItemUpdate}
        />
      ))}
    </ul>
  );
}

TaskWrapper.propTypes = {
  isEditing: PropTypes.bool,
};
