import level from './level';
import sort  from './sort' ;
import {combineReducers } from 'redux';

const  myReducer = combineReducers({
    level , //level : level ,
    sort , // sort : { by :  by , value :value }
})
export default myReducer ;  