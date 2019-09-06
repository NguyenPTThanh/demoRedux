import * as types from './../contans/ActionTypes';


export const listAll = () => {
  return {
     type : types.LIST_ALL 
  }
    
};
export const addTask = (task) => {
  return {
    type : types.ADD_TASK ,
    task 
  }
};

export const toggleForm = ()=>{
  return {
    type : types.TOGGLE_FORM
  }
}
export const openForm = ()=>{
  return {
    type : types.OPEN_FORM
  }
}
export const closeForm = () => {
  return {
    type : types.CLOSE_FORM
  }
}
export const deleteTask = (id) => {
  return {
    type : types.DELETE_TASK ,
    //tra ve tham so 
    id : id
  }
}
export const editTask = (item) => {
  return {
    type : types.EDIT_TASK , 
    item : item 
  }
}
export const searchTask = (keyword) =>{
  return {
    type : types.SEARCH ,
    keyword : keyword ,
  }
}

export const sortTask = (sort)=>{
  return {
    type : types.SORT ,
    sort  : sort , //sort by , sort value
  }
}