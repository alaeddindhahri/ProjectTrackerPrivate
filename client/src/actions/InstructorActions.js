import axios from "axios";
import { GET_INSTRUCTORS } from "./types";

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
