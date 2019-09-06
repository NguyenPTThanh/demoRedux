import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class Sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //value: 0

        };

    }

    // onChange = (e) =>{
    //    // console.log(e.target.value);
    //    this.props.onSort(e.target.value);

    // }
    handleSort = ( by, orderDir) => {
        //console.log('handle sort ', by + '- ' + orderDir);
        //this.props.onClickSort(by, orderDir);
        this.props.onSort({
            by : by,
            orderDir : orderDir ,
           
        });
        //onsort : dispastch 
    }

    render() {
        //let { by , orderDir} = this.props ;
        //console.log(this.props.sort); 
        return (
            //sort 1 
            // <div className="row">
            //     <select className="form-control" 
            //     id="sel1" 
            //     name="sellist1"
            //      onChange={this.onChange} >
            //         <option value="0"   >All</option>
            //         <option value="1" >Name ASC</option>
            //         <option value="-1" >Name DESC</option>
            //     </select>
            // </div>
            //sort 2
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    By Sort
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" role="button" onClick={() => this.handleSort('name', 'asc')}>Name ASC</a>
                    <a className="dropdown-item" role="button" onClick={() => this.handleSort('name', 'desc')}>Name DESC</a>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        sort : state.sort 
    };
};
// chỉ cần push giá trị lên store k cần map giá lên store 
const mapDispatchToProps = (dispatch, props) => {
    return {
        onSort: (sort) => {
            dispatch(actions.sortTask(sort));
        }

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);