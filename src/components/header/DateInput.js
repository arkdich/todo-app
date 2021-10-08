import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateInput.scss';
import { useSelector, useDispatch } from 'react-redux';
import { tasksThunk } from '../../store/tasksSlice';

export default function DateInput(props) {
  const [isOpened, setIsOpened] = useState(false);

  const date = useSelector((state) => state.tasks.date);
  const dispatch = useDispatch();

  const toggleDatePickerHandler = () => {
    setIsOpened((state) => !state);
  };

  const dateChangeHandler = async (date) => {
    await dispatch(tasksThunk.fetchTasks(date));

    toggleDatePickerHandler();
  };

  return (
    <Fragment>
      <button
        className="datepicker-toggle"
        onClick={toggleDatePickerHandler}
      ></button>
      {isOpened &&
        ReactDOM.createPortal(
          <Fragment>
            <div className="datepicker-container">
              <ReactDatePicker
                inline
                selected={new Date(date)}
                onChange={dateChangeHandler}
                onClickOutside={toggleDatePickerHandler}
              />
            </div>
            <div className="overlay"></div>
          </Fragment>,
          document.querySelector('.datepicker-root')
        )}
    </Fragment>
  );
}
