import {combineReducers} from 'redux';
import authAdminReducer from './authAdminReducer';
import authStudentReducer from './authStudentReducer';
import instructorsReducer from "./instructorsReducer";


export default combineReducers({
    authAdmin: authAdminReducer,
    authStudent: authStudentReducer,
    instructorsReducer: instructorsReducer
});
