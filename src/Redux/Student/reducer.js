import { GET_STUDENT, POST_STUDENT } from "./actiontypes"

const intialstate = { 
    students: [] 
}
export const StudentReducer = (state = intialstate, {type, payload}) =>{
    switch (type){
        case GET_STUDENT : {
            return {
                ...state,
                students: payload
            }
        }
           case POST_STUDENT :{
            return { 
                ...state, 
                students: [...state.students, payload] 
            };
            }
            default : {
            return state;
        }
    }
}
