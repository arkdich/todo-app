import { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateInput.scss';
import { useSelector, useDispatch } from 'react-redux';
import { tasksThunk } from '../../store/tasksSlice';
import PropTypes from 'prop-types';

export default function DateInput() {
  const [isOpen, setIsOpen] = useState(false);
  const date = useSelector((state) => state.tasks.date);

  const dispatch = useDispatch();

  const toggleDatePickerHandler = () => {
    setIsOpen((state) => !state);
  };

  const dateChangeHandler = async (rawDate) => {
    toggleDatePickerHandler();

    const date = new Date(rawDate).toDateString();
    dispatch(tasksThunk.fetchTasks(date));
  };

  return (
    <Fragment>
      <button
        className="datepicker-toggle"
        onClick={toggleDatePickerHandler}
      ></button>
      {isOpen &&
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

DateInput.propTypes = {
  onTasksEdit: PropTypes.func,
};
