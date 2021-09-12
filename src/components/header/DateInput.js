import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateInput.scss';

export default function DateInput(props) {
  const [isOpened, setIsOpen] = useState(false);

  const toggleDatePickerhandler = () => {
    setIsOpen(!isOpened);
  };

  const dateChangeHandler = (date) => {
    props.onSelectDate(date);

    toggleDatePickerhandler();
  };

  return (
    <div className="datepicker">
      <button
        className="datepicker__toggle"
        onClick={toggleDatePickerhandler}
      ></button>
      <div className="datepicker-container">
        {isOpened && (
          <ReactDatePicker
            inline
            selected={new Date(props.date)}
            onChange={dateChangeHandler}
            onClickOutside={(ev) =>
              ev.target.matches('.datepicker__toggle') ||
              toggleDatePickerhandler()
            }
          />
        )}
      </div>
    </div>
  );
}
