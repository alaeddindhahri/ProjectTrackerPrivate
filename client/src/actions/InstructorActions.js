import axios from "axios";
import { GET_INSTRUCTORS } from "./types";
import setAuthInstructorToken from "../utils/setAuthInstructorToken";
import jwt_decode from "jwt-decode";

import { SET_CURRENT_INSTRUCTOR } from "./types";
import { GET_ERRORS } from "./types";

// Login - Get INSTRUCTOR Token
export const loginInstructor = instructordata => dispatch => {
  console.log("hello from login", instructordata);
  axios
    .post("/api/instructors/login", instructordata)
    .then(res => {
      console.log("res.data : ", res.data);
      //save to localStorage
      const { token } = res.data;
      //set token to LS
      localStorage.setItem("jwtToken", token);
      //set token to Auth header
      setAuthInstructorToken(token);
      //decode token to get user data
      const decoded = jwt_decode(token);
      //set current admin
      dispatch(setCurrentInstructor(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
//set logged Instructor
export const setCurrentInstructor = decoded => {
  return {
    type: SET_CURRENT_INSTRUCTOR,
    payload: decoded
  };
};

export const getInstructors = () => dispatch => {
  axios.get("api/instructors/getInstructors").then(res =>
    dispatch({
      type: GET_INSTRUCTORS,
      payload: res.data
    })
  );
};

export const addInstructor = newInstructor => dispatch => {
  axios
    .post("api/instructors/registerinstructor", newInstructor)
    .then(res => dispatch(getInstructors()));
};
