import { combineReducers } from "redux";
import authAdminReducer from "./authAdminReducer";
// eslint-disable-next-line
import authStudentReducer from "./authStudentReducer";
import instructorsReducer from "./instructorsReducer";
import studentsReducer from "./studentsReducer";

export default combineReducers({
  // authStudent: authStudentReducer,
  authAdmin: authAdminReducer,
  instructorsReducer: instructorsReducer,
  studentsReducer: studentsReducer
});
