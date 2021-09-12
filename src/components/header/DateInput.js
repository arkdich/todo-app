import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateInput.scss';

export default function DateInput(props) {
  const [isOpened, setIsOpened] = useState(false);

  const toggleDatePickerHandler = () => {
    setIsOpened(!isOpened);
  };

  const dateChangeHandler = (date) => {
    props.onSelectDate(date);

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
                selected={new Date(props.date)}
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
