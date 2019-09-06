
//console.log("demo redux") ;
import { createStore } from 'redux';
import { level, sort } from './actions/index';
import myReducer from './reducers/index';

//tạo 1  store 
const store = createStore(myReducer);

console.log('default', store.getState());
// 1 . thực  hiện coog việc thay đổi status
//truyền action mới tạo xuống dispatch 
store.dispatch(level());
//getState() : trả về state defaut
console.log('TOGGLE_STATUS :', store.getState());

//2 :  đã tạo action riêng nên chỉ cần gọi lại thằng sort bên action  : 
store.dispatch(
    sort({
        by: 'name',
        value: 1
    })
);
//trả ra state mới 
console.log('SORT ACTION', store.getState());


