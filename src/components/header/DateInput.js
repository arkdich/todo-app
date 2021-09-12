import { useState } from 'react';
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
    <div className="datepicker">
      <button
        className="datepicker__toggle"
        onClick={toggleDatePickerHandler}
      ></button>
      <div className="datepicker-container">
        {isOpened && (
          <ReactDatePicker
            inline
            selected={new Date(props.date)}
            onChange={dateChangeHandler}
            onClickOutside={(ev) =>
              ev.target.matches('.datepicker__toggle') ||
              toggleDatePickerHandler()
            }
          />
        )}
      </div>
    </div>
  );
}
