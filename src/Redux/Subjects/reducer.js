import { GET_SUBJECTS } from "./actiontypes"

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
        default :{
            return state;
        }
    }

}