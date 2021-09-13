import TaskItem from './TaskItem';
import './TaskWrapper.scss';

export default function TaskWrapper(props) {
  return (
    <ul className="task-wrapper">
      {props.tasks.map((task) => (
        <TaskItem
          onTaskUpdate={props.onItemUpdate}
          key={task.id}
          id={task.id}
          value={task.value}
          isDone={task.isDone}
        />
      ))}
    </ul>
  );
}
