import isEmpty from "../validation/is-empty";
import {
  SET_CURRENT_ADMIN,
  GET_PROJECTS,
  GET_INSTRUCTORS,
  GET_STUDENTS
} from "../actions/types";

const initialState = {
  isAuthenticated: false,
  admin: {},
  projects: [],
  instructors: [],
  students: []
};

const authAdminReducer = (state = initialState, action) => {
  console.log("admin reducer");
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

export default authAdminReducer;
