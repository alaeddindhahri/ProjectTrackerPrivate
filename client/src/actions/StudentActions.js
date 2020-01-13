import axios from "axios";
import { GET_STUDENTS } from "./types";

export const getStudents = () => dispatch => {
  axios.get("api/students/getStudents").then(res =>
    dispatch({
      type: GET_STUDENTS,
      payload: res.data
    })
  );
};

export const addStudent = newStudent => dispatch => {
  axios
    .post("api/students/registerStudent", newStudent)
    .then(res => dispatch(getStudents()));
};
