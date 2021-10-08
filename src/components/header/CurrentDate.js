import { useSelector } from 'react-redux';
import './CurrentDate.scss';

export default function CurrentDate() {
  const date = useSelector((state) => state.tasks.date);

  const dateString = new Intl.DateTimeFormat(navigator.language, {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  }).format(new Date(date));

  return <h1 className="current-date">{dateString}</h1>;
}
