
var initialState = {
  by: 'name',
  value: -1,
}

var myReducer = (state = initialState, action) => {
  // phân tích: các action gửi từ dispatch xuống reducer 
  if (action.type === 'SORT') {
    //action. truyền tham số lại .
    var { by, value } = action.sort  //by= action.sort.by ... 
    return { by, value }
  }
  return state;
}
export default myReducer; 