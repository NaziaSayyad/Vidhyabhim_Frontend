import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addsubjects, getsubjects } from "../Redux/Subjects/action";

export const AddSubjects = () =>{
    const subjects = useSelector((store) => store.subject.subjects);
    const dispatch = useDispatch();
    const [formData,setFormData] = useState({
            coursename: "",
            passingmarks: "",
            semester: "",
            streamname: "",
            subjectname:"",
            totalmarks: ""
    })

  
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(addsubjects(formData))
      };

      
    return(
        <>
        <h1 style={{margin : '3%'}}> Add Subjects </h1>
        <div className="add-student-div">
        <div>
                <label> Enter Stream  Name    : </label>
                <input type="text" name="fname" placeholder="Stream Name" onChange={handleChange} value ={formData.streamname}   />
            
         </div>
         <div>
                <label> Enter Course Name    : </label>
                <input type="text" name="fname" placeholder="CourseName" onChange={handleChange} value ={formData.coursename}   />
            
         </div>
         <div>
                <label> Enter Semester    : </label>
                <input type="text" name="fname" placeholder="Semester" onChange={handleChange} value ={formData.streamname} />
            
         </div>
        <div className="parent-div"> 
        <div>
                <label>SubjectCode</label>
                <input type="text" name="fname" placeholder="Subject code" onChange={handleChange} value ={formData.streamname} />
            
         </div>
         <div>
                <label>Subject Name </label>
                <input type="text" name="fname" placeholder="Stream Name" onChange={handleChange} value ={formData.streamname} />
            
         </div>
         <div>
                <label>Total Marks </label>
                <input type="text" name="fname" placeholder="100" onChange={handleChange} value ={formData.streamname}   />
            
         </div>
         <div>
                <label>Passing Marks </label>
                <input type="text" name="fname" placeholder="33" onChange={handleChange} value ={formData.streamname}   />
            
         </div>
         <div>
                <label>Theory Marks </label>
                <input type="text" name="fname" placeholder="Theory Marks" onChange={handleChange} value ={formData.streamname} />
            
         </div>
         
        </div>
        </div>
        </>
    )
}