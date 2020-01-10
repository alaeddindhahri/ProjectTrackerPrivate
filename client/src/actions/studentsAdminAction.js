import axios from 'axios';

import {GET_STUDENTS} from './types';

export const setStudents=()=>dispatch=>{
    axios
        .get('/api/admin/students')
        .then(res=>dispatch({
            type:GET_STUDENTS,
            payload:res.data
        }))
        .catch(err=>console.log(err));
};