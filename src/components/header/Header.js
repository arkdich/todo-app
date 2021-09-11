import './Header.scss';
import { useState } from 'react';
import CurrentDate from './CurrentDate';
import DateInput from './DateInput';
import TaskCount from './TaskCount';

export default function Header(props) {
  const [currentDate, setCurrentDate] = useState(
    new Date(new Date().toDateString())
  );

  return (
    <div className="header">
      <CurrentDate date={currentDate} />
      <TaskCount tasksCount={props.tasks.length} />
      <DateInput date={currentDate} onSelectDate={setCurrentDate} />
    </div>
  );
}
