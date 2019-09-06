
import * as types from './../contans/ActionTypes';
var initialState = {
    by: 'name',
    orderDir: 'asc'
};

var sort = (state = initialState, action) => {
    switch (action.type) {
        case types.SORT:
            return {
                by: action.sort.by,
                orderDir: action.sort.orderDir,
            };
        default:
            return state;
    }
};
export default sort;