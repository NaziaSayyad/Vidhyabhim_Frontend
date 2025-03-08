import { GET_STUDENT, POST_STUDENT } from "./actiontypes"

const intialstate = { 
    student: [] 
}
export const StudentReducer = (state = intialstate, {type, payload}) =>{
    switch (type){
        case GET_STUDENT: {
            return {
                ...state,
                student : payload
            }
        }
           case POST_STUDENT :{
            return { 
                ...state, 
                student: [...state.student, payload] 
            };
            }
            default : {
            return state;
        }
    }
}
