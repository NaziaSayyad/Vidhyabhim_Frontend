import axios from "axios"
import { GET_STUDENT, POST_STUDENT } from "./actiontypes";

// ✅ Get Students Action

export const getstudents = () => async(dispatch) =>{
    try{
        let res = await axios.get(`https://vidhyabhim-backend.onrender.com/students`);
        return dispatch({type : GET_STUDENT,  payload : res.data});
    }catch(err){
        console.log("error",err);
        
    }
}
// export const poststudents = () => async(dispatch) =>{
//         try{
//             let res = await axios.post(``);
//             return dispatch({type : POST_STUDENT, payload : res.data});
//         }catch(err){
//             console.log("error in adding",err);
//         }
// }

// ✅ Add Student Action
export const addStudent = (studentData) => async (dispatch) => {
    try {
        const formData = new FormData();
        for (let key in studentData) {
            formData.append(key, studentData[key]);
        }
        console.log("Sending data:", Object.fromEntries(formData.entries()));

        const response = await axios.post("http://localhost:8080/addstudent", formData, {
            headers: { "Content-Type": "multipart/form-data" }
        });
        console.log(response,"response");
        
        dispatch({ type: POST_STUDENT, payload: response.data });
    } catch (error) {
        console.log(error);
        
       console.error("❌ Error adding student:", error.response?.data || error.message);
       if(error.response.data.message === 'Student already exists.'){
        alert("Student Already Exist")
       }
    }
};
