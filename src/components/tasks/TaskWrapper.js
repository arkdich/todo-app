import TaskItem from './TaskItem';
import './TaskWrapper.scss';
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

export default function TaskWrapper() {
  const tasks = useSelector((state) => state.tasks.items);
  const isLoaded = useSelector((state) => state.tasks.isLoaded);
  const isEditing = useSelector((state) => state.tasks.isEditing);

  const classString = `task-wrapper ${isEditing ? 'task-wrapper_editing' : ''}`;

  const tasksWrapper = useRef();

  useEffect(() => {
    const wrapper = tasksWrapper.current;

    if (!wrapper) return;

    const contentHeight = Array.from(wrapper.childNodes).reduce(
      (acc, curr) => (acc += curr.scrollHeight),
      0
    );

    const computedStyle = getComputedStyle(wrapper);

    wrapper.style.height =
      contentHeight +
      Number.parseInt(computedStyle.paddingTop) +
      Number.parseInt(computedStyle.paddingBottom) +
      'px';
  });

  return (
    <ul ref={tasksWrapper} className={classString}>
      {!isLoaded && <div className="loading-gif"></div>}
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          value={task.value}
          isDone={task.isDone}
          isEditing={isEditing}
        />
      ))}
    </ul>
  );
}
