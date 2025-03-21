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

// ✅ Add Student Action
export const addStudent = (studentData) => async (dispatch) => {
    try {
        const formData = new FormData();
        for (let key in studentData) {
            if (studentData[key] instanceof File) {
                formData.append(key, studentData[key]); // Append files directly
            } else {
                formData.append(key, studentData[key]); // Append text fields
            }
        }
        console.log("Sending data:", Object.fromEntries(formData.entries()));

        const response = await axios.post("http://localhost:8080/addstudent", formData, {
            headers: { "Content-Type": "multipart/form-data" }
        });
        console.log(response,"response");
        

        if (response.status === 200 || response.status === 201) {
            alert("✅ Student added successfully!");
        }

        dispatch({ type: POST_STUDENT, payload: response.data });

    } catch (error) {
        console.error("❌ Error adding student:", error.response?.data || error.message);

    // Check if error.response exists and has a message
    if (error.response && error.response.data?.message === 'Student already exists.') {
        // alert("⚠️ Student Already Exists!");
        console.log(error.response.data?.email , "email");
        console.log(error.response.data?.phone, "phone");
    } else {
        alert("❌ Error adding student!  Please try again.", error.response.data?.message || error.message);
        }
    }
}
