import './TasksCount.scss';
import PropTypes from 'prop-types';

export default function TasksCount(props) {
  return (
    <p className="task-count">
      {`${props.count} ${props.count === 1 ? `task` : 'tasks'}`}
    </p>
  );
}

TasksCount.propTypes = {
  count: PropTypes.number,
};
