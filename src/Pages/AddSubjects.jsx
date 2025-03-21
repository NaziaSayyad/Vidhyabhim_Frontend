import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addsubjects, getsubjects } from "../Redux/Subjects/action";
import "./AddSubject.css";

export const AddSubjects = () =>{
     
      const dispatch = useDispatch();
    const [formData,setFormData] = useState({
            streamname: "",
            semester: "",
            session:  "",
            course: [
                {
                papercode: "101",
                subject: "MLT",
                MAX : "100",
                PASS : "33",
                obtained :""
              },
               {
                papercode: "102",
                subject: "OTT",
                MAX: "100",
                PASS: "33",
               obtained: ""
              },
              {
                papercode: "103",
                subject: "ICM",
                MAX : "100",
                PASS : "33",
                obtained :""
              },
               {
                papercode: "104",
                subject: "HAB",
                MAX: "100",
                PASS: "33",
               obtained: ""
              },
              {
                papercode: "105",
                subject: "BCP",
                MAX : "100",
                PASS : "33",
                obtained :""
              },
               {
                papercode: "105",
                subject: "VIVA",
                MAX: "100",
                PASS: "33",
               obtained: ""
              }
            ],
            enroll: "",
            DATE: ""
          
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle subject input changes
    const handleSubjectChange = (index, field, value) => {
        const updatedCourses = [...formData.course];
        updatedCourses[index][field] = value;
        setFormData({ ...formData, course: updatedCourses });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
      const message = await dispatch(addsubjects(formData))
    //   console.log(message, "msg");
     if(message !== "undefined"){
        alert(message)
     }
      };
useEffect(() =>{
    console.log(formData,"final");
    
},[formData])
      
    return(
        <>
        <h1 style={{margin : '3%'}}> Add Subjects </h1>
        <form onSubmit={handleSubmit} className="student-form">
        <div className="add-student-div">
        <div>
                <label> Enter Stream  Name    : </label>
                <input type="text" name="streamname" placeholder="Stream Name" onChange={handleInputChange} value ={formData.streamname}   />
            
         </div>
         <div>
                <label> Enter Course Name    : </label>
                <input type="text" name="coursename" placeholder="CourseName" onChange={handleInputChange} value ={formData.coursename}   />
            
         </div>
         <div>
                <label> Enter Semester  </label>
                <input type="text" name="semester" placeholder= "semester" onChange={handleInputChange} value ={formData.semester} />
            
         </div>
         <div>
                <label> Enter session  Name    : </label>
                <input type="text" name="session" placeholder="session Name" onChange={handleInputChange} value ={formData.session}   />
            
         </div>
         <div>
                <label> Enter Enroll Number     : </label>
                <input type="text" name="enroll" placeholder="Enroll Number" onChange={handleInputChange} value ={formData.enroll}   />
            
         </div>
         <div>
                <label> Enter Date  : </label>
                <input type="text" name="DATE" placeholder="date" onChange={handleInputChange} value ={formData.DATE}   />
            
         </div>
        
       
        </div>
         {/* Course Details */}
        <div>
        <h3>Subjects</h3>
            {formData.course.map((subject, index) => (
                <div key={index} className="subject-row">
                    <input type="text" value={subject.papercode} onChange={(e) => handleSubjectChange(index, "papercode", e.target.value)} placeholder="Paper Code" required />
                    <input type="text" value={subject.subject} onChange={(e) => handleSubjectChange(index, "subject", e.target.value)} placeholder="Subject Name" required />
                    <input type="number" value={subject.MAX} onChange={(e) => handleSubjectChange(index, "MAX", e.target.value)} placeholder="Max Marks" required />
                    <input type="number" value={subject.PASS} onChange={(e) => handleSubjectChange(index, "PASS", e.target.value)} placeholder="Passing Marks" required />
                    <input type="number" value={subject.obtained} onChange={(e) => handleSubjectChange(index, "obtained", e.target.value)} placeholder="Obtained Marks" required />
                </div>
            ))}
             <button type="submit">Submit</button>
        </div>
        </form>
        </>
    )
}