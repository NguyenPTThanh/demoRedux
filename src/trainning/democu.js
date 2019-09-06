//console.log("demo redux") ;
import { createStore } from 'redux';

var initialState = {
    level: false,
    sort: {
        by: 'name',
        value: -1,
    }
}

var myReducer = (state = initialState, action) => {
    // phân tích: các action gửi từ dispatch xuống reducer 
    if (action.type === 'TOGGLE_STATUS') {
        // khi phân tích xong thì  reducer cũng tạo ra state mới  
        state.level = !state.level;
    }
     
    if (action.type === 'SORT'){
        //console.log(action);
         var {by ,value} = action //by= action.by
         var {level} = state     
     // chức năng này k cập nhật vì chỉ cập nhật sort cũ 
         return {
             level : level ,
             sort : {
                 by : by ,   
                 value : value 
             }
         }

        // state.sort= {
        //     by : action.sort.by ,
        //     value :action.sort.value ,
        // }
        // đây return về state mới  : return state 
    }
    return state;
}

//tạo 1  store 
const store = createStore(myReducer);
console.log('default', store.getState());

// 1 . thực  hiện coog việc thay đổi status
//truyền action mới tạo xuống dispatch 
var action = { type: 'TOGGLE_STATUS' }
store.dispatch(action);
//getState() : trả về state defaut
console.log('TOGGLE_STATUS :', store.getState());


// 1 . thực  hiện coog việc sắp xếp Z-A : 
// a. khi truyền action  lên store xong thì  
var sortAction = {
    type: 'SORT',
    sort: {
        by: 'name',
        value: 1,
    }
}

//b : trong store truyền đến Dispatcher .
store.dispatch(sortAction);
//trả ra state mới 
console.log('SORT ACTION' , store.getState() ) ;


