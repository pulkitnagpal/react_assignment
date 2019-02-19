import {combineReducers} from 'redux';

import employeeList from './reducer-employee';
import activeEmployee from './reducer-active-employee';

const allReducers = combineReducers({
    employeeList : employeeList,
    activeEmployee : activeEmployee
})

export default allReducers;