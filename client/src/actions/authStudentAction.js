import axios from 'axios';
import setAuthStudentToken from '../utils/setAuthStudentToken';
import jwt_decode from 'jwt-decode';

import {SET_CURRENT_STUDENT} from './types';
import {GET_ERRORS} from './types';
// Login - Get Student Token
export const loginStudent = studentData =>dispatch=>{
    axios.post('/api/student/login',studentData)
        .then(res=>{
            //save to localStorage
            const {token}= res.data;
            //set token to LS
            localStorage.setItem('jwtToken',token);
            //set token to Auth header
            setAuthStudentToken(token);
            //decode token to get user data
            const decoded = jwt_decode(token);
            //set current student
            dispatch(setCurrentStudent(decoded));
        })
        .catch(err=> dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }));
}
//set logged Student
export const setCurrentStudent=decoded=>{
    return{
        type:SET_CURRENT_STUDENT,
        payload:decoded
    }
}

//logout student
export const logoutStudent=()=>dispatch=>{
    // remove token from local storage
    localStorage.removeItem('jwtToken');
    // remove authStudent header for future requests
    setAuthStudentToken(false);
    // set current Student to {} which will set isAuthenticated to false
    dispatch(setCurrentStudent({}));
    window.location.href = '/studentlogin';
}

//update student
export const updateStudent=(idStudent,newData)=>dispatch=>{
    axios.put(`/api/student/update/${idStudent}`,newData)
        .then(res=>{
            //logout student after updating info
            // remove token from local storage
            localStorage.removeItem('jwtToken');
            // remove authStudent header for future requests
            setAuthStudentToken(false);
            // set current Student to {} which will set isAuthenticated to false
            dispatch(setCurrentStudent({}));
            window.location.href = '/studentlogin';
        })
        .catch(err=> dispatch({
            type: GET_ERRORS,
            payload: err.data
        }));
}