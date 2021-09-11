import './CurrentDate.scss';

export default function CurrentDate(props) {
  const dateString = new Intl.DateTimeFormat(navigator.language, {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  }).format(props.date);

  return <h2 className="current-date">{dateString}</h2>;
}
