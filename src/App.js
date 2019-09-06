import React, { Component } from 'react';
import './App.css';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Control from './components/Control';
import { connect } from 'react-redux';
import * as actions from './actions/index';
//import {orderBy  } from 'lodash' ;

//demo Ex redux 
//import demo from './trainning/demo' ;   
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //dữ liệu data:(gọi this.data (keyngoai))
      //data: dataItem, // đã gọi trong redux 
      //isDisplayForm: false,  đã gọi trong redux 
      // taskEditing: null,
      //tạo filter :Search 
      filter: {
        name: '',
        level: -1,
      },
      //keyword: '',
      //sort 
      //value: 0
      // //sort 2 : 
      // by: 'name',
      // orderDir: 'asc',

    };
  }

  // show Form 
  onToggleForm = () => {

    // do mapDispatchToProps là đặt onToggleForm
    var { itemEditing } = this.props;
    if (itemEditing && itemEditing.id !== '') {
      this.props.onOpenForm();
    } else {
      this.props.onToggleForm();
    }
    this.props.onClearTask({
      id: '',
      name: '',
      email: '',
      level: 'medium'
    });
  }




  // delete
  // 1. func tim vi tri cua item
  // findIndex = (data, id) => {
  //   var index = -1;
  //   data.forEach((item, i) => {
  //     if (item.id === id) {
  //       index = i;
  //     }
  //   })
  //   return index;

  // }
  // // 2. xóa Item
  // onDelete = (item) => {
  //   //   console.log(item);
  //   //console.log(this.findIndex(this.state.data,item.id));
  //   var { data } = this.state;
  //   if (window.confirm('Are you sure you want to delete this item?')) {
  //     var index = this.findIndex(data, item.id);
  //     this.setState({
  //       //coppy đối tượng bằng dấu 3 chấm
  //       data: [
  //         ...data.slice(0, index),
  //         ...data.slice(index + 1)
  //       ]
  //     });
  //   }
  // }

  //Edit  
  // onEdit = (item) => {
  //   //console.log(id);
  //   // var { data } = this.state;
  //   // var index = this.findIndex(data, item.id);
  //   // var taskEditing = data[index];
  //   // this.setState({
  //   //   taskEditing: taskEditing
  //   // });
  //   // this.onToggleForm();
  //   //console.log(this.state.taskEditing)
  // }

  // Search 
  // khi đẩy từ serach.js đẩy ra app :
  // onSearch = (keyword) => {
  //   //console.log(keyword);
  //   this.setState({
  //     keyword: keyword,
  //   })
  // }
  // sort 
  // onSort = (filter) => {
  //   //console.log(filter);
  //   this.setState({
  //     value: filter
  //   });
  // }
  //sort 2
  handleSort = (by, orderDir) => {
    this.setState({
      by: by,
      orderDir: orderDir,
    })

  }

  render() {
    //use es6 
    //let{by , orderDir} = this.state ;
    //value , filter ,data , keyword 
    // var {
    //   //isDisplayForm,
    //   taskEditing
    // } = this.state;
    // var { isDisplayForm } = this.props;
    // nếu true ->TaskForm
    // var elmTaskForm = isDisplayForm ? <TaskForm
    //   //onSubmit={this.onSubmit} //submit làm trong task.js /redux
    //   task={taskEditing}
    // //cancelForm={this.onCloseForm}
    // /> : '';
    //tạo ra isDisplayForm bằng this.props để map state thành props

    

    // Func Sort
    // data.sort((a, b) => {
    //   var nameA = a.name.toUpperCase();
    //   var nameB = b.name.toUpperCase();
    //   if (nameA > nameB) return value;
    //   else if (nameA < nameB) return -value;
    //   else return 0;
    // });

    //data = orderBy(data ,[by],[orderDir] );
    // console.log(this.state.value) ;


    return (
      <div className="container">
        <div className=" col-lg-12  border-bottom p-3 row">
          <h1>Project 01 - ToDo List <small>ReactJS</small></h1>
        </div>
        <div className="row col-lg-12 pt-3">
          <div className=" row col-lg-9 ml-auto ">
            {/* Task Control */}
            <Control
              //nhan func -> tao ra onSearch on App.js
              //onSearch={this.onSearch}
              // onSort={this.onSort}
              //onClickSort={this.handleSort}
            />
          </div>
          <div className="col-lg-3 ml-auto">
            <button type="button" className="btn btn-info btn-block " onClick={this.onToggleForm}  >
              {/* {(this.state.isDisplayForm ) ? 'Close Item' : 'Add Item'} */}
              Add Item
            </button>
          </div>
        </div>
        <TaskList
        //not use on redux 
        //data={data}
        // onEdit={this.onEdit}
        //onDelete={this.onDelete}
        />
        <div className="row">
          {/* {elmTaskForm} */}
          <TaskForm
          // task={taskEditing} 
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // isDisplayForm: state.isDisplayForm
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {   
      //cần dispatch action toggleform bên action/index
      dispatch(actions.toggleForm())
    },
    onClearTask: (task) => {
      //addTask la cua index.js /actions
      //clear cái đã edit .
      dispatch(actions.editTask(task))
    },
    onOpenForm: () => {
      dispatch(actions.openForm())
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
