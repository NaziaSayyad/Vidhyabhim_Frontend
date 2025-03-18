import axios from "axios";
import { GET_SUBJECTS, POST_SUBJECTS } from "./actiontypes";
// http://localhost:8080/subject
export const getsubjects = () => async(dispatch) =>{
    try{
        let res = await axios.get(`http://localhost:8080/subject`);
        return dispatch({type: GET_SUBJECTS, payload : res.data})
    }catch(err){
        console.log('error',err);
        
    }
}
export const addsubjects = (subjectdata) => async (dispatch) =>{
    try {
            const formData = new FormData();
            for (let key in subjectdata) {
                formData.append(key, subjectdata[key]);
            }
    
            const response = await axios.post("http://localhost:8080/add-subject", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            console.log(response,"response");
            
            dispatch({ type: POST_SUBJECTS, payload: response.data});
            return response.data.message || "Subjects added successfully!"; 
        } catch (error) {
            console.log(error);
            
           console.error("❌ Error adding student:", error.response?.data || error.message);
           if(error.response.data.message === 'Student already exists.'){
            alert("Student Already Exist")
           }
        }
}