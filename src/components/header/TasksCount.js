import './TasksCount.scss';

export default function TasksCount(props) {
  return (
    <p className="task-count">
      {`${props.tasksCount} ${props.tasksCount === 1 ? `task` : 'tasks'}`}
    </p>
  );
}
