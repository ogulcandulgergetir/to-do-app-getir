import { TODOITEM_START, TODOITEM_SUCCESS, TODOITEM_FAIL, TODOITEM_RESET } from "./actionTypes";
// import { getTodoItemURL } from '../../constants'
// import axios from "axios";


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
    console.log("fetcTodoItem")
    // axios
    // .post(getTodoItemURL, 
    //   {sort: sort,
    //   category: category},
    //   {headers: {
    //     Authorization: `Token ${localStorage.getItem("token")}`
    //   }   
    // }   
    // )
    // .then(res => {
    //   dispatch(todoItemSuccess(res.data));
    // })
    // .catch(err => {
    //   dispatch(todoItemFail(err));
    // });
    
  };
};

