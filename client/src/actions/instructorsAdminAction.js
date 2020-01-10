import axios from 'axios';

import {GET_INSTRUCTORS} from './types';

export const setInstructors=()=>dispatch=>{
    axios
        .get('/api/admin/instructors')
        .then(res=>dispatch({
            type:GET_INSTRUCTORS,
            payload:res.data
        }))
        .catch(err=>console.log(err));
};