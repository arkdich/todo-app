import TaskItem from './TaskItem';
import PropTypes from 'prop-types';
import './TaskWrapper.scss';
import { useSelector } from 'react-redux';

function TaskWrapper(props) {
  const tasks = useSelector((state) => state.tasks.items);

  const classString = `task-wrapper ${
    props.isEditing ? 'task-wrapper_editing' : ''
  }`;

  // const taskDeleteHandler = (ev) => {
  //   if (!ev.target.matches('.task-wrapper__delete')) return;

  //   const taskItem = ev.target.closest('.task-wrapper__item');
  //   const taskInput = taskItem.querySelector('.task-wrapper__check');

  //   const taskId = Number(taskInput.id.slice(10));

  //   props.onItemDelete(taskId);
  // };

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

export default TaskWrapper;
