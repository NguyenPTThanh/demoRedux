import * as types from './../constants/ActionTypes';


export const level = () => {
    return {
        // type : 'TOGGLE_STATUS'
        type: types.TOGGLE_STATUS
    }
}
//truyền tham số sort ( by  ,value)
export const sort = (sort) => {
    return {
        // type : 'SORT' ,
        type: types.SORT,
        sort: sort  // tương tụ : sort 

    }
}