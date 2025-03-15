import axios from "axios";
import { GET_SUBJECTS } from "./actiontypes";
// http://localhost:8080/subject
export const getsubjects = () => async(dispatch) =>{
    try{
        let res = await axios.get(`http://localhost:8080/subject`);
        return dispatch({type: GET_SUBJECTS, payload : res.data})
    }catch(err){
        console.log('error',err);
        
    }
}