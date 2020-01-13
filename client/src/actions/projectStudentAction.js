import axios from "axios";
import { GET_PROJECT } from "./types";

// export const getproject = () => async dispatch => {
//   try {
//     const res = await axios.get("/api/projects");
//     dispatch({
//       type: GET_PROJECT,
//       payload: res.data
//     });
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const deleteProject = id => async dispatch => {
//   try {
//     await axios.delete(`/api/projects/${id}`);
//     dispatch(getproject());
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const updateProject = (id, payload) => async dispatch => {
//   try {
//     await axios.put(`/api/projects/${id}`, payload);
//     dispatch(getproject());
//   } catch (err) {
//     console.error(err);
//   }
// };

// export const addProject = payload => async dispatch => {
//   try {
//     await axios.post("/api/projects/createProject", payload);
//     dispatch(getproject());
//   } catch (err) {
//     console.error(err);
//   }
// };
