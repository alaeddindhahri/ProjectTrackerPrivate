import {combineReducers} from 'redux';
import authAdminReducer from './authAdminReducer';
import authStudentReducer from './authStudentReducer';

export default combineReducers({
    authAdmin: authAdminReducer,
    authStudent: authStudentReducer
});