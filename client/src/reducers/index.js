import {combineReducers} from 'redux';
import authAdminReducer from './authAdminReducer';


export default combineReducers({
    authAdmin: authAdminReducer
});