import './CurrentDate.scss';

export default function CurrentDate(props) {
  const dateString = new Intl.DateTimeFormat(navigator.language, {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
  }).format(new Date(props.date));

  return <h1 className="current-date">{dateString}</h1>;
}
