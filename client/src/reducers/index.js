import { combineReducers } from "redux";
import authAdminReducer from "./authAdminReducer";
import instructorsReducer from "./instructorsReducer";

export default combineReducers({
  authAdmin: authAdminReducer,
  instructorsReducer: instructorsReducer
});
