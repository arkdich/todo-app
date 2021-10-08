import { createStore } from 'redux';
import { todosReducer } from './todosSlice';

function reducer(state = {}, action) {
  return {
    todos: todosReducer(state.todos, action),
  };
}

const store = createStore(reducer);

export default store;
