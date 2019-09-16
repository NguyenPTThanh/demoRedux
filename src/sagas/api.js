
import axios from 'axios';

const url = "http://5d3ea855139f4200145328c1.mockapi.io/api/todolist";

//list all 
function fetchTodoList() {
    return axios({
        method: "GET",
        url
    })
    .then(function (response) {
        console.log(response);
      });
    //return axios.get(url)
 
}

//add task 

// use data : newTask 
// function addNewTaskAPI(newTask) {
//     return axios({
//         method: "POST",
//         url,
//         data:newTask
//     });
// }

// //delete task 
// function deleteTaskAPI(param) {
//     return axios ({
//         method : "DELETE",
//         url: `${url}/${param}` ,
//         data :null ,
//     })
// }

// //update task 
// function updateTaskAPI(task){
//     return axios ({
//         method : "PUT",
//         url :`${url}/${task.id}`,
//         data :task
//     });
// }

export const api = {
    fetchTodoList,
    // addNewTaskAPI ,
    // deleteTaskAPI,
    // updateTaskAPI ,
}