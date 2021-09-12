import { useState } from 'react';
import './TaskForm.scss';

export default function TaskForm(props) {
  const [inputValue, setInputValue] = useState('');

  const formSubmitHandler = (ev) => {
    ev.preventDefault();

    const newTask = {
      date: props.date,
      value: inputValue,
      isDone: false,
    };

    props.onFormSubmit(newTask);
    setInputValue('');
  };

  const inputChangeHandler = (ev) => {
    setInputValue(ev.target.value);
  };

  return (
    <form className="task-form" onSubmit={formSubmitHandler}>
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
