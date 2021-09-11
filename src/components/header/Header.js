import './Header.scss';
import { useState } from 'react';
import CurrentDate from './CurrentDate';
import DateInput from './DateInput';
import TaskCount from './TaskCount';

export default function Header() {
  const [currentDate, setCurrentDate] = useState(
    new Date(new Date().toDateString())
  );

  return (
    <div className="header">
      <CurrentDate date={currentDate} />
      <TaskCount />
      <DateInput date={currentDate} onSelectDate={setCurrentDate} />
    </div>
  );
}
