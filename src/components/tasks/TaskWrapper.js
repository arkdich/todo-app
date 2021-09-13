import TaskItem from './TaskItem';
import './TaskWrapper.scss';

export default function TaskWrapper(props) {
  return (
    <ul className="task-wrapper">
      {props.tasks.map((task) => (
        <TaskItem
          key={task.id ?? Math.random()}
          value={task.value}
          isDone={task.isDone}
        />
      ))}
    </ul>
  );
}
