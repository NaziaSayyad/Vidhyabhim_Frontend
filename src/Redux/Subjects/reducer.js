import { GET_SUBJECTS, POST_SUBJECTS } from "./actiontypes"

const intialstate ={
    subjects: []
}
export const SubjectReducer = (state = intialstate,{type,payload}) =>{
    switch(type){
        case GET_SUBJECTS:{
            return{
                ...state,
                subjects :payload
            }
        }
        case POST_SUBJECTS :{
            return {
                ...state,
                subjects: [...state.subjects,payload]
            }
        }
        default :{
            return state;
        }
    }

}