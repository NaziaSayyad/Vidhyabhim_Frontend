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
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
            <input type="enroll" name="enroll" placeholder="enroll" onChange={handleChange}   />
            <input type="text" name="fphone" placeholder="fPhone" onChange={handleChange}   />
            <input type="text" name="CourseName" placeholder="CourseName" onChange={handleChange}   />
            <input type="text" name="streamname" placeholder="streamname" onChange={handleChange}   />
            <input type="text" name="admissionnumber" placeholder="admissionnumber" onChange={handleChange}   />
            <input type="text" name="session" placeholder="session" onChange={handleChange}   />
            <input type="text" name="studentName" placeholder="studentName" onChange={handleChange}   />
            <input type="text" name="gender" placeholder="gender" onChange={handleChange}   />
            <input type="text" name="nationality" placeholder="nationality" onChange={handleChange}   />
            <input type="text" name="caste" placeholder="caste" onChange={handleChange}   />
            <input type="text" name="religion" placeholder="religion" onChange={handleChange}   />
            <input type="text" name="maritialStatus" placeholder="maritialStatus" onChange={handleChange}   />
            <input type="text" name="bloodGroup" placeholder="bloodGroup" onChange={handleChange}   />
            <input type="text" name="dob" placeholder="dob" onChange={handleChange}   />
            <input type="text" name="address" placeholder="address" onChange={handleChange}   />
            <input type="text" name="pincode" placeholder="pincode" onChange={handleChange}   />
            <input type="text" name="aadhar" placeholder="aadhar" onChange={handleChange}   />
            <input type="text" name="fname" placeholder="fname" onChange={handleChange}   />
            <input type="text" name="mname" placeholder="mname" onChange={handleChange}   />
            <input type="text" name="other1" placeholder="other1" onChange={handleChange}   />
            <input type="text" name= "other2"placeholder  ="other2" onChange={handleChange}   />
            <input type="text" name="BatchName" placeholder="BatchName" onChange={handleChange}   />
            <input type="text" name="BatchTime" placeholder="BatchTime" onChange={handleChange}   />
            <input type="file" name="photo" onChange={handleFileChange} />
            <input type="file" name="sign" onChange={handleFileChange} />
            <input type="file" name="doc1" onChange={handleFileChange} />
            <input type="file" name="doc2" onChange={handleFileChange} />
            <input type="file" name="doc3" onChange={handleFileChange} />
            <input type="file" name="doc4" onChange={handleFileChange} />
            <button type="submit">Add Student</button>
        </form>
    );
};

export default AddStudent;
