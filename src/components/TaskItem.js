import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this item?')) {
            this.props.onDeleteTask(id);
        }
    }
    onEdit = (task) => {
        //console.log(this.props.item);
        this.props.onOpenForm();
        this.props.onEditTask(task);
    }


    render() {
        let { item, index } = this.props;
        var classLevel = item.level === 'hight' ? 'badge badge-success' : item.level === 'medium' ? 'badge badge-primary' : 'badge badge-secondary'
        return (
            <tr>
                <th >{index + 1}</th>
                <td colSpan="3">{item.name}</td>
                <td colSpan="4">{item.email}</td>
                <td colSpan="2">
                    <span className={`label ${classLevel}`}>
                        {item.level}
                    </span>
                </td>
                <td colSpan="2">
                    <button type="button" className="btn btn-warning btn-sm mr-2" onClick={() => this.onEdit(item)} >Edit</button>
                    {/* item  trả về 1 mảng araray, bị lập ra mảng, cần trỏ tới item.id */}
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => this.onDelete(item.id)} >Delete</button>
                </td>
            </tr>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteTask: (id) => {
            dispatch(actions.DeleteTaskRequest(id));
            // goi trong action / index.js
        },
        onOpenForm: () => {
            dispatch(actions.openForm());
        },
        onEditTask: (task) => {
            dispatch(actions.TaskEditingRequest(task));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);