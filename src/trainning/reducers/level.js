
// cho mặc định false
var initialState = false ;

var myReducer = (state = initialState, action) => {
    // phân tích: các action gửi từ dispatch xuống reducer 
    if (action.type === 'TOGGLE_STATUS') {
        // khi phân tích xong thì  reducer cũng tạo ra state mới  
        state = !state;
    }
    return state;
}
export default myReducer ; 