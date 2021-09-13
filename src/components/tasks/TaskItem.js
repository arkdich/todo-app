export default function TaskItem(props) {
  return (
    <li className="task-wrapper__item">
      <input type="checkbox" className="task-wrapper__check" />
      <p className="task-wrapper__value">{props.value}</p>
    </li>
  );
}
