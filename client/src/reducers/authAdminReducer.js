<<<<<<< HEAD
import isEmpty from '../validation/is-empty';
import {SET_CURRENT_ADMIN,GET_PROJECTS,GET_INSTRUCTORS,GET_STUDENTS,GET_ERRORS} from '../actions/types';
=======
import isEmpty from "../validation/is-empty";
import {
  SET_CURRENT_ADMIN,
  GET_PROJECTS,
  GET_INSTRUCTORS,
  GET_STUDENTS
} from "../actions/types";
>>>>>>> c0f51ca2b428b833d383c818084c2166cda156ea

const initialState = {
  isAuthenticated: false,
  admin: {},
  projects: [],
  instructors: [],
  students: []
};

const authAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_ADMIN:
      console.log("dispatched SET_CURRENT_ADMIN", state);
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        admin: action.payload
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };
    case GET_INSTRUCTORS:
      return {
        ...state,
        instructors: action.payload
      };
    case GET_STUDENTS:
      return {
        ...state,
        students: action.payload
      };
    default:
      return state;
  }
};

<<<<<<< HEAD
const authAdminReducer = (state=initialState,action)=>{
    switch(action.type){
            case SET_CURRENT_ADMIN:
                return{
                    ...state,
                    isAuthenticated: !isEmpty(action.payload),
                    admin: action.payload
                }
            case GET_PROJECTS:
                return{
                    ...state,
                    projects:action.payload
                }
            case GET_INSTRUCTORS:
                return{
                    ...state,
                    instructors:action.payload
                }
            case GET_STUDENTS:
                return{
                    ...state,
                    students:action.payload
                }
            case GET_ERRORS:
                return{
                    ...state,
                    errors:action.payload
                }
            default:
            return state;
    }
}

export default authAdminReducer;
=======
export default authAdminReducer;
>>>>>>> c0f51ca2b428b833d383c818084c2166cda156ea
