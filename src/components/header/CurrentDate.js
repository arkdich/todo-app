import './CurrentDate.scss';

export default function CurrentDate() {
  const dateString = new Intl.DateTimeFormat(navigator.language, {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  }).format(new Date());

  return <h2 className="current-date">{dateString}</h2>;
}
