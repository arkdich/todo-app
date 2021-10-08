import taskStorage from '../assets/js/classes/TasksDb';

const initialState = {
  isLoaded: false,
  isEditing: false,
  date: new Date().toDateString(),
  items: [],
};

const tasksActions = {
  setIsLoaded(payload) {
    return { type: 'tasks/setIsLoaded', payload };
  },
  setIsEditing(payload) {
    return { type: 'tasks/setIsEditing', payload };
  },
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
  if (type === 'tasks/setIsLoaded') {
    return { ...state, isLoaded: payload };
  }

  if (type === 'tasks/setIsEditing') {
    if (payload) return { ...state, isEditing: payload };

    return { ...state, isEditing: !state.isEditing };
  }

  if (type === 'tasks/setItems') {
    return {
      ...state,
      isEditing: false,
      isLoaded: true,
      date: payload.date,
      items: payload.tasks,
    };
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
      const taskDate = date ? date : getState().tasks.date;

      dispatch(tasksActions.setIsLoaded(false));

      const tasks = await taskStorage.getTasks(taskDate);

      dispatch(tasksActions.setItems({ date: taskDate, tasks }));

      return tasks;
    };
  },
};

export { tasksActions, tasksThunk, tasksReducer };
