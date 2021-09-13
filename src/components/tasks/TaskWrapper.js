import TaskItem from './TaskItem';
import './TaskWrapper.scss';

export default function TaskWrapper(props) {
  const classString =
    'task-wrapper' + (props.isEditing ? ' task-wrapper_editing' : '');

  return (
    <ul className={classString}>
      {props.tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          value={task.value}
          isDone={task.isDone}
          isEditing={props.isEditing}
          onTaskUpdate={props.onItemUpdate}
          onTaskDelete={props.onItemDelete}
        />
      ))}
    </ul>
  );
}
