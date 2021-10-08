const initialState = {
  date: new Date().toDateString(),
  items: [],
};

function todosReducer(state = initialState, action) {
  if ((action.type = 'todos/getItems')) {
  }

  if ((action.type = 'todos/addItem')) {
  }

  if ((action.type = 'todos/updateItem')) {
  }

  if ((action.type = 'todos/deleteItem')) {
  }

  return state;
}

const todosActions = {
  getItems(payload) {
    return { type: 'todos/getItems', payload };
  },
  addItem(payload) {
    return { type: 'todos/addItem', payload };
  },
  updateItem(payload) {
    return { type: 'todos/updateItem', payload };
  },
  deleteItem(payload) {
    return { type: 'todos/deleteItem', payload };
  },
};

export { todosReducer, todosActions };
