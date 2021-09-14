import { useState } from 'react';
import './TaskForm.scss';

export default function TaskForm(props) {
  const [inputValue, setInputValue] = useState('');

  const inputChangeHandler = (ev) => {
    setInputValue(ev.target.value);
  };

  const formSubmissionHandler = (ev) => {
    ev.preventDefault();

    if (inputValue.trim() === '') return;

    const newTask = {
      date: props.date,
      value: inputValue.trim(),
      isDone: false,
    };

    props.onFormSubmit(newTask);
    setInputValue('');
  };

  return (
    <form className="task-form" onSubmit={formSubmissionHandler}>
      <input
        value={inputValue}
        className="task-form__input"
        onChange={inputChangeHandler}
      />
      <button className="task-form__submit" type="submit">
        +
      </button>
    </form>
  );
}
