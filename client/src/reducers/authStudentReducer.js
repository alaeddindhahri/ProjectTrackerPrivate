import isEmpty from '../validation/is-empty';
import {GET_PROJECTS,GET_STUDENTS} from '../actions/types';

const initialState = {
    isAuthenticated:false,
    projects:[],
    students:[]
}


const authStudentReducer = (state=initialState,action)=>{
    switch(action.type){
            case SET_CURRENT_STUDENT:
                return{
                    ...state,
                    isAuthenticated: !isEmpty(action.payload),
                    students: action.payload
                }
            case GET_PROJECTS:
                return{
                    ...state,
                    projects:action.payload
                }
            default:
            return state;
    }
}

export default authStudentReducer;