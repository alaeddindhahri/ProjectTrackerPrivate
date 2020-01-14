import isEmpty from "../validation/is-empty";
import { GET_INSTRUCTORS, SET_CURRENT_INSTRUCTOR } from "../actions/types";

const initialState = {
  isAuthenticatedInstructor: false,
  instructor: {},
  projects: []
};

export default function(state = initialState, action) {
  switch (action.type) {
<<<<<<< HEAD
    // case GET_INSTRUCTORS:
    //   return {
    //     ...state,
    //     instructors: action.payload
    //   };
=======
    case SET_CURRENT_INSTRUCTOR:
      console.log("dispatched SET_CURRENT_INSTRUCTOR ++state", state);
      return {
        ...state,
        isAuthenticatedInstructor: !isEmpty(action.payload),
        instructor: action.payload
      };
    case GET_INSTRUCTORS:
      return {
        ...state,
        instructors: action.payload
      };
>>>>>>> c0f51ca2b428b833d383c818084c2166cda156ea
    default:
      return null;
  }
}
