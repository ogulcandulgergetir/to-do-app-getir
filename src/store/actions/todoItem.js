import { TODOITEM_START, TODOITEM_SUCCESS, TODOITEM_FAIL, TODOITEM_RESET, TODOITEM_TOGGLE } from "./actionTypes";
import axios from "axios";


export const todoItemStart = () => {
  return {
    type: TODOITEM_START
  };
};

export const todoItemSuccess = data => {
  return {
    type: TODOITEM_SUCCESS,
    data
  };
};

export const todoItemToggle = data => {
  return {
    type: TODOITEM_TOGGLE,
    data
  };
};

export const todoItemFail = error => {
  return {
    type: TODOITEM_FAIL,
    error: error
  };
};

export const todoItemReset = () => {
  return {
    type: TODOITEM_RESET
  };
};

export const fetchTodoItem = () => {
  return dispatch => {
    dispatch(todoItemStart());
    axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then(res => {
      dispatch(todoItemSuccess(res.data.slice(0,5)));
    })
    .catch(err => {
      dispatch(todoItemFail(err));
    });
    
  };
};


export const addTodoItem = (item, lastID) => {
  return dispatch => {
    dispatch(todoItemStart());
    dispatch(todoItemSuccess([{ 'id': lastID + 1, 'title': item, 'completed': false}]));    
  };
};


export const toggleTodoItem = (index) => {
  return dispatch => {
    dispatch(todoItemStart());
    dispatch(todoItemToggle(index));    
  };
};

