import * as types from '../contans/ActionTypes';


var initialState = {
    id: '',
    name: '',
    email: '',
    level: 'medium',
};   //note : muốn editting trả về giá trị rỗng trước đã , nếu  mà ghi dataItem trả về giá trị data của hắn 
const itemEditing = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_TASK:
            //console.log(action.item);
            return { ...action.item };
        default:
            return state;
    }
}
export default itemEditing;