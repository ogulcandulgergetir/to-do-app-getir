import { TODOITEM_START, TODOITEM_SUCCESS, TODOITEM_FAIL, TODOITEM_RESET } from "../actions/actionTypes";
import { updateObject } from "../utility";


const initialState = {
  todoItem: [],
  error: null,
  loading: false,
};

const todoItemStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const todoItemSuccess = (state, action) => {
  return updateObject(state, {
    todoItem: action.data[0],
    error: null,
    loading: false,
  });
};

const todoItemFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    todoItem: [],
  });
};

const todoItemReset = (state, action) => {
  return updateObject(state, {
    todoItem: [],
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOITEM_START:
      return todoItemStart(state, action);
    case TODOITEM_SUCCESS:
      return todoItemSuccess(state, action);
    case TODOITEM_FAIL:
      return todoItemFail(state, action);
    case TODOITEM_RESET:
      return todoItemReset(state, action);
    default:
      return state;
  }
};

export default reducer;
