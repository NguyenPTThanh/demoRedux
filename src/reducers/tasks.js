import * as types from '../contans/ActionTypes';
import dataItem from '../dataItem';
import randomstring from 'randomstring';

//index chính của reducer , 

//data
var initialState = dataItem;

var findIndex = (data, id) => {
    var index = -1;
    data.forEach((item, i) => {
        if (item.id === id) {
            index = i;
        }
    })
    return index;
}


var tasks = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            var newTask = {
                id: action.task.id,
                name: action.task.name,
                email: action.task.email,
                level: action.task.level,
            };
            if (!newTask.id) {  //nếu không có id 
                //console.log(randomstring.generate());
                //newItem.id = randomstring.generate(),
                newTask.id = randomstring.generate();
                    state.push(newTask);
            } else {
                //edit
                index = findIndex(state, newTask.id);
                state[index] = newTask;

            }
            //id: randomstring.generate(),
            //console.log(newItem) ;
            //push  vào task mới  .
            //state.push(newItem);
            //lưu lên localStorage ,..
            //lúc khai báo state thì ra object , ép kiểu string thì ép lại JSON.stringify(state) 
            localStorage.setItem('task', JSON.stringify(state));

            //coppy array mới và trả về 
            return [...state];
        case types.DELETE_TASK:
            var id = action.id;
            var index = findIndex(state, id);
            //console.log(action);
            // state.splice(  index , 1 );
            localStorage.setItem('task', JSON.stringify(state));
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1),

            ];
        default:
            return state;
    }
}
export default tasks;