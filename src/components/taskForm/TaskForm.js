import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tasksThunk } from '../../store/tasksSlice';
import './TaskForm.scss';

export default function TaskForm() {
  const [inputValue, setInputValue] = useState('');
  const date = useSelector((state) => state.tasks.date);

  const dispatch = useDispatch();

  const inputChangeHandler = (ev) => {
    setInputValue(ev.target.value);
  };

  const formSubmissionHandler = (ev) => {
    ev.preventDefault();

    if (inputValue.trim() === '') return;

    dispatch(
      tasksThunk.addTask({
        date,
        value: inputValue.trim(),
        isDone: false,
      })
    );

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
