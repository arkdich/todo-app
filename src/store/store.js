import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { tasksReducer } from './tasksSlice';

function reducer(state = {}, action) {
  return {
    tasks: tasksReducer(state.tasks, action),
  };
}

const enhancer = applyMiddleware(thunkMiddleware);

const store = createStore(reducer, enhancer);

export default store;
