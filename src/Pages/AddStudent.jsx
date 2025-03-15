import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Addstudent.css";
import { addStudent } from "../Redux/Student/actions";

const AddStudent = () => {
    const data = useSelector((store) => store.student)
    console.log(data,"Finaldata");
    
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        coursename: "",
        streamname: "",
        semester: "",
        enrol: "",
        admissionnumber: "",
        admissiondate: "",
        session: "",
        studentname: "",
        gender: "",
        nationality: "",
        caste: "",
        religion: "",
        maritialstatus: "",
        bloodgroup: "",
        dob: "",
        address: "",
        pincode: "",
        aadhar: "",
        fname: "",
        fphone: "",
        mname: "",
        mphone: "",
        other1: "",
        other2: "",
        batchname: "",
        batchtime: "",
        photo: null,
        sign: null,
        doc1: null,
        doc2: null,
        doc3: null,
        doc4: null
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleFileChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addStudent(formData));
    };
    
    useEffect(() =>{
        console.log(formData);
        
    },[])

    return (
        <>
        <div className="content-wrapper">
         <form>
        <div id="parent">
          <div id="child-1">
            <div style={{ backgroundColor: "yellow" }}>
          <h2 className="form-title">Add New Student</h2>
        </div>
            <div >
          <div className="form-group">
            <label>Select Batch:</label>
            <select name="batch" onChange={handleChange} value={formData.batch || ""}>
              <option value="">Select Batch</option>
              <option value="Batch 1">Batch 1</option>
              <option value="Batch 2">Batch 2</option>
            </select>
          </div>

          <div className="form-group">
            <label>Select Stream:</label>
            <select name="stream" onChange={handleChange} value={formData.stream || ""}>
              <option value="">Select Stream</option>
              <option value="Stream 1">Stream 1</option>
              <option value="Stream 2">Stream 2</option>
            </select>
          </div>

          <div className="form-group">
            <label>Select Course:</label>
            <select name="course" onChange={handleChange} value={formData.course || ""}>
              <option value="">Select Course</option>
              <option value="Course 1">Course 1</option>
              <option value="Course 2">Course 2</option>
            </select>
          </div>
        </div>  
         {/* Student Details */}
         <div id="form-input">
            <div className="form-group">
                <label> Enter Email: </label>
                 <input type="email" name="email" placeholder="Email" onChange={handleChange} value ={formData.email} required />
            </div>
            <div className="form-group">
                <label> Enter Phone : </label>
                <input type="text" name="phone" placeholder="Phone" onChange={handleChange} value ={formData.phone} required />
            </div>
            <div className="form-group">
                <label> Enter Enroll Number  : </label>
                <input type="enroll" name="enroll" placeholder="enroll" onChange={handleChange} value ={formData.enrol}   />
                </div>
           <div className="form-group">
                <label> Enter Phone : </label>
                <input type="text" name="phone" placeholder="Phone" onChange={handleChange} value ={formData.phone} required />
            </div>
            <div className="form-group">
                <label> Enter Adress: </label>
                <input type="text" name="address" placeholder="address" onChange={handleChange} value ={formData.address}   />
            </div>
            <div className="form-group">
                <label> Enter Stream Name: </label>
                <input type="text" name="streamname" placeholder="streamname" onChange={handleChange} value ={formData.streamname}   />
            </div>
            <div className="form-group">
                <label> Enter Course Name: </label>
                <input type="text" name="coursename" placeholder="coursename" onChange={handleChange} value ={formData.coursename}   />
            </div>
            <div className="form-group">
                <label> Enter Admission Number: </label>
                <input type="text" name="admissionnumber" placeholder="admissionnumber" onChange={handleChange} value ={formData.admissionnumber}   />
            </div>
            <div className="form-group">
                <label> Enter Student Name: </label>
             <input type="text" name="studentName" placeholder="studentName" onChange={handleChange} value ={formData.studentname}   />
                </div>
            <div className="form-group">
                <label> Enter session Number  : </label>
                <input type="text" name="session" placeholder="session" onChange={handleChange} value ={formData.session}   />
            </div>
            <div className="form-group">
                <label> Enter Batch Name : </label>
                <input type="text" name="BatchName" placeholder="BatchName" onChange={handleChange} value ={formData.batchname}   />
                </div>
            <div className="form-group">
                <label> Enter Batch Time   : </label>
                <input type="text" name="BatchTime" placeholder="BatchTime" onChange={handleChange} value ={formData.batchtime}   />
          
             </div>
            

                <div className="form-group">
                <label> Enter Gender   : </label>
                <input type="text" name="gender" placeholder="gender" onChange={handleChange} value ={formData.gender}   />
                </div>
                <div className="form-group">
                <label> Enter Nationality    : </label>
                <input type="text" name="nationality" placeholder="nationality" onChange={handleChange} value ={formData.nationality}   />
            </div>
            <div className="form-group">
                <label> Enter religion    : </label>
                <input type="text" name="religion" placeholder="religion" onChange={handleChange} value ={formData.religion}   />
                </div>
            <div className="form-group">
                <label> Enter Maritial Status    : </label>
                <input type="text" name="maritialStatus" placeholder="maritialStatus" onChange={handleChange} value ={formData.maritialstatus}   />
                </div>
            <div className="form-group">
                <label> Enter Blood Group   : </label>
                <input type="text" name="bloodGroup" placeholder="bloodGroup" onChange={handleChange} value ={formData.bloodgroup}   />
            </div>
            <div className="form-group">
                <label> Enter DOB    : </label>
                <input type="text" name="dob" placeholder="dob" onChange={handleChange} value ={formData.dob}   />
            </div>
            <div className="form-group">
                <label> Enter PinCode : </label>
                <input type="text" name="pincode" placeholder="pincode" onChange={handleChange} value ={formData.pincode}   />
                </div>
            <div className="form-group">
                <label> Enter Adhar Card  : </label>
                <input type="text" name="aadhar" placeholder="aadhar" onChange={handleChange} value ={formData.aadhar}   />
            </div>
            
            {/* Parent Details  */}
         
            {/* Upload Files  */}
         </div>    
            </div>
            <div id="child-2">
            <div className="content-wrapper-2">
            <div style={{ backgroundColor: "skyBlue" }}>
            <h2 className="form-title">Upload Student</h2>
          </div>
          <div className="form-group">
                <label> Enter Father Name    : </label>
                <input type="text" name="fname" placeholder="FatherName" onChange={handleChange} value ={formData.fname}   />
            
            </div>
            <div className="form-group">
                <label> Enter Father Number    : </label>
                <input type="text" name="fphone" placeholder="fPhone" onChange={handleChange} value ={formData.fphone}   />
                </div>
            <div className="form-group">
                <label> Enter Mother's Name : </label>
                <input type="text" name="mname" placeholder="mname" onChange={handleChange} value ={formData.mname}   />
                </div>
           
                <div className="form-group">
                <label> Other 1: </label>
                <input type="text" name="other1" placeholder="other1" onChange={handleChange} value ={formData.other1}   />
                </div>
                <div className="form-group">
                <label> Other 2: </label>
                <input type="text" name= "other2"placeholder  ="other2" onChange={handleChange} value ={formData.other2}   />
                </div>
                <div className="form-group">
                <label> Upload Photo: </label>
                <input type="file" name="photo" onChange={handleFileChange} />
                </div>
                <div className="form-group">
                <label> Upload Sign: </label>
                <input type="file" name="Sign" onChange={handleFileChange} />
                </div>
                <div className="form-group">
                <label> Upload Doc1: </label>
                <input type="file" name="Doc1" onChange={handleFileChange} />
                </div>
                <div className="form-group">
                <label> Upload doc2: </label>
                <input type="file" name="doc2" onChange={handleFileChange} />
                </div>
                <div className="form-group">
                <label> Upload doc3: </label>
                <input type="file" name="doc3" onChange={handleFileChange} />
                </div>
                <div className="form-group">
                <label> Upload doc4: </label>
                <input type="file" name="doc4" onChange={handleFileChange} />
                </div>

                <button type="button" onClick={handleSubmit}> Submit </button>
            </div>
            
            </div>
        </div>
        
            
           
        </form>
        </div>

        </>
    )
};

export default AddStudent;
