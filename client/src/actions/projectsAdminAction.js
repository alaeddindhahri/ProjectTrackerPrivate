import axios from 'axios';

import {GET_PROJECTS} from './types';

export const setProjects=projects=>{
    return{
        type:GET_PROJECTS,
        payload:projects
    }
}