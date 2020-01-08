import isEmpty from '../validation/is-empty';
import {SET_CURRENT_ADMIN} from '../actions/types';

const initialState = {
    isAuthenticated:false,
    admin:{}
}


const authAdminReducer = (state=initialState,action)=>{
    switch(action.type){
            case SET_CURRENT_ADMIN:
                console.log("called SET_CURRENT_ADMIN in authAdminReducer",state)
                return{
                    ...state,
                    isAuthenticated: !isEmpty(action.payload),
                    admin: action.payload
                }
            default:
            return state;
    }
}

export default authAdminReducer;