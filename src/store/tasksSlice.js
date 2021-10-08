import taskStorage from '../assets/js/classes/TasksDb';

const initialState = {
  date: new Date().toDateString(),
  items: [],
};

const tasksActions = {
  setItems(payload) {
    return { type: 'tasks/setItems', payload };
  },
  addItem(payload) {
    return { type: 'tasks/addItem', payload };
  },
  updateItem(payload) {
    return { type: 'tasks/updateItem', payload };
  },
  deleteItem(payload) {
    return { type: 'tasks/deleteItem', payload };
  },
};

function tasksReducer(state = initialState, { type, payload }) {
  if (type === 'tasks/setItems') {
    return { date: payload.date, tasks: payload.tasks };
  }

  if (type === 'tasks/addItem') {
  }

  if (type === 'tasks/updateItem') {
  }

  if (type === 'tasks/deleteItem') {
  }

  return state;
}

const tasksThunk = {
  fetchTasks(date) {
    return async function fetchTasksThunk(dispatch, getState) {
      let tasskDate = date;

      if (!tasskDate) tasskDate = getState().tasks.date;

      const tasks = await taskStorage.getTasks(tasskDate);

      dispatch(tasksActions.setItems({ date: tasskDate, tasks }));

      return tasks;
    };
  },
};

export { tasksActions, tasksThunk, tasksReducer };
