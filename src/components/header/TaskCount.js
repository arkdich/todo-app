import './TaskCount.scss';

export default function TaskCount(props) {
  return (
    <p className="task-count">
      {props.tasksCount} {props.tasksCount === 1 ? `task` : 'tasks'}
    </p>
  );
}
