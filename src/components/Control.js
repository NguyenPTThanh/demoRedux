import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
    render() {
        return (
            <div className=" row  container-fluid ">
                <div className="col-lg-7 ">
                    <Search
                        // onSearch={this.props.onSearch}
                         
                    />
                </div>
                <div className=" col-lg-5 ">
                    <Sort 
                  onClickSort = {this.props.onClickSort}
                     //onSort = {this.props.onSort}
                     />
                </div>
            </div>
        );
    }
}
export default Control;