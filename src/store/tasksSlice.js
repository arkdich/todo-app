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
    return { ...state, items: [...state.items, payload] };
  }

  if (type === 'tasks/updateItem') {
    return {
      ...state,
      items: state.items.map((item) => {
        if (item.id === payload.id) return { ...item, isDone: payload.isDone };

        return { ...item };
      }),
    };
  }

  if (type === 'tasks/deleteItem') {
    return {
      ...state,
      items: state.items.filter((item) => item.id !== payload),
    };
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
  addTask(task) {
    return async function AddTaskThunk(dispatch) {
      const id = await taskStorage.storeTask(task);

      dispatch(tasksActions.addItem({ id, ...task }));
    };
  },
  updateTask(payload) {
    return async function AddTaskThunk(dispatch) {
      await taskStorage.updateTask(payload.id, { isDone: payload.isDone });

      dispatch(
        tasksActions.updateItem({ id: payload.id, isDone: payload.isDone })
      );
    };
  },
  deleteTask(id) {
    return async function AddTaskThunk(dispatch) {
      await taskStorage.deleteTask(id);

      dispatch(tasksActions.deleteItem(id));
    };
  },
};

export { tasksActions, tasksThunk, tasksReducer };
