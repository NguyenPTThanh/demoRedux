import * as types from './../contans/ActionTypes';

var initialState = ''; // search dùng keyword kiểu string nên dùng : ''  .

const search = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH:
            // console.log(state); //state ban đầu là rỗng
            // console.log(action); // sau khi bấm keyword thì hiển ra . 
            return action.keyword;

        default:
            return state;
    }
}
export default search;